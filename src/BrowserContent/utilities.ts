export default (()=> {
const utilities = {

  getTargetAndKey: (event, property) => {
    const path = property.split('.');
    let target = event;
    let key = path.shift();
    while (path.length) {
      target = target[key];
      key = path.shift();
    }
    return { target, key };
  },

  hideObjectFromTools: (object) => {
    object.userData.fromDevtools = true;
  },

  isHiddenFromTools: (object) => {
    return !!(object.userData && object.userData.fromDevtools);
  },

  forEachDependency(event, fn, options={}) {
    fn(event);

    if (event.isObject3D) {
      if (event.material && event.material.isMaterial) {
        utilities.forEachDependency(event.material, fn, options);
      }
      if (event.geometry && (event.geometry.isGeometry || event.geometry.isBufferGeometry)) {
        utilities.forEachDependency(event.geometry, fn, options);
      }
      if (event.isScene && event.background) {
        utilities.forEachDependency(event.background, fn, options);
      }

      if (options.recursive && event.children && event.children.length > 0) {
        for (let child of event.children) {
          utilities.forEachDependency(child, fn, options);
        }
      }
    }
    else if (event.isBufferGeometry) {
      // handle attributes
    }
    else if (event.isMaterial) {
      for (let key of Object.keys(event)) {
        // @TODO cache textures used as uniforms here as well
        const texture = event[key];
        if (texture && texture.isTexture) {
          utilities.forEachDependency(texture, fn, options);
        }
      }
      if (event.uniforms) {
        for (let name of Object.keys(event.uniforms)) {
          const value = event.uniforms[name].value;
          if (value && value.isTexture) {
            // What other "dependency" data could a material have?
            // more geometry/buffers?
            utilities.forEachDependency(value, fn, options);
          }
        } 
      }
    }
    else if (event.isTexture) {
      if (event.image && event.image.uuid) {
        // maybe don't cache images as an event
        //Object.prototype.toString.call(this.image) === '[object Object]';
      }
    }
  },

  getBaseType: (event) => {
    let type =
           // objects
           event.isScene ? 'Scene' :
           event.isGroup ? 'Group' :
           event.isLOD ? 'LOD' :
           event.isBone ? 'Bone' :
           event.isSkeleton ? 'Skeleton' :
           event.isPoints ? 'Points' :
           event.isSprite ? 'Sprite' :

           event.isSkinnedMesh ? 'SkinnedMesh' :
           event.isInstancedMesh ? 'InstancedMesh' :
           event.isMesh ? 'Mesh' :

           event.isLineLoop ? 'LineLoop' :
           event.isLineSegments ? 'LineSegments' :
           event.isLine ? 'Line' :

           // lights
           event.isAmbientLightProbe ? 'AmbientLightProbe' :
           event.isHemisphereLightProbe ? 'HemisphereLightProbe' :
           event.isLightProbe ? 'LightProbe' :

           event.isAmbientLight ? 'AmbientLight' :
           event.isDirectionalLight ? 'DirectionalLight' :
           event.isHemisphereLight ? 'HemisphereLight' :
           event.isPointLight ? 'PointLight' :
           event.isRectAreaLight ? 'RectAreaLight' :
           event.isSpotLight ? 'SpotLight' :
           event.isLight ? 'Light' :

           // cameras
           event.isArrayCamera ? 'ArrayCamera' :
           event.isPerspectiveCamera ? 'PerspectiveCamera' :
           event.isOrthographicCamera ? 'OrthographicCamera' :
           event.isCubeCamera ? 'CubeCamera' :
           event.isCamera ? 'Camera' :

           event.isObject3D ? 'Object3D' :

           // geometries only have `type` property containing
           // a reference to its type if a preset like Sphere or Plane.
           event.isGeometry ? 'Geometry' :
           //@TODO what is DirectGeometry? event.isDirectGeometry ? 'DirectGeometry' :
           event.isInstancedBufferGeometry ? 'InstancedBufferGeometry' :
           event.isBufferGeometry ? 'BufferGeometry' :
           // buffer attributes
           event.isInstancedBufferAttribute ? 'InstancedBufferAttribute' :
           event.isInterleavedBufferAttribute ? 'InterleavedBufferAttribute' :
           event.isBufferAttribute ? 'BufferAttribute' :

           // materials
           event.isLineBasicMaterial ? 'LineBasicMaterial' :
           event.isLineDashedMaterial ? 'LineDashedMaterial' :
           event.isMeshBasicMaterial ? 'MeshBasicMaterial' :
           event.isMeshDepthMaterial ? 'MeshDepthMaterial' :
           event.isMeshDistanceMaterial ? 'MeshDistanceMaterial' :
           event.isMeshLambertMaterial ? 'MeshLambertMaterial' :
           event.isMeshMatcapMaterial ? 'MeshMatcapMaterial' :
           event.isMeshNormalMaterial ? 'MeshNormalMaterial' :
           event.isMeshToonMaterial ? 'MeshToonMaterial' :
           event.isMeshPhongMaterial ? 'MeshPhongMaterial' :
           event.isPointsMaterial ? 'PointsMaterial' :
           event.isShadowMaterial ? 'ShadowMaterial' :
           event.isSpriteMaterial ? 'SpriteMaterial' :

           event.isMeshPhysicalMaterial ? 'MeshPhysicalMaterial' :
           event.isMeshStandardMaterial ? 'MeshStandardMaterial' :

           event.isRawShaderMaterial ? 'RawShaderMaterial' :
           event.isShaderMaterial ? 'ShaderMaterial' :
           event.isMaterial ? 'Material' :

           // textures 
           event.isCanvasTexture ? 'CanvasTexture' :
           event.isCompressedTexture ? 'CompressedTexture' :
           event.isCubeTexture ? 'CubeTexture' :
           event.isDataTexture2DArray ? 'DataTexture2DArray' :
           event.isDataTexture3D ? 'DataTexture3D' :
           event.isDataTexture ? 'DataTexture' :
           event.isDepthTexture ? 'DepthTexture' :
           event.isVideoTexture ? 'VideoTexture' :
           event.isTexture ? 'Texture' :

           // Not yet supported fully, but tag it accordingly
           event.isWebGLRenderTarget ? 'WebGLRenderTarget' :

           // renderers
           // `WebGLRenderer` does not have a boolean prop,
	   // test for that below.
           event.isWebGL1Renderer ? 'WebGL1Renderer' :

           // If nothing matches...
           'Unknown';

    if (type === 'Unknown' && typeof event.render === 'function' && typeof event.setPixelRatio === 'function') {
      type = 'WebGLRenderer';
    }

    return type;
  },
};
return utilities;
})