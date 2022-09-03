// @ts-nocheck
// Derived from Three-Devtools github
export default (() => {
  const isDevtoolsSerialization: any = (meta) => !!(meta && meta.devtoolsConfig);
  const isObject: any = (o) => Object.prototype.toString.call(o) === '[object Object]';
  const tempPosition = new THREE.Vector3();
  const tempRotation = new THREE.Quaternion();
  const tempScale = new THREE.Vector3();
  const tempEuler = new THREE.Euler();
  const utils = utilities;

  return function createJSON(meta: any) {
    const toJSON = this.constructor
      && this.constructor.prototype
      && this.constructor.prototype.toJSON;

    if (toJSON && !isDevtoolsSerialization(meta)) {
      return toJSON.apply(this, arguments);
    }

    const serializeChildren = !(meta && meta.devtoolsConfig.serializeChildren === false);

    const baseType = utils.getBaseType(this);

    let textureData;
    if (this.isTexture) {
      if (isObject(this.image) || (Array.isArray(this.image) && this.image.some(isObject))) {
        textureData = this.image;
        this.image = undefined;
      }
    }

    let children;
    if (this.isObject3D && !serializeChildren) {
      children = this.children;
      this.children = [];
    }

    const data = toJSON ? toJSON.apply(this, arguments) : {};
    if (textureData) {
      this.image = textureData;
    }
    if (children) {
      this.children = children;
    } else if (data.func) {
      data.func = this.parameters.func
        ? this.parameters.func.toString() : '';
    } else if (this.isWebGLRenderTarget) {
      // placeholder
    } else if (this.isInterleavedBufferAttribute) {
      data.count = this.count;
      data.itemSize = this.itemSize;
      data.offset = this.offset;
      data.normalized = this.normalized;
    } else if (baseType === 'WebGLRenderer' || baseType === 'WebGL1Renderer') {
      const { shadowMap } = this;
      const { capabilities } = this;
      data.name = ('name' in this) ? this.name : '';
      data.physicallyCorrectLights = ('physicallyCorrectLights' in this) ? this.physicallyCorrectLights : false;
      data.gammaFactor = ('gammaFactor' in this) ? this.gammaFactor : 2;
      data.outputEncoding = ('outputEncoding' in this) ? this.outputEncoding : 0; // default?
      data.toneMapping = ('toneMapping' in this) ? this.toneMapping : 0; // default?
      data.toneMappingExposure = ('toneMappingExposure' in this) ? this.toneMappingExposure : 1;
      data.autoClear = ('autoClear' in this) ? this.autoClear : true;
      data.autoClearColor = ('autoClearColor' in this) ? this.autoClearColor : true;
      data.autoClearDepth = ('autoClearDepth' in this) ? this.autoClearDepth : true;
      data.autoClearStencil = ('autoClearStencil' in this) ? this.autoClearStencil : true;
      if (shadowMap) {
        data.shadowMap = {};
        data.shadowMap.enabled = ('enabled' in shadowMap) ? shadowMap.enabled : false;
        data.shadowMap.autoUpdate = ('autoUpdate' in shadowMap) ? shadowMap.autoUpdate : true;
        data.shadowMap.type = ('type' in shadowMap) ? shadowMap.type : 0; // default?
      }
      if (capabilities) {
        data.capabilities = {};
        data.capabilities.isWebGL2 = capabilities.isWebGL2;
        data.capabilities.precision = capabilities.precision;
        data.capabilities.floatFragmentTextures = capabilities.floatFragmentTextures;
        data.capabilities.floatVertexTextures = capabilities.floatVertexTextures;
        data.capabilities.logarithmicDepthBuffer = capabilities.logarithmicDepthBuffer;
        data.capabilities.maxAnisotropy = capabilities.getMaxAnisotropy();
        data.capabilities.maxPrecision = capabilities.getMaxPrecision();
        data.capabilities.maxAttributes = capabilities.maxAttributes;
        data.capabilities.maxCubemapSize = capabilities.maxCubemapSize;
        data.capabilities.maxFragmentUniforms = capabilities.maxFragmentUniforms;
        data.capabilities.maxTextureSize = capabilities.maxTextureSize;
        data.capabilities.maxTextures = capabilities.maxTextures;
        data.capabilities.maxVaryings = capabilities.maxVaryings;
        data.capabilities.maxVertexTextures = capabilities.maxVertexTextures;
        data.capabilities.maxVertexUniforms = capabilities.maxVertexUniforms;
        data.capabilities.vertexTextures = capabilities.vertexTextures;
      }
    }

    if (data.object) {
      data.object.baseType = baseType;

      if (this.matrix) {
        this.matrix.decompose(tempPosition, tempRotation, tempScale);
        data.object.position = tempPosition.toArray();
        data.object.rotation = tempEuler.setFromQuaternion(tempRotation).toArray();
        data.object.scale = tempScale.toArray();
      }
    } else {
      data.baseType = baseType;
    }
    return data;
  };
});
