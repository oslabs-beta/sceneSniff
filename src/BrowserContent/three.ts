// @ts-nocheck

export default () => {
  const exports = {};
  const module = { exports };
  // threejs.org/license
  (function (h, Fa) { typeof exports === 'object' && typeof module !== 'undefined' ? Fa(exports) : typeof define === 'function' && define.amd ? define(['exports'], Fa) : (h = h || self, Fa(h.THREE = {})); }(this, (h) => {
    function Fa() {} function x(a, b) { this.x = a || 0; this.y = b || 0; } function Da(a, b, c, d) { this._x = a || 0; this._y = b || 0; this._z = c || 0; this._w = void 0 !== d ? d : 1; } function n(a, b, c) { this.x = a || 0; this.y = b || 0; this.z = c || 0; } function za() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]; arguments.length > 0 && console.error('THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.'); }
    function T(a, b, c, d, e, f, g, k, l, m) {
      Object.defineProperty(this, 'id', { value: mj++ }); this.uuid = O.generateUUID(); this.name = ''; this.image = void 0 !== a ? a : T.DEFAULT_IMAGE; this.mipmaps = []; this.mapping = void 0 !== b ? b : T.DEFAULT_MAPPING; this.wrapS = void 0 !== c ? c : 1001; this.wrapT = void 0 !== d ? d : 1001; this.magFilter = void 0 !== e ? e : 1006; this.minFilter = void 0 !== f ? f : 1008; this.anisotropy = void 0 !== l ? l : 1; this.format = void 0 !== g ? g : 1023; this.internalFormat = null; this.type = void 0 !== k ? k : 1009; this.offset = new x(0, 0); this.repeat = new x(1, 1);
      this.center = new x(0, 0); this.rotation = 0; this.matrixAutoUpdate = !0; this.matrix = new za(); this.generateMipmaps = !0; this.premultiplyAlpha = !1; this.flipY = !0; this.unpackAlignment = 4; this.encoding = void 0 !== m ? m : 3E3; this.version = 0; this.onUpdate = null;
    } function S(a, b, c, d) { this.x = a || 0; this.y = b || 0; this.z = c || 0; this.w = void 0 !== d ? d : 1; } function va(a, b, c) {
      this.width = a; this.height = b; this.scissor = new S(0, 0, a, b); this.scissorTest = !1; this.viewport = new S(0, 0, a, b); c = c || {}; this.texture = new T(
        void 0,
        void 0,
        c.wrapS,
        c.wrapT,
        c.magFilter,
        c.minFilter,
        c.format,
        c.type,
        c.anisotropy,
        c.encoding,
      ); this.texture.image = {}; this.texture.image.width = a; this.texture.image.height = b; this.texture.generateMipmaps = void 0 !== c.generateMipmaps ? c.generateMipmaps : !1; this.texture.minFilter = void 0 !== c.minFilter ? c.minFilter : 1006; this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0; this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0; this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null;
    } function Zf(a, b, c) {
      va.call(this, a, b, c); this.samples = 4;
    } function P() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; arguments.length > 0 && console.error('THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.'); } function Ub(a, b, c, d) { this._x = a || 0; this._y = b || 0; this._z = c || 0; this._order = d || Ub.DefaultOrder; } function $f() { this.mask = 1; } function D() {
      Object.defineProperty(this, 'id', { value: nj++ }); this.uuid = O.generateUUID(); this.name = ''; this.type = 'Object3D'; this.parent = null; this.children = []; this.up = D.DefaultUp.clone(); const a = new n(); const b = new Ub(); const c = new Da();
      const d = new n(1, 1, 1); b._onChange(() => { c.setFromEuler(b, !1); }); c._onChange(() => { b.setFromQuaternion(c, void 0, !1); }); Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: a }, rotation: { configurable: !0, enumerable: !0, value: b }, quaternion: { configurable: !0, enumerable: !0, value: c }, scale: { configurable: !0, enumerable: !0, value: d }, modelViewMatrix: { value: new P() }, normalMatrix: { value: new za() },
      }); this.matrix = new P(); this.matrixWorld = new P(); this.matrixAutoUpdate = D.DefaultMatrixAutoUpdate; this.matrixWorldNeedsUpdate = !1; this.layers = new $f(); this.visible = !0; this.receiveShadow = this.castShadow = !1; this.frustumCulled = !0; this.renderOrder = 0; this.userData = {};
    } function pb() { D.call(this); this.type = 'Scene'; this.overrideMaterial = this.fog = this.environment = this.background = null; this.autoUpdate = !0; typeof __THREE_DEVTOOLS__ !== 'undefined' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this })); } function Sa(a, b) {
      this.min = void 0 !== a ? a : new n(Infinity, Infinity, Infinity); this.max = void 0 !== b ? b : new n(
        -Infinity,
        -Infinity,
        -Infinity,
      );
    } function ag(a, b, c, d, e) { let f; let g = 0; for (f = a.length - 3; g <= f; g += 3) { Vb.fromArray(a, g); const k = e.x * Math.abs(Vb.x) + e.y * Math.abs(Vb.y) + e.z * Math.abs(Vb.z); const l = b.dot(Vb); const m = c.dot(Vb); const v = d.dot(Vb); if (Math.max(-Math.max(l, m, v), Math.min(l, m, v)) > k) return !1; } return !0; } function qb(a, b) { this.center = void 0 !== a ? a : new n(); this.radius = void 0 !== b ? b : 0; } function Wb(a, b) { this.origin = void 0 !== a ? a : new n(); this.direction = void 0 !== b ? b : new n(0, 0, -1); } function Ta(a, b) {
      this.normal = void 0 !== a ? a : new n(1, 0, 0); this.constant = void 0
!== b ? b : 0;
    } function ma(a, b, c) { this.a = void 0 !== a ? a : new n(); this.b = void 0 !== b ? b : new n(); this.c = void 0 !== c ? c : new n(); } function y(a, b, c) { return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c); } function bg(a, b, c) { c < 0 && (c += 1); c > 1 && --c; return c < 1 / 6 ? a + 6 * (b - a) * c : c < 0.5 ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a; } function cg(a) { return a < 0.04045 ? 0.0773993808 * a : (0.9478672986 * a + 0.0521327014) ** 2.4; } function dg(a) { return a < 0.0031308 ? 12.92 * a : 1.055 * a ** 0.41666 - 0.055; } function Dc(a, b, c, d, e, f) {
      this.a = a; this.b = b; this.c = c; this.normal = d
&& d.isVector3 ? d : new n(); this.vertexNormals = Array.isArray(d) ? d : []; this.color = e && e.isColor ? e : new y(); this.vertexColors = Array.isArray(e) ? e : []; this.materialIndex = void 0 !== f ? f : 0;
    } function L() {
      Object.defineProperty(this, 'id', { value: oj++ }); this.uuid = O.generateUUID(); this.name = ''; this.type = 'Material'; this.fog = !0; this.blending = 1; this.side = 0; this.vertexTangents = this.flatShading = !1; this.vertexColors = 0; this.opacity = 1; this.transparent = !1; this.blendSrc = 204; this.blendDst = 205; this.blendEquation = 100; this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null; this.depthFunc = 3; this.depthWrite = this.depthTest = !0; this.stencilWriteMask = 255; this.stencilFunc = 519; this.stencilRef = 0; this.stencilFuncMask = 255; this.stencilZPass = this.stencilZFail = this.stencilFail = 7680; this.stencilWrite = !1; this.clippingPlanes = null; this.clipShadows = this.clipIntersection = !1; this.shadowSide = null; this.colorWrite = !0; this.precision = null; this.polygonOffset = !1; this.polygonOffsetUnits = this.polygonOffsetFactor = 0; this.dithering = !1; this.alphaTest = 0; this.premultipliedAlpha = !1; this.toneMapped = this.visible = !0; this.userData = {}; this.version = 0;
    } function Oa(a) { L.call(this); this.type = 'MeshBasicMaterial'; this.color = new y(16777215); this.lightMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.envMap = this.alphaMap = this.specularMap = null; this.combine = 0; this.reflectivity = 1; this.refractionRatio = 0.98; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphTargets = this.skinning = !1; this.setValues(a); }
    function K(a, b, c) { if (Array.isArray(a)) throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.'); this.name = ''; this.array = a; this.itemSize = b; this.count = void 0 !== a ? a.length / b : 0; this.normalized = !0 === c; this.usage = 35044; this.updateRange = { offset: 0, count: -1 }; this.version = 0; } function Ad(a, b, c) { K.call(this, new Int8Array(a), b, c); } function Bd(a, b, c) { K.call(this, new Uint8Array(a), b, c); } function Cd(a, b, c) { K.call(this, new Uint8ClampedArray(a), b, c); } function Dd(a, b, c) {
      K.call(
        this,
        new Int16Array(a),
        b,
        c,
      );
    } function Xb(a, b, c) { K.call(this, new Uint16Array(a), b, c); } function Ed(a, b, c) { K.call(this, new Int32Array(a), b, c); } function Yb(a, b, c) { K.call(this, new Uint32Array(a), b, c); } function C(a, b, c) { K.call(this, new Float32Array(a), b, c); } function Fd(a, b, c) { K.call(this, new Float64Array(a), b, c); } function vh() {
      this.vertices = []; this.normals = []; this.colors = []; this.uvs = []; this.uvs2 = []; this.groups = []; this.morphTargets = {}; this.skinWeights = []; this.skinIndices = []; this.boundingSphere = this.boundingBox = null; this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1;
    } function wh(a) { if (a.length === 0) return -Infinity; for (var b = a[0], c = 1, d = a.length; c < d; ++c)a[c] > b && (b = a[c]); return b; } function G() {
      Object.defineProperty(this, 'id', { value: pj += 2 }); this.uuid = O.generateUUID(); this.name = ''; this.type = 'BufferGeometry'; this.index = null; this.attributes = {}; this.morphAttributes = {}; this.morphTargetsRelative = !1; this.groups = []; this.boundingSphere = this.boundingBox = null; this.drawRange = { start: 0, count: Infinity };
      this.userData = {};
    } function ca(a, b) { D.call(this); this.type = 'Mesh'; this.geometry = void 0 !== a ? a : new G(); this.material = void 0 !== b ? b : new Oa({ color: 16777215 * Math.random() }); this.updateMorphTargets(); } function xh(a, b, c, d, e, f, g, k) { if ((b.side === 1 ? d.intersectTriangle(g, f, e, !0, k) : d.intersectTriangle(e, f, g, b.side !== 2, k)) === null) return null; Je.copy(k); Je.applyMatrix4(a.matrixWorld); b = c.ray.origin.distanceTo(Je); return b < c.near || b > c.far ? null : { distance: b, point: Je.clone(), object: a }; } function Ke(a, b, c, d, e, f, g, k, l, m, v, p) {
      Zb.fromBufferAttribute(
        e,
        m,
      ); $b.fromBufferAttribute(e, v); ac.fromBufferAttribute(e, p); e = a.morphTargetInfluences; if (b.morphTargets && f && e) { Le.set(0, 0, 0); Me.set(0, 0, 0); Ne.set(0, 0, 0); for (let q = 0, t = f.length; q < t; q++) { const h = e[q]; const u = f[q]; h !== 0 && (eg.fromBufferAttribute(u, m), fg.fromBufferAttribute(u, v), gg.fromBufferAttribute(u, p), g ? (Le.addScaledVector(eg, h), Me.addScaledVector(fg, h), Ne.addScaledVector(gg, h)) : (Le.addScaledVector(eg.sub(Zb), h), Me.addScaledVector(fg.sub($b), h), Ne.addScaledVector(gg.sub(ac), h))); }Zb.add(Le); $b.add(Me); ac.add(Ne); } if (a = xh(a, b, c, d, Zb, $b, ac, Gd))k && (Ec.fromBufferAttribute(k, m), Fc.fromBufferAttribute(k, v), Gc.fromBufferAttribute(k, p), a.uv = ma.getUV(Gd, Zb, $b, ac, Ec, Fc, Gc, new x())), l && (Ec.fromBufferAttribute(l, m), Fc.fromBufferAttribute(l, v), Gc.fromBufferAttribute(l, p), a.uv2 = ma.getUV(Gd, Zb, $b, ac, Ec, Fc, Gc, new x())), k = new Dc(m, v, p), ma.getNormal(Zb, $b, ac, k.normal), a.face = k; return a;
    } function M() {
      Object.defineProperty(this, 'id', { value: qj += 2 }); this.uuid = O.generateUUID(); this.name = ''; this.type = 'Geometry'; this.vertices = []; this.colors = []; this.faces = []; this.faceVertexUvs = [[]]; this.morphTargets = []; this.morphNormals = []; this.skinWeights = []; this.skinIndices = []; this.lineDistances = []; this.boundingSphere = this.boundingBox = null; this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1;
    } function bc(a) {
      const b = {}; let c; for (c in a) {
        b[c] = {}; for (const d in a[c]) {
          const e = a[c][d]; e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4
|| e.isTexture) ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e;
        }
      } return b;
    } function na(a) { for (var b = {}, c = 0; c < a.length; c++) { const d = bc(a[c]); var e; for (e in d)b[e] = d[e]; } return b; } function oa(a) {
      L.call(this); this.type = 'ShaderMaterial'; this.defines = {}; this.uniforms = {}; this.vertexShader = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}'; this.fragmentShader = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}'; this.linewidth = 1; this.wireframe = !1;
      this.wireframeLinewidth = 1; this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1; this.extensions = {
        derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1,
      }; this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }; this.index0AttributeName = void 0; this.uniformsNeedUpdate = !1; void 0 !== a && (void 0 !== a.attributes && console.error('THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'), this.setValues(a));
    } function db() {
      D.call(this);
      this.type = 'Camera'; this.matrixWorldInverse = new P(); this.projectionMatrix = new P(); this.projectionMatrixInverse = new P();
    } function pa(a, b, c, d) { db.call(this); this.type = 'PerspectiveCamera'; this.fov = void 0 !== a ? a : 50; this.zoom = 1; this.near = void 0 !== c ? c : 0.1; this.far = void 0 !== d ? d : 2E3; this.focus = 10; this.aspect = void 0 !== b ? b : 1; this.view = null; this.filmGauge = 35; this.filmOffset = 0; this.updateProjectionMatrix(); } function Hc(a, b, c, d) {
      D.call(this); this.type = 'CubeCamera'; const e = new pa(90, 1, a, b); e.up.set(0, -1, 0); e.lookAt(new n(
        1,
        0,
        0,
      )); this.add(e); const f = new pa(90, 1, a, b); f.up.set(0, -1, 0); f.lookAt(new n(-1, 0, 0)); this.add(f); const g = new pa(90, 1, a, b); g.up.set(0, 0, 1); g.lookAt(new n(0, 1, 0)); this.add(g); const k = new pa(90, 1, a, b); k.up.set(0, 0, -1); k.lookAt(new n(0, -1, 0)); this.add(k); const l = new pa(90, 1, a, b); l.up.set(0, -1, 0); l.lookAt(new n(0, 0, 1)); this.add(l); const m = new pa(90, 1, a, b); m.up.set(0, -1, 0); m.lookAt(new n(0, 0, -1)); this.add(m); d = d || { format: 1022, magFilter: 1006, minFilter: 1006 }; this.renderTarget = new Eb(c, c, d); this.renderTarget.texture.name = 'CubeCamera'; this.update = function (a, b) { this.parent === null && this.updateMatrixWorld(); const c = a.getRenderTarget(); const d = this.renderTarget; const p = d.texture.generateMipmaps; d.texture.generateMipmaps = !1; a.setRenderTarget(d, 0); a.render(b, e); a.setRenderTarget(d, 1); a.render(b, f); a.setRenderTarget(d, 2); a.render(b, g); a.setRenderTarget(d, 3); a.render(b, k); a.setRenderTarget(d, 4); a.render(b, l); d.texture.generateMipmaps = p; a.setRenderTarget(d, 5); a.render(b, m); a.setRenderTarget(c); }; this.clear = function (a, b, c, d) {
        for (var e = a.getRenderTarget(),
          f = this.renderTarget, g = 0; g < 6; g++)a.setRenderTarget(f, g), a.clear(b, c, d); a.setRenderTarget(e);
      };
    } function Eb(a, b, c) { va.call(this, a, b, c); } function cc(a, b, c, d, e, f, g, k, l, m, v, p) { T.call(this, null, f, g, k, l, m, d, e, v, p); this.image = { data: a || null, width: b || 1, height: c || 1 }; this.magFilter = void 0 !== l ? l : 1003; this.minFilter = void 0 !== m ? m : 1003; this.flipY = this.generateMipmaps = !1; this.unpackAlignment = 1; this.needsUpdate = !0; } function Hd(a, b, c, d, e, f) {
      this.planes = [void 0 !== a ? a : new Ta(), void 0 !== b ? b : new Ta(), void 0 !== c ? c : new Ta(), void 0
!== d ? d : new Ta(), void 0 !== e ? e : new Ta(), void 0 !== f ? f : new Ta()];
    } function yh() {
      function a(e, f) { !1 !== c && (d(e, f), b.requestAnimationFrame(a)); } var b = null; var c = !1; var d = null; return {
        start() { !0 !== c && d !== null && (b.requestAnimationFrame(a), c = !0); }, stop() { c = !1; }, setAnimationLoop(a) { d = a; }, setContext(a) { b = a; },
      };
    } function rj(a) {
      function b(b, c) {
        const d = b.array; const e = b.usage; const k = a.createBuffer(); a.bindBuffer(c, k); a.bufferData(c, d, e); b.onUploadCallback(); c = 5126; d instanceof Float32Array ? c = 5126 : d instanceof Float64Array
          ? console.warn('THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.') : d instanceof Uint16Array ? c = 5123 : d instanceof Int16Array ? c = 5122 : d instanceof Uint32Array ? c = 5125 : d instanceof Int32Array ? c = 5124 : d instanceof Int8Array ? c = 5120 : d instanceof Uint8Array && (c = 5121); return {
          buffer: k, type: c, bytesPerElement: d.BYTES_PER_ELEMENT, version: b.version,
        };
      } const c = new WeakMap(); return {
        get(a) { a.isInterleavedBufferAttribute && (a = a.data); return c.get(a); },
        remove(b) {
          b.isInterleavedBufferAttribute
&& (b = b.data); const d = c.get(b); d && (a.deleteBuffer(d.buffer), c.delete(b));
        },
        update(d, e) { d.isInterleavedBufferAttribute && (d = d.data); const f = c.get(d); if (void 0 === f)c.set(d, b(d, e)); else if (f.version < d.version) { const g = d.array; const k = d.updateRange; a.bindBuffer(e, f.buffer); k.count === -1 ? a.bufferSubData(e, 0, g) : (a.bufferSubData(e, k.offset * g.BYTES_PER_ELEMENT, g.subarray(k.offset, k.offset + k.count)), k.count = -1); f.version = d.version; } },
      };
    } function Id(a, b, c, d) {
      M.call(this); this.type = 'PlaneGeometry'; this.parameters = {
        width: a,
        height: b,
        widthSegments: c,
        heightSegments: d,
      }; this.fromBufferGeometry(new dc(a, b, c, d)); this.mergeVertices();
    } function dc(a, b, c, d) {
      G.call(this); this.type = 'PlaneBufferGeometry'; this.parameters = {
        width: a, height: b, widthSegments: c, heightSegments: d,
      }; a = a || 1; b = b || 1; let e = a / 2; let f = b / 2; c = Math.floor(c) || 1; d = Math.floor(d) || 1; const g = c + 1; let k = d + 1; const l = a / c; const m = b / d; const v = []; const p = []; const q = []; const h = []; for (a = 0; a < k; a++) { const r = a * m - f; for (b = 0; b < g; b++)p.push(b * l - e, -r, 0), q.push(0, 0, 1), h.push(b / c), h.push(1 - a / d); } for (a = 0; a < d; a++) {
        for (b = 0; b < c; b++) {
          e = b + g * (a + 1),
          f = b + 1 + g * (a + 1), k = b + 1 + g * a, v.push(b + g * a, e, k), v.push(e, f, k);
        }
      } this.setIndex(v); this.setAttribute('position', new C(p, 3)); this.setAttribute('normal', new C(q, 3)); this.setAttribute('uv', new C(h, 2));
    } function sj(a, b, c, d) {
      function e(a, c) { b.buffers.color.setClear(a.r, a.g, a.b, c, d); } const f = new y(0); let g = 0; let k; let l; let m = null; let v = 0; return {
        getClearColor() { return f; },
        setClearColor(a, b) { f.set(a); g = void 0 !== b ? b : 1; e(f, g); },
        getClearAlpha() { return g; },
        setClearAlpha(a) { g = a; e(f, g); },
        render(b, d, h, r) {
          d = d.background; h = a.xr; (h = h.getSession && h.getSession()) && h.environmentBlendMode === 'additive' && (d = null); d === null ? (e(f, g), m = null, v = 0) : d && d.isColor && (e(d, 1), r = !0, m = null, v = 0); (a.autoClear || r) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil); if (d && (d.isCubeTexture || d.isWebGLRenderTargetCube || d.mapping === 306)) {
            void 0 === l && (l = new ca(new Jd(1, 1, 1), new oa({
              type: 'BackgroundCubeMaterial',
              uniforms: bc(eb.cube.uniforms),
              vertexShader: eb.cube.vertexShader,
              fragmentShader: eb.cube.fragmentShader,
              side: 1,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            })), l.geometry.deleteAttribute('normal'), l.geometry.deleteAttribute('uv'), l.onBeforeRender = function (a, b, c) { this.matrixWorld.copyPosition(c.matrixWorld); }, Object.defineProperty(l.material, 'envMap', { get() { return this.uniforms.envMap.value; } }), c.update(l)); r = d.isWebGLRenderTargetCube ? d.texture : d; l.material.uniforms.envMap.value = r; l.material.uniforms.flipEnvMap.value = r.isCubeTexture ? -1 : 1; if (m !== d || v !== r.version)l.material.needsUpdate = !0, m = d, v = r.version; b.unshift(
              l,
              l.geometry,
              l.material,
              0,
              0,
              null,
            );
          } else if (d && d.isTexture) {
            void 0 === k && (k = new ca(new dc(2, 2), new oa({
              type: 'BackgroundMaterial', uniforms: bc(eb.background.uniforms), vertexShader: eb.background.vertexShader, fragmentShader: eb.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1,
            })), k.geometry.deleteAttribute('normal'), Object.defineProperty(k.material, 'map', { get() { return this.uniforms.t2D.value; } }), c.update(k)); k.material.uniforms.t2D.value = d; !0 === d.matrixAutoUpdate && d.updateMatrix(); k.material.uniforms.uvTransform.value.copy(d.matrix);
            if (m !== d || v !== d.version)k.material.needsUpdate = !0, m = d, v = d.version; b.unshift(k, k.geometry, k.material, 0, 0, null);
          }
        },
      };
    } function tj(a, b, c, d) {
      const e = d.isWebGL2; let f; this.setMode = function (a) { f = a; }; this.render = function (b, d) { a.drawArrays(f, b, d); c.update(d, f); }; this.renderInstances = function (d, k, l, m) {
        if (m !== 0) {
          if (e) { d = a; var g = 'drawArraysInstanced'; } else if (d = b.get('ANGLE_instanced_arrays'), g = 'drawArraysInstancedANGLE', d === null) {
            console.error('THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
            return;
          }d[g](f, k, l, m); c.update(l, f, m);
        }
      };
    } function uj(a, b, c) {
      function d(b) { if (b === 'highp') { if (a.getShaderPrecisionFormat(35633, 36338).precision > 0 && a.getShaderPrecisionFormat(35632, 36338).precision > 0) return 'highp'; b = 'mediump'; } return b === 'mediump' && a.getShaderPrecisionFormat(35633, 36337).precision > 0 && a.getShaderPrecisionFormat(35632, 36337).precision > 0 ? 'mediump' : 'lowp'; } let e; const f = typeof WebGL2RenderingContext !== 'undefined' && a instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext !== 'undefined'
&& a instanceof WebGL2ComputeRenderingContext; let g = void 0 !== c.precision ? c.precision : 'highp'; let k = d(g); k !== g && (console.warn('THREE.WebGLRenderer:', g, 'not supported, using', k, 'instead.'), g = k); c = !0 === c.logarithmicDepthBuffer; k = a.getParameter(34930); const l = a.getParameter(35660); const m = a.getParameter(3379); const v = a.getParameter(34076); const p = a.getParameter(34921); const q = a.getParameter(36347); const h = a.getParameter(36348); const r = a.getParameter(36349); const u = l > 0; const n = f || !!b.get('OES_texture_float'); const w = u && n; const B = f ? a.getParameter(36183) : 0; return {
        isWebGL2: f,
        getMaxAnisotropy() { if (void 0 !== e) return e; const c = b.get('EXT_texture_filter_anisotropic'); return e = c !== null ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0; },
        getMaxPrecision: d,
        precision: g,
        logarithmicDepthBuffer: c,
        maxTextures: k,
        maxVertexTextures: l,
        maxTextureSize: m,
        maxCubemapSize: v,
        maxAttributes: p,
        maxVertexUniforms: q,
        maxVaryings: h,
        maxFragmentUniforms: r,
        vertexTextures: u,
        floatFragmentTextures: n,
        floatVertexTextures: w,
        maxSamples: B,
      };
    } function vj() {
      function a() {
        m.value !== d && (m.value = d, m.needsUpdate = e > 0); c.numPlanes = e; c.numIntersection = 0;
      } function b(a, b, d, e) { const f = a !== null ? a.length : 0; let g = null; if (f !== 0) { g = m.value; if (!0 !== e || g === null) { e = d + 4 * f; b = b.matrixWorldInverse; l.getNormalMatrix(b); if (g === null || g.length < e)g = new Float32Array(e); for (e = 0; e !== f; ++e, d += 4)k.copy(a[e]).applyMatrix4(b, l), k.normal.toArray(g, d), g[d + 3] = k.constant; }m.value = g; m.needsUpdate = !0; }c.numPlanes = f; return g; } var c = this; var d = null; var e = 0; let f = !1; let g = !1; var k = new Ta(); var l = new za(); var m = { value: null, needsUpdate: !1 }; this.uniform = m; this.numIntersection = this.numPlanes = 0; this.init = function (a, c, g) { const k = a.length !== 0 || c || e !== 0 || f; f = c; d = b(a, g, 0); e = a.length; return k; }; this.beginShadows = function () { g = !0; b(null); }; this.endShadows = function () { g = !1; a(); }; this.setState = function (c, k, l, h, r, u) { if (!f || c === null || c.length === 0 || g && !l)g ? b(null) : a(); else { l = g ? 0 : e; const p = 4 * l; let v = r.clippingState || null; m.value = v; v = b(c, h, p, u); for (c = 0; c !== p; ++c)v[c] = d[c]; r.clippingState = v; this.numIntersection = k ? this.numPlanes : 0; this.numPlanes += l; } };
    } function wj(a) {
      const b = {}; return {
        get(c) {
          if (void 0 !== b[c]) return b[c];
          switch (c) {
            case 'WEBGL_depth_texture': var d = a.getExtension('WEBGL_depth_texture') || a.getExtension('MOZ_WEBGL_depth_texture') || a.getExtension('WEBKIT_WEBGL_depth_texture'); break; case 'EXT_texture_filter_anisotropic': d = a.getExtension('EXT_texture_filter_anisotropic') || a.getExtension('MOZ_EXT_texture_filter_anisotropic') || a.getExtension('WEBKIT_EXT_texture_filter_anisotropic'); break; case 'WEBGL_compressed_texture_s3tc': d = a.getExtension('WEBGL_compressed_texture_s3tc') || a.getExtension('MOZ_WEBGL_compressed_texture_s3tc')
|| a.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'); break; case 'WEBGL_compressed_texture_pvrtc': d = a.getExtension('WEBGL_compressed_texture_pvrtc') || a.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'); break; default: d = a.getExtension(c);
          }d === null && console.warn(`THREE.WebGLRenderer: ${c} extension not supported.`); return b[c] = d;
        },
      };
    } function xj(a, b, c) {
      function d(a) {
        const e = a.target; a = f.get(e); a.index !== null && b.remove(a.index); for (var k in a.attributes)b.remove(a.attributes[k]); e.removeEventListener(
          'dispose',
          d,
        ); f.delete(e); if (k = g.get(a))b.remove(k), g.delete(a); c.memory.geometries--;
      } function e(a) { let c = []; let d = a.index; let e = a.attributes.position; if (d !== null) { var f = d.array; d = d.version; e = 0; for (var k = f.length; e < k; e += 3) { var h = f[e + 0]; var r = f[e + 1]; var u = f[e + 2]; c.push(h, r, r, u, u, h); } } else for (f = e.array, d = e.version, e = 0, k = f.length / 3 - 1; e < k; e += 3)h = e + 0, r = e + 1, u = e + 2, c.push(h, r, r, u, u, h); c = new (wh(c) > 65535 ? Yb : Xb)(c, 1); c.version = d; b.update(c, 34963); (f = g.get(a)) && b.remove(f); g.set(a, c); } var f = new WeakMap(); var
        g = new WeakMap(); return {
        get(
          a,
          b,
        ) { let e = f.get(b); if (e) return e; b.addEventListener('dispose', d); b.isBufferGeometry ? e = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new G()).setFromObject(a)), e = b._bufferGeometry); f.set(b, e); c.memory.geometries++; return e; },
        update(a) { let c = a.index; let d = a.attributes; c !== null && b.update(c, 34963); for (var e in d)b.update(d[e], 34962); a = a.morphAttributes; for (e in a) { c = a[e]; d = 0; for (let f = c.length; d < f; d++)b.update(c[d], 34962); } },
        getWireframeAttribute(a) {
          const b = g.get(a); if (b) {
            const c = a.index; c !== null && b.version < c.version && e(a);
          } else e(a); return g.get(a);
        },
      };
    } function yj(a, b, c, d) {
      const e = d.isWebGL2; let f; let g; let k; this.setMode = function (a) { f = a; }; this.setIndex = function (a) { g = a.type; k = a.bytesPerElement; }; this.render = function (b, d) { a.drawElements(f, d, g, b * k); c.update(d, f); }; this.renderInstances = function (d, m, v, p) {
        if (p !== 0) {
          if (e) { d = a; var l = 'drawElementsInstanced'; } else if (d = b.get('ANGLE_instanced_arrays'), l = 'drawElementsInstancedANGLE', d === null) {
            console.error('THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
            return;
          }d[l](f, v, g, m * k, p); c.update(v, f, p);
        }
      };
    } function zj(a) {
      const b = {
        frame: 0, calls: 0, triangles: 0, points: 0, lines: 0,
      }; return {
        memory: { geometries: 0, textures: 0 },
        render: b,
        programs: null,
        autoReset: !0,
        reset() { b.frame++; b.calls = 0; b.triangles = 0; b.points = 0; b.lines = 0; },
        update(a, d, e) {
          e = e || 1; b.calls++; switch (d) {
            case 4: b.triangles += a / 3 * e; break; case 1: b.lines += a / 2 * e; break; case 3: b.lines += e * (a - 1); break; case 2: b.lines += e * a; break; case 0: b.points += e * a; break; default: console.error(
              'THREE.WebGLInfo: Unknown draw mode:',
              d,
            );
          }
        },
      };
    } function Aj(a, b) { return Math.abs(b[1]) - Math.abs(a[1]); } function Bj(a) {
      const b = {}; const c = new Float32Array(8); return {
        update(d, e, f, g) {
          let k = d.morphTargetInfluences; let l = void 0 === k ? 0 : k.length; d = b[e.id]; if (void 0 === d) { d = []; for (var m = 0; m < l; m++)d[m] = [m, 0]; b[e.id] = d; } const v = f.morphTargets && e.morphAttributes.position; f = f.morphNormals && e.morphAttributes.normal; for (m = 0; m < l; m++) { var p = d[m]; p[1] !== 0 && (v && e.deleteAttribute(`morphTarget${m}`), f && e.deleteAttribute(`morphNormal${m}`)); } for (m = 0; m < l; m++) {
            p = d[m], p[0] = m,
            p[1] = k[m];
          }d.sort(Aj); for (m = k = 0; m < 8; m++) { if (p = d[m]) if (l = p[0], p = p[1]) { v && e.setAttribute(`morphTarget${m}`, v[l]); f && e.setAttribute(`morphNormal${m}`, f[l]); c[m] = p; k += p; continue; }c[m] = 0; }e = e.morphTargetsRelative ? 1 : 1 - k; g.getUniforms().setValue(a, 'morphTargetBaseInfluence', e); g.getUniforms().setValue(a, 'morphTargetInfluences', c);
        },
      };
    } function Cj(a, b, c, d) {
      let e = {}; return {
        update(a) {
          const f = d.render.frame; const k = a.geometry; const l = b.get(a, k); e[l.id] !== f && (k.isGeometry && l.updateFromObject(a), b.update(l), e[l.id] = f); a.isInstancedMesh
&& c.update(a.instanceMatrix, 34962); return l;
        },
        dispose() { e = {}; },
      };
    } function rb(a, b, c, d, e, f, g, k, l, m) { a = void 0 !== a ? a : []; T.call(this, a, void 0 !== b ? b : 301, c, d, e, f, void 0 !== g ? g : 1022, k, l, m); this.flipY = !1; } function Ic(a, b, c, d) {
      T.call(this, null); this.image = {
        data: a || null, width: b || 1, height: c || 1, depth: d || 1,
      }; this.minFilter = this.magFilter = 1003; this.wrapR = 1001; this.flipY = this.generateMipmaps = !1; this.needsUpdate = !0;
    } function Jc(a, b, c, d) {
      T.call(this, null); this.image = {
        data: a || null, width: b || 1, height: c || 1, depth: d || 1,
      };
      this.minFilter = this.magFilter = 1003; this.wrapR = 1001; this.flipY = this.generateMipmaps = !1; this.needsUpdate = !0;
    } function Kc(a, b, c) { let d = a[0]; if (d <= 0 || d > 0) return a; let e = b * c; let f = zh[e]; void 0 === f && (f = new Float32Array(e), zh[e] = f); if (b !== 0) for (d.toArray(f, 0), d = 1, e = 0; d !== b; ++d)e += c, a[d].toArray(f, e); return f; } function Pa(a, b) { if (a.length !== b.length) return !1; for (let c = 0, d = a.length; c < d; c++) if (a[c] !== b[c]) return !1; return !0; } function Ia(a, b) { for (let c = 0, d = b.length; c < d; c++)a[c] = b[c]; } function Ah(a, b) {
      let c = Bh[b]; void 0
=== c && (c = new Int32Array(b), Bh[b] = c); for (let d = 0; d !== b; ++d)c[d] = a.allocateTextureUnit(); return c;
    } function Dj(a, b) { const c = this.cache; c[0] !== b && (a.uniform1f(this.addr, b), c[0] = b); } function Ej(a, b) { const c = this.cache; if (void 0 !== b.x) { if (c[0] !== b.x || c[1] !== b.y)a.uniform2f(this.addr, b.x, b.y), c[0] = b.x, c[1] = b.y; } else Pa(c, b) || (a.uniform2fv(this.addr, b), Ia(c, b)); } function Fj(a, b) {
      const c = this.cache; if (void 0 !== b.x) { if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z)a.uniform3f(this.addr, b.x, b.y, b.z), c[0] = b.x, c[1] = b.y, c[2] = b.z; } else if (void 0
!== b.r) { if (c[0] !== b.r || c[1] !== b.g || c[2] !== b.b)a.uniform3f(this.addr, b.r, b.g, b.b), c[0] = b.r, c[1] = b.g, c[2] = b.b; } else Pa(c, b) || (a.uniform3fv(this.addr, b), Ia(c, b));
    } function Gj(a, b) { const c = this.cache; if (void 0 !== b.x) { if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z || c[3] !== b.w)a.uniform4f(this.addr, b.x, b.y, b.z, b.w), c[0] = b.x, c[1] = b.y, c[2] = b.z, c[3] = b.w; } else Pa(c, b) || (a.uniform4fv(this.addr, b), Ia(c, b)); } function Hj(a, b) {
      const c = this.cache; const d = b.elements; void 0 === d ? Pa(c, b) || (a.uniformMatrix2fv(this.addr, !1, b), Ia(c, b)) : Pa(c, d)
|| (Ch.set(d), a.uniformMatrix2fv(this.addr, !1, Ch), Ia(c, d));
    } function Ij(a, b) { const c = this.cache; const d = b.elements; void 0 === d ? Pa(c, b) || (a.uniformMatrix3fv(this.addr, !1, b), Ia(c, b)) : Pa(c, d) || (Dh.set(d), a.uniformMatrix3fv(this.addr, !1, Dh), Ia(c, d)); } function Jj(a, b) { const c = this.cache; const d = b.elements; void 0 === d ? Pa(c, b) || (a.uniformMatrix4fv(this.addr, !1, b), Ia(c, b)) : Pa(c, d) || (Eh.set(d), a.uniformMatrix4fv(this.addr, !1, Eh), Ia(c, d)); } function Kj(a, b, c) {
      const d = this.cache; const e = c.allocateTextureUnit(); d[0] !== e && (a.uniform1i(
        this.addr,
        e,
      ), d[0] = e); c.safeSetTexture2D(b || Fh, e);
    } function Lj(a, b, c) { const d = this.cache; const e = c.allocateTextureUnit(); d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e); c.setTexture2DArray(b || Mj, e); } function Nj(a, b, c) { const d = this.cache; const e = c.allocateTextureUnit(); d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e); c.setTexture3D(b || Oj, e); } function Pj(a, b, c) { const d = this.cache; const e = c.allocateTextureUnit(); d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e); c.safeSetTextureCube(b || Gh, e); } function Qj(a, b) {
      const c = this.cache; c[0] !== b && (a.uniform1i(
        this.addr,
        b,
      ), c[0] = b);
    } function Rj(a, b) { const c = this.cache; Pa(c, b) || (a.uniform2iv(this.addr, b), Ia(c, b)); } function Sj(a, b) { const c = this.cache; Pa(c, b) || (a.uniform3iv(this.addr, b), Ia(c, b)); } function Tj(a, b) { const c = this.cache; Pa(c, b) || (a.uniform4iv(this.addr, b), Ia(c, b)); } function Uj(a) {
      switch (a) {
        case 5126: return Dj; case 35664: return Ej; case 35665: return Fj; case 35666: return Gj; case 35674: return Hj; case 35675: return Ij; case 35676: return Jj; case 35678: case 36198: return Kj; case 35679: return Nj; case 35680: return Pj; case 36289: return Lj;
        case 5124: case 35670: return Qj; case 35667: case 35671: return Rj; case 35668: case 35672: return Sj; case 35669: case 35673: return Tj;
      }
    } function Vj(a, b) { a.uniform1fv(this.addr, b); } function Wj(a, b) { a.uniform1iv(this.addr, b); } function Xj(a, b) { a.uniform2iv(this.addr, b); } function Yj(a, b) { a.uniform3iv(this.addr, b); } function Zj(a, b) { a.uniform4iv(this.addr, b); } function ak(a, b) { b = Kc(b, this.size, 2); a.uniform2fv(this.addr, b); } function bk(a, b) { b = Kc(b, this.size, 3); a.uniform3fv(this.addr, b); } function ck(a, b) {
      b = Kc(
        b,
        this.size,
        4,
      ); a.uniform4fv(this.addr, b);
    } function dk(a, b) { b = Kc(b, this.size, 4); a.uniformMatrix2fv(this.addr, !1, b); } function ek(a, b) { b = Kc(b, this.size, 9); a.uniformMatrix3fv(this.addr, !1, b); } function fk(a, b) { b = Kc(b, this.size, 16); a.uniformMatrix4fv(this.addr, !1, b); } function gk(a, b, c) { const d = b.length; const e = Ah(c, d); a.uniform1iv(this.addr, e); for (a = 0; a !== d; ++a)c.safeSetTexture2D(b[a] || Fh, e[a]); } function hk(a, b, c) { const d = b.length; const e = Ah(c, d); a.uniform1iv(this.addr, e); for (a = 0; a !== d; ++a)c.safeSetTextureCube(b[a] || Gh, e[a]); } function ik(a) {
      switch (a) {
        case 5126: return Vj;
        case 35664: return ak; case 35665: return bk; case 35666: return ck; case 35674: return dk; case 35675: return ek; case 35676: return fk; case 35678: case 36198: case 36298: case 36306: return gk; case 35680: case 36300: case 36308: return hk; case 5124: case 35670: return Wj; case 35667: case 35671: return Xj; case 35668: case 35672: return Yj; case 35669: case 35673: return Zj;
      }
    } function jk(a, b, c) { this.id = a; this.addr = c; this.cache = []; this.setValue = Uj(b.type); } function Hh(a, b, c) {
      this.id = a; this.addr = c; this.cache = []; this.size = b.size;
      this.setValue = ik(b.type);
    } function Ih(a) { this.id = a; this.seq = []; this.map = {}; } function Fb(a, b) {
      this.seq = []; this.map = {}; for (let c = a.getProgramParameter(b, 35718), d = 0; d < c; ++d) {
        let e = a.getActiveUniform(b, d); const f = a.getUniformLocation(b, e.name); let g = this; let k = e.name; const l = k.length; for (hg.lastIndex = 0; ;) {
          const m = hg.exec(k); const v = hg.lastIndex; let p = m[1]; let h = m[3]; m[2] === ']' && (p |= 0); if (void 0 === h || h === '[' && v + 2 === l) { k = g; e = void 0 === h ? new jk(p, e, f) : new Hh(p, e, f); k.seq.push(e); k.map[e.id] = e; break; } else {
            h = g.map[p], void 0 === h && (h = new Ih(p), p = g, g = h, p.seq.push(g), p.map[g.id] = g), g = h;
          }
        }
      }
    } function Jh(a, b, c) { b = a.createShader(b); a.shaderSource(b, c); a.compileShader(b); return b; } function Kh(a) {
      switch (a) {
        case 3E3: return ['Linear', '( value )']; case 3001: return ['sRGB', '( value )']; case 3002: return ['RGBE', '( value )']; case 3004: return ['RGBM', '( value, 7.0 )']; case 3005: return ['RGBM', '( value, 16.0 )']; case 3006: return ['RGBD', '( value, 256.0 )']; case 3007: return ['Gamma', '( value, float( GAMMA_FACTOR ) )']; case 3003: return ['LogLuv', '( value )']; default: throw Error(`unsupported encoding: ${
          a}`);
      }
    } function Lh(a, b, c) { const d = a.getShaderParameter(b, 35713); const e = a.getShaderInfoLog(b).trim(); if (d && e === '') return ''; a = a.getShaderSource(b).split('\n'); for (b = 0; b < a.length; b++)a[b] = `${b + 1}: ${a[b]}`; a = a.join('\n'); return `THREE.WebGLShader: gl.getShaderInfoLog() ${c}\n${e}${a}`; } function Kd(a, b) { b = Kh(b); return `vec4 ${a}( vec4 value ) { return ${b[0]}ToLinear${b[1]}; }`; } function kk(a, b) { b = Kh(b); return `vec4 ${a}( vec4 value ) { return LinearTo${b[0]}${b[1]}; }`; } function lk(a, b) {
      switch (b) {
        case 1: b = 'Linear'; break;
        case 2: b = 'Reinhard'; break; case 3: b = 'Uncharted2'; break; case 4: b = 'OptimizedCineon'; break; case 5: b = 'ACESFilmic'; break; default: throw Error(`unsupported toneMapping: ${b}`);
      } return `vec3 ${a}( vec3 color ) { return ${b}ToneMapping( color ); }`;
    } function mk(a, b, c) {
      a = a || {}; return [a.derivatives || b.envMapCubeUV || b.bumpMap || b.tangentSpaceNormalMap || b.clearcoatNormalMap || b.flatShading || b.shaderID === 'physical' ? '#extension GL_OES_standard_derivatives : enable' : '', (a.fragDepth || b.logarithmicDepthBuffer) && c.get('EXT_frag_depth')
        ? '#extension GL_EXT_frag_depth : enable' : '', a.drawBuffers && c.get('WEBGL_draw_buffers') ? '#extension GL_EXT_draw_buffers : require' : '', (a.shaderTextureLOD || b.envMap) && c.get('EXT_shader_texture_lod') ? '#extension GL_EXT_shader_texture_lod : enable' : ''].filter(Ld).join('\n');
    } function nk(a) { const b = []; let c; for (c in a) { const d = a[c]; !1 !== d && b.push(`#define ${c} ${d}`); } return b.join('\n'); } function Ld(a) { return a !== ''; } function Mh(a, b) {
      return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(
        /NUM_RECT_AREA_LIGHTS/g,
        b.numRectAreaLights,
      ).replace(/NUM_POINT_LIGHTS/g, b.numPointLights)
        .replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights)
        .replace(/NUM_DIR_LIGHT_SHADOWS/g, b.numDirLightShadows)
        .replace(/NUM_SPOT_LIGHT_SHADOWS/g, b.numSpotLightShadows)
        .replace(/NUM_POINT_LIGHT_SHADOWS/g, b.numPointLightShadows);
    } function Nh(a, b) { return a.replace(/NUM_CLIPPING_PLANES/g, b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, b.numClippingPlanes - b.numClipIntersection); } function ig(a, b) {
      a = N[b]; if (void 0 === a) {
        throw Error(`Can not resolve #include <${
          b}>`);
      } return a.replace(jg, ig);
    } function Oh(a, b, c, d) { a = ''; for (b = parseInt(b); b < parseInt(c); b++)a += d.replace(/\[ i \]/g, `[ ${b} ]`).replace(/UNROLLED_LOOP_INDEX/g, b); return a; } function Ph(a) { let b = `precision ${a.precision} float;\nprecision ${a.precision} int;`; a.precision === 'highp' ? b += '\n#define HIGH_PRECISION' : a.precision === 'mediump' ? b += '\n#define MEDIUM_PRECISION' : a.precision === 'lowp' && (b += '\n#define LOW_PRECISION'); return b; } function ok(a) {
      let b = 'SHADOWMAP_TYPE_BASIC'; a.shadowMapType === 1 ? b = 'SHADOWMAP_TYPE_PCF'
        : a.shadowMapType === 2 ? b = 'SHADOWMAP_TYPE_PCF_SOFT' : a.shadowMapType === 3 && (b = 'SHADOWMAP_TYPE_VSM'); return b;
    } function pk(a) { let b = 'ENVMAP_TYPE_CUBE'; if (a.envMap) switch (a.envMapMode) { case 301: case 302: b = 'ENVMAP_TYPE_CUBE'; break; case 306: case 307: b = 'ENVMAP_TYPE_CUBE_UV'; break; case 303: case 304: b = 'ENVMAP_TYPE_EQUIREC'; break; case 305: b = 'ENVMAP_TYPE_SPHERE'; } return b; } function qk(a) { let b = 'ENVMAP_MODE_REFLECTION'; if (a.envMap) switch (a.envMapMode) { case 302: case 304: b = 'ENVMAP_MODE_REFRACTION'; } return b; } function rk(a) {
      let b = 'ENVMAP_BLENDING_NONE'; if (a.envMap) switch (a.combine) { case 0: b = 'ENVMAP_BLENDING_MULTIPLY'; break; case 1: b = 'ENVMAP_BLENDING_MIX'; break; case 2: b = 'ENVMAP_BLENDING_ADD'; } return b;
    } function sk(a, b, c, d, e, f) {
      const g = a.getContext(); let k = d.defines; let l = e.vertexShader; let m = e.fragmentShader; let v = ok(f); let p = pk(f); let h = qk(f); let t = rk(f); let r = a.gammaFactor > 0 ? a.gammaFactor : 1; const u = f.isWebGL2 ? '' : mk(d.extensions, f, b); const n = nk(k); const w = g.createProgram(); const B = f.numMultiviewViews; d.isRawShaderMaterial ? (k = [n].filter(Ld).join('\n'), k.length > 0 && (k += '\n'), b = [u, n].filter(Ld).join('\n'),
      b.length > 0 && (b += '\n')) : (k = [Ph(f), `#define SHADER_NAME ${e.name}`, n, f.instancing ? '#define USE_INSTANCING' : '', f.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '', `#define GAMMA_FACTOR ${r}`, `#define MAX_BONES ${f.maxBones}`, f.useFog && f.fog ? '#define USE_FOG' : '', f.useFog && f.fogExp2 ? '#define FOG_EXP2' : '', f.map ? '#define USE_MAP' : '', f.envMap ? '#define USE_ENVMAP' : '', f.envMap ? `#define ${h}` : '', f.lightMap ? '#define USE_LIGHTMAP' : '', f.aoMap ? '#define USE_AOMAP' : '', f.emissiveMap ? '#define USE_EMISSIVEMAP' : '', f.bumpMap
        ? '#define USE_BUMPMAP' : '', f.normalMap ? '#define USE_NORMALMAP' : '', f.normalMap && f.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '', f.normalMap && f.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '', f.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '', f.displacementMap && f.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '', f.specularMap ? '#define USE_SPECULARMAP' : '', f.roughnessMap ? '#define USE_ROUGHNESSMAP' : '', f.metalnessMap ? '#define USE_METALNESSMAP' : '', f.alphaMap ? '#define USE_ALPHAMAP'
        : '', f.vertexTangents ? '#define USE_TANGENT' : '', f.vertexColors ? '#define USE_COLOR' : '', f.vertexUvs ? '#define USE_UV' : '', f.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '', f.flatShading ? '#define FLAT_SHADED' : '', f.skinning ? '#define USE_SKINNING' : '', f.useVertexTexture ? '#define BONE_TEXTURE' : '', f.morphTargets ? '#define USE_MORPHTARGETS' : '', f.morphNormals && !1 === f.flatShading ? '#define USE_MORPHNORMALS' : '', f.doubleSided ? '#define DOUBLE_SIDED' : '', f.flipSided ? '#define FLIP_SIDED' : '', f.shadowMapEnabled ? '#define USE_SHADOWMAP'
        : '', f.shadowMapEnabled ? `#define ${v}` : '', f.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '', f.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', f.logarithmicDepthBuffer && (f.isWebGL2 || b.get('EXT_frag_depth')) ? '#define USE_LOGDEPTHBUF_EXT' : '', 'uniform mat4 modelMatrix;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform mat4 viewMatrix;', 'uniform mat3 normalMatrix;', 'uniform vec3 cameraPosition;', 'uniform bool isOrthographic;', '#ifdef USE_INSTANCING', ' attribute mat4 instanceMatrix;',
      '#endif', 'attribute vec3 position;', 'attribute vec3 normal;', 'attribute vec2 uv;', '#ifdef USE_TANGENT', '\tattribute vec4 tangent;', '#endif', '#ifdef USE_COLOR', '\tattribute vec3 color;', '#endif', '#ifdef USE_MORPHTARGETS', '\tattribute vec3 morphTarget0;', '\tattribute vec3 morphTarget1;', '\tattribute vec3 morphTarget2;', '\tattribute vec3 morphTarget3;', '\t#ifdef USE_MORPHNORMALS', '\t\tattribute vec3 morphNormal0;', '\t\tattribute vec3 morphNormal1;', '\t\tattribute vec3 morphNormal2;', '\t\tattribute vec3 morphNormal3;',
      '\t#else', '\t\tattribute vec3 morphTarget4;', '\t\tattribute vec3 morphTarget5;', '\t\tattribute vec3 morphTarget6;', '\t\tattribute vec3 morphTarget7;', '\t#endif', '#endif', '#ifdef USE_SKINNING', '\tattribute vec4 skinIndex;', '\tattribute vec4 skinWeight;', '#endif', '\n'].filter(Ld).join('\n'), b = [u, Ph(f), `#define SHADER_NAME ${e.name}`, n, f.alphaTest ? `#define ALPHATEST ${f.alphaTest}${f.alphaTest % 1 ? '' : '.0'}` : '', `#define GAMMA_FACTOR ${r}`, f.useFog && f.fog ? '#define USE_FOG' : '', f.useFog && f.fogExp2 ? '#define FOG_EXP2'
        : '', f.map ? '#define USE_MAP' : '', f.matcap ? '#define USE_MATCAP' : '', f.envMap ? '#define USE_ENVMAP' : '', f.envMap ? `#define ${p}` : '', f.envMap ? `#define ${h}` : '', f.envMap ? `#define ${t}` : '', f.lightMap ? '#define USE_LIGHTMAP' : '', f.aoMap ? '#define USE_AOMAP' : '', f.emissiveMap ? '#define USE_EMISSIVEMAP' : '', f.bumpMap ? '#define USE_BUMPMAP' : '', f.normalMap ? '#define USE_NORMALMAP' : '', f.normalMap && f.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '', f.normalMap && f.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '', f.clearcoatNormalMap
        ? '#define USE_CLEARCOAT_NORMALMAP' : '', f.specularMap ? '#define USE_SPECULARMAP' : '', f.roughnessMap ? '#define USE_ROUGHNESSMAP' : '', f.metalnessMap ? '#define USE_METALNESSMAP' : '', f.alphaMap ? '#define USE_ALPHAMAP' : '', f.sheen ? '#define USE_SHEEN' : '', f.vertexTangents ? '#define USE_TANGENT' : '', f.vertexColors ? '#define USE_COLOR' : '', f.vertexUvs ? '#define USE_UV' : '', f.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '', f.gradientMap ? '#define USE_GRADIENTMAP' : '', f.flatShading ? '#define FLAT_SHADED' : '', f.doubleSided ? '#define DOUBLE_SIDED'
        : '', f.flipSided ? '#define FLIP_SIDED' : '', f.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', f.shadowMapEnabled ? `#define ${v}` : '', f.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '', f.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '', f.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', f.logarithmicDepthBuffer && (f.isWebGL2 || b.get('EXT_frag_depth')) ? '#define USE_LOGDEPTHBUF_EXT' : '', (d.extensions && d.extensions.shaderTextureLOD || f.envMap) && (f.isWebGL2 || b.get('EXT_shader_texture_lod')) ? '#define TEXTURE_LOD_EXT'
        : '', 'uniform mat4 viewMatrix;', 'uniform vec3 cameraPosition;', 'uniform bool isOrthographic;', f.toneMapping !== 0 ? '#define TONE_MAPPING' : '', f.toneMapping !== 0 ? N.tonemapping_pars_fragment : '', f.toneMapping !== 0 ? lk('toneMapping', f.toneMapping) : '', f.dithering ? '#define DITHERING' : '', f.outputEncoding || f.mapEncoding || f.matcapEncoding || f.envMapEncoding || f.emissiveMapEncoding || f.lightMapEncoding ? N.encodings_pars_fragment : '', f.mapEncoding ? Kd('mapTexelToLinear', f.mapEncoding) : '', f.matcapEncoding ? Kd(
        'matcapTexelToLinear',
        f.matcapEncoding,
      ) : '', f.envMapEncoding ? Kd('envMapTexelToLinear', f.envMapEncoding) : '', f.emissiveMapEncoding ? Kd('emissiveMapTexelToLinear', f.emissiveMapEncoding) : '', f.lightMapEncoding ? Kd('lightMapTexelToLinear', f.lightMapEncoding) : '', f.outputEncoding ? kk('linearToOutputTexel', f.outputEncoding) : '', f.depthPacking ? `#define DEPTH_PACKING ${d.depthPacking}` : '', '\n'].filter(Ld).join('\n')); l = l.replace(jg, ig); l = Mh(l, f); l = Nh(l, f); m = m.replace(jg, ig); m = Mh(m, f); m = Nh(m, f); l = l.replace(Qh, Oh); m = m.replace(Qh, Oh); f.isWebGL2
&& !d.isRawShaderMaterial && (v = !1, p = /^\s*#version\s+300\s+es\s*\n/, d.isShaderMaterial && l.match(p) !== null && m.match(p) !== null && (v = !0, l = l.replace(p, ''), m = m.replace(p, '')), k = `#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n${k}`, b = `${['#version 300 es\n\n#define varying in', v ? '' : 'out highp vec4 pc_fragColor;', v ? '' : '#define gl_FragColor pc_fragColor', '#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad'].join('\n')
      }\n${b}`, B > 0 && (k = k.replace('#version 300 es\n', ['#version 300 es\n\n#extension GL_OVR_multiview2 : require', `layout(num_views = ${B}) in;`, '#define VIEW_ID gl_ViewID_OVR'].join('\n')), k = k.replace('uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;', [`uniform mat4 modelViewMatrices[${B}];`, `uniform mat4 projectionMatrices[${B}];`, `uniform mat4 viewMatrices[${B}];`, `uniform mat3 normalMatrices[${B}];`, '#define modelViewMatrix modelViewMatrices[VIEW_ID]\n#define projectionMatrix projectionMatrices[VIEW_ID]\n#define viewMatrix viewMatrices[VIEW_ID]\n#define normalMatrix normalMatrices[VIEW_ID]'].join('\n')),
      b = b.replace('#version 300 es\n', '#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR'), b = b.replace('uniform mat4 viewMatrix;', [`uniform mat4 viewMatrices[${B}];`, '#define viewMatrix viewMatrices[VIEW_ID]'].join('\n')))); m = b + m; l = Jh(g, 35633, k + l); m = Jh(g, 35632, m); g.attachShader(w, l); g.attachShader(w, m); void 0 !== d.index0AttributeName ? g.bindAttribLocation(w, 0, d.index0AttributeName) : !0 === f.morphTargets && g.bindAttribLocation(w, 0, 'position'); g.linkProgram(w); if (a.debug.checkShaderErrors) {
        a = g.getProgramInfoLog(w).trim(); f = g.getShaderInfoLog(l).trim(); v = g.getShaderInfoLog(m).trim(); h = p = !0; if (!1 === g.getProgramParameter(w, 35714))p = !1, t = Lh(g, l, 'vertex'), r = Lh(g, m, 'fragment'), console.error('THREE.WebGLProgram: shader error: ', g.getError(), '35715', g.getProgramParameter(w, 35715), 'gl.getProgramInfoLog', a, t, r); else if (a !== '')console.warn('THREE.WebGLProgram: gl.getProgramInfoLog()', a); else if (f === '' || v === '')h = !1; h && (this.diagnostics = {
          runnable: p,
          material: d,
          programLog: a,
          vertexShader: { log: f, prefix: k },
          fragmentShader: { log: v, prefix: b },
        });
      }g.deleteShader(l); g.deleteShader(m); let U; this.getUniforms = function () { void 0 === U && (U = new Fb(g, w)); return U; }; let wa; this.getAttributes = function () { if (void 0 === wa) { for (var a = {}, b = g.getProgramParameter(w, 35721), c = 0; c < b; c++) { const d = g.getActiveAttrib(w, c).name; a[d] = g.getAttribLocation(w, d); }wa = a; } return wa; }; this.destroy = function () { g.deleteProgram(w); this.program = void 0; }; this.name = e.name; this.id = tk++; this.cacheKey = c; this.usedTimes = 1; this.program = w; this.vertexShader = l; this.fragmentShader = m; this.numMultiviewViews = B; return this;
    } function uk(a, b, c) {
      function d(a) { if (a)a.isTexture ? b = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), b = a.texture.encoding); else var b = 3E3; return b; } const e = []; const f = c.isWebGL2; const g = c.logarithmicDepthBuffer; const k = c.floatVertexTextures; let l = c.precision; const m = c.maxVertexUniforms; const v = c.vertexTextures; const p = {
        MeshDepthMaterial: 'depth',
        MeshDistanceMaterial: 'distanceRGBA',
        MeshNormalMaterial: 'normal',
        MeshBasicMaterial: 'basic',
        MeshLambertMaterial: 'lambert',
        MeshPhongMaterial: 'phong',
        MeshToonMaterial: 'toon',
        MeshStandardMaterial: 'physical',
        MeshPhysicalMaterial: 'physical',
        MeshMatcapMaterial: 'matcap',
        LineBasicMaterial: 'basic',
        LineDashedMaterial: 'dashed',
        PointsMaterial: 'points',
        ShadowMaterial: 'shadow',
        SpriteMaterial: 'sprite',
      }; const h = 'precision isWebGL2 supportsVertexTextures outputEncoding instancing numMultiviewViews map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen'.split(' ');
      this.getParameters = function (b, e, h, q, n, B, U) {
        const r = q.fog; q = b.isMeshStandardMaterial ? q.environment : null; q = b.envMap || q; const t = p[b.type]; if (U.isSkinnedMesh) { var u = U.skeleton.bones; if (k)u = 1024; else { var z = Math.min(Math.floor((m - 20) / 4), u.length); z < u.length ? (console.warn(`THREE.WebGLRenderer: Skeleton has ${u.length} bones. This GPU supports ${z}.`), u = 0) : u = z; } } else u = 0; b.precision !== null && (l = c.getMaxPrecision(b.precision), l !== b.precision && console.warn(
          'THREE.WebGLProgram.getParameters:',
          b.precision,
          'not supported, using',
          l,
          'instead.',
        )); z = a.getRenderTarget(); return {
          isWebGL2: f,
          shaderID: t,
          precision: l,
          instancing: !0 === U.isInstancedMesh,
          supportsVertexTextures: v,
          numMultiviewViews: z && z.isWebGLMultiviewRenderTarget ? z.numViews : 0,
          outputEncoding: z !== null ? d(z.texture) : a.outputEncoding,
          map: !!b.map,
          mapEncoding: d(b.map),
          matcap: !!b.matcap,
          matcapEncoding: d(b.matcap),
          envMap: !!q,
          envMapMode: q && q.mapping,
          envMapEncoding: d(q),
          envMapCubeUV: !!q && (q.mapping === 306 || q.mapping === 307),
          lightMap: !!b.lightMap,
          lightMapEncoding: d(b.lightMap),
          aoMap: !!b.aoMap,
          emissiveMap: !!b.emissiveMap,
          emissiveMapEncoding: d(b.emissiveMap),
          bumpMap: !!b.bumpMap,
          normalMap: !!b.normalMap,
          objectSpaceNormalMap: b.normalMapType === 1,
          tangentSpaceNormalMap: b.normalMapType === 0,
          clearcoatNormalMap: !!b.clearcoatNormalMap,
          displacementMap: !!b.displacementMap,
          roughnessMap: !!b.roughnessMap,
          metalnessMap: !!b.metalnessMap,
          specularMap: !!b.specularMap,
          alphaMap: !!b.alphaMap,
          gradientMap: !!b.gradientMap,
          sheen: !!b.sheen,
          combine: b.combine,
          vertexTangents: b.normalMap && b.vertexTangents,
          vertexColors: b.vertexColors,
          vertexUvs: !!b.map || !!b.bumpMap || !!b.normalMap || !!b.specularMap || !!b.alphaMap || !!b.emissiveMap || !!b.roughnessMap || !!b.metalnessMap || !!b.clearcoatNormalMap || !!b.displacementMap,
          uvsVertexOnly: !(b.map || b.bumpMap || b.normalMap || b.specularMap || b.alphaMap || b.emissiveMap || b.roughnessMap || b.metalnessMap || b.clearcoatNormalMap) && !!b.displacementMap,
          fog: !!r,
          useFog: b.fog,
          fogExp2: r && r.isFogExp2,
          flatShading: b.flatShading,
          sizeAttenuation: b.sizeAttenuation,
          logarithmicDepthBuffer: g,
          skinning: b.skinning && u > 0,
          maxBones: u,
          useVertexTexture: k,
          morphTargets: b.morphTargets,
          morphNormals: b.morphNormals,
          maxMorphTargets: a.maxMorphTargets,
          maxMorphNormals: a.maxMorphNormals,
          numDirLights: e.directional.length,
          numPointLights: e.point.length,
          numSpotLights: e.spot.length,
          numRectAreaLights: e.rectArea.length,
          numHemiLights: e.hemi.length,
          numDirLightShadows: e.directionalShadowMap.length,
          numPointLightShadows: e.pointShadowMap.length,
          numSpotLightShadows: e.spotShadowMap.length,
          numClippingPlanes: n,
          numClipIntersection: B,
          dithering: b.dithering,
          shadowMapEnabled: a.shadowMap.enabled
&& h.length > 0,
          shadowMapType: a.shadowMap.type,
          toneMapping: b.toneMapped ? a.toneMapping : 0,
          physicallyCorrectLights: a.physicallyCorrectLights,
          premultipliedAlpha: b.premultipliedAlpha,
          alphaTest: b.alphaTest,
          doubleSided: b.side === 2,
          flipSided: b.side === 1,
          depthPacking: void 0 !== b.depthPacking ? b.depthPacking : !1,
        };
      }; this.getProgramCacheKey = function (b, c) {
        const d = []; c.shaderID ? d.push(c.shaderID) : (d.push(b.fragmentShader), d.push(b.vertexShader)); if (void 0 !== b.defines) for (var e in b.defines)d.push(e), d.push(b.defines[e]); if (void 0
=== b.isRawShaderMaterial) { for (e = 0; e < h.length; e++)d.push(c[h[e]]); d.push(a.outputEncoding); d.push(a.gammaFactor); }d.push(b.onBeforeCompile.toString()); return d.join();
      }; this.acquireProgram = function (c, d, f, g) { for (var k, l = 0, m = e.length; l < m; l++) { const p = e[l]; if (p.cacheKey === g) { k = p; ++k.usedTimes; break; } } void 0 === k && (k = new sk(a, b, g, c, d, f), e.push(k)); return k; }; this.releaseProgram = function (a) { if (--a.usedTimes === 0) { const b = e.indexOf(a); e[b] = e[e.length - 1]; e.pop(); a.destroy(); } }; this.programs = e;
    } function vk() {
      let a = new WeakMap();
      return {
        get(b) { let c = a.get(b); void 0 === c && (c = {}, a.set(b, c)); return c; }, remove(b) { a.delete(b); }, update(b, c, d) { a.get(b)[c] = d; }, dispose() { a = new WeakMap(); },
      };
    } function wk(a, b) { return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id; } function xk(a, b) {
      return a.groupOrder !== b.groupOrder
        ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id;
    } function Rh() {
      function a(a, d, e, m, v, p) {
        let g = b[c]; void 0 === g ? (g = {
          id: a.id, object: a, geometry: d, material: e, program: e.program || f, groupOrder: m, renderOrder: a.renderOrder, z: v, group: p,
        }, b[c] = g) : (g.id = a.id, g.object = a, g.geometry = d, g.material = e, g.program = e.program || f, g.groupOrder = m, g.renderOrder = a.renderOrder, g.z = v, g.group = p); c++; return g;
      } var b = []; var c = 0; const d = []; const e = []; var f = { id: -1 }; return {
        opaque: d,
        transparent: e,
        init() { c = 0; d.length = 0; e.length = 0; },
        push(b, c, f, m, v, p) { b = a(b, c, f, m, v, p); (!0 === f.transparent ? e : d).push(b); },
        unshift(b, c, f, m, v, p) { b = a(b, c, f, m, v, p); (!0 === f.transparent ? e : d).unshift(b); },
        sort(a, b) { d.length > 1 && d.sort(a || wk); e.length > 1 && e.sort(b || xk); },
      };
    } function yk() {
      function a(c) { c = c.target; c.removeEventListener('dispose', a); b.delete(c); } var b = new WeakMap(); return {
        get(c, d) {
          const e = b.get(c); if (void 0 === e) {
            var f = new Rh(); b.set(c, new WeakMap()); b.get(c).set(d, f); c.addEventListener(
              'dispose',
              a,
            );
          } else f = e.get(d), void 0 === f && (f = new Rh(), e.set(d, f)); return f;
        },
        dispose() { b = new WeakMap(); },
      };
    } function zk() {
      const a = {}; return {
        get(b) {
          if (void 0 !== a[b.id]) return a[b.id]; switch (b.type) {
            case 'DirectionalLight': var c = {
              direction: new n(), color: new y(), shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new x(),
            }; break; case 'SpotLight': c = {
              position: new n(), direction: new n(), color: new y(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new x(),
            }; break; case 'PointLight': c = {
              position: new n(), color: new y(), distance: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new x(), shadowCameraNear: 1, shadowCameraFar: 1E3,
            }; break; case 'HemisphereLight': c = { direction: new n(), skyColor: new y(), groundColor: new y() }; break; case 'RectAreaLight': c = {
              color: new y(), position: new n(), halfWidth: new n(), halfHeight: new n(),
            };
          } return a[b.id] = c;
        },
      };
    } function Ak(a, b) { return (b.castShadow ? 1 : 0) - (a.castShadow ? 1 : 0); } function Bk() {
      for (var a = new zk(), b = {
          version: 0,
          hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
          },
          ambient: [0, 0, 0],
          probe: [],
          directional: [],
          directionalShadowMap: [],
          directionalShadowMatrix: [],
          spot: [],
          spotShadowMap: [],
          spotShadowMatrix: [],
          rectArea: [],
          point: [],
          pointShadowMap: [],
          pointShadowMatrix: [],
          hemi: [],
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
        }, c = 0; c < 9; c++)b.probe.push(new n()); const d = new n(); const e = new P(); const
        f = new P(); return {
        setup(c, k, l) {
          for (var g = 0, v = 0, p = 0, h = 0; h < 9; h++)b.probe[h].set(0, 0, 0); let t = k = 0; let r = 0;
          let u = 0; let n = 0; let w = 0; let B = 0; let U = 0; l = l.matrixWorldInverse; c.sort(Ak); h = 0; for (let wa = c.length; h < wa; h++) {
            const A = c[h]; const aa = A.color; let xa = A.intensity; const x = A.distance; let qa = A.shadow && A.shadow.map ? A.shadow.map.texture : null; if (A.isAmbientLight)g += aa.r * xa, v += aa.g * xa, p += aa.b * xa; else if (A.isLightProbe) for (qa = 0; qa < 9; qa++)b.probe[qa].addScaledVector(A.sh.coefficients[qa], xa); else if (A.isDirectionalLight) {
              var F = a.get(A); F.color.copy(A.color).multiplyScalar(A.intensity); F.direction.setFromMatrixPosition(A.matrixWorld); d.setFromMatrixPosition(A.target.matrixWorld);
              F.direction.sub(d); F.direction.transformDirection(l); if (F.shadow = A.castShadow)xa = A.shadow, F.shadowBias = xa.bias, F.shadowRadius = xa.radius, F.shadowMapSize = xa.mapSize, b.directionalShadowMap[k] = qa, b.directionalShadowMatrix[k] = A.shadow.matrix, w++; b.directional[k] = F; k++;
            } else if (A.isSpotLight) {
              F = a.get(A); F.position.setFromMatrixPosition(A.matrixWorld); F.position.applyMatrix4(l); F.color.copy(aa).multiplyScalar(xa); F.distance = x; F.direction.setFromMatrixPosition(A.matrixWorld); d.setFromMatrixPosition(A.target.matrixWorld);
              F.direction.sub(d); F.direction.transformDirection(l); F.coneCos = Math.cos(A.angle); F.penumbraCos = Math.cos(A.angle * (1 - A.penumbra)); F.decay = A.decay; if (F.shadow = A.castShadow)xa = A.shadow, F.shadowBias = xa.bias, F.shadowRadius = xa.radius, F.shadowMapSize = xa.mapSize, b.spotShadowMap[r] = qa, b.spotShadowMatrix[r] = A.shadow.matrix, U++; b.spot[r] = F; r++;
            } else if (A.isRectAreaLight) {
              F = a.get(A), F.color.copy(aa).multiplyScalar(xa), F.position.setFromMatrixPosition(A.matrixWorld), F.position.applyMatrix4(l), f.identity(), e.copy(A.matrixWorld),
              e.premultiply(l), f.extractRotation(e), F.halfWidth.set(0.5 * A.width, 0, 0), F.halfHeight.set(0, 0.5 * A.height, 0), F.halfWidth.applyMatrix4(f), F.halfHeight.applyMatrix4(f), b.rectArea[u] = F, u++;
            } else if (A.isPointLight) {
              F = a.get(A); F.position.setFromMatrixPosition(A.matrixWorld); F.position.applyMatrix4(l); F.color.copy(A.color).multiplyScalar(A.intensity); F.distance = A.distance; F.decay = A.decay; if (F.shadow = A.castShadow) {
                xa = A.shadow, F.shadowBias = xa.bias, F.shadowRadius = xa.radius, F.shadowMapSize = xa.mapSize, F.shadowCameraNear = xa.camera.near, F.shadowCameraFar = xa.camera.far, b.pointShadowMap[t] = qa, b.pointShadowMatrix[t] = A.shadow.matrix, B++;
              }b.point[t] = F; t++;
            } else A.isHemisphereLight && (F = a.get(A), F.direction.setFromMatrixPosition(A.matrixWorld), F.direction.transformDirection(l), F.direction.normalize(), F.skyColor.copy(A.color).multiplyScalar(xa), F.groundColor.copy(A.groundColor).multiplyScalar(xa), b.hemi[n] = F, n++);
          }b.ambient[0] = g; b.ambient[1] = v; b.ambient[2] = p; c = b.hash; if (c.directionalLength !== k || c.pointLength !== t || c.spotLength
!== r || c.rectAreaLength !== u || c.hemiLength !== n || c.numDirectionalShadows !== w || c.numPointShadows !== B || c.numSpotShadows !== U) {
            b.directional.length = k, b.spot.length = r, b.rectArea.length = u, b.point.length = t, b.hemi.length = n, b.directionalShadowMap.length = w, b.pointShadowMap.length = B, b.spotShadowMap.length = U, b.directionalShadowMatrix.length = w, b.pointShadowMatrix.length = B, b.spotShadowMatrix.length = U, c.directionalLength = k, c.pointLength = t, c.spotLength = r, c.rectAreaLength = u, c.hemiLength = n, c.numDirectionalShadows = w, c.numPointShadows = B, c.numSpotShadows = U, b.version = Ck++;
          }
        },
        state: b,
      };
    } function Sh() {
      const a = new Bk(); const b = []; const
        c = []; return {
        init() { b.length = 0; c.length = 0; }, state: { lightsArray: b, shadowsArray: c, lights: a }, setupLights(d) { a.setup(b, c, d); }, pushLight(a) { b.push(a); }, pushShadow(a) { c.push(a); },
      };
    } function Dk() {
      function a(c) { c = c.target; c.removeEventListener('dispose', a); b.delete(c); } var b = new WeakMap(); return {
        get(c, d) {
          if (!1 === b.has(c)) {
            var e = new Sh(); b.set(c, new WeakMap()); b.get(c).set(d, e); c.addEventListener(
              'dispose',
              a,
            );
          } else !1 === b.get(c).has(d) ? (e = new Sh(), b.get(c).set(d, e)) : e = b.get(c).get(d); return e;
        },
        dispose() { b = new WeakMap(); },
      };
    } function Gb(a) { L.call(this); this.type = 'MeshDepthMaterial'; this.depthPacking = 3200; this.morphTargets = this.skinning = !1; this.displacementMap = this.alphaMap = this.map = null; this.displacementScale = 1; this.displacementBias = 0; this.wireframe = !1; this.wireframeLinewidth = 1; this.fog = !1; this.setValues(a); } function Hb(a) {
      L.call(this); this.type = 'MeshDistanceMaterial'; this.referencePosition = new n(); this.nearDistance = 1; this.farDistance = 1E3; this.morphTargets = this.skinning = !1; this.displacementMap = this.alphaMap = this.map = null; this.displacementScale = 1; this.displacementBias = 0; this.fog = !1; this.setValues(a);
    } function Th(a, b, c) {
      function d(a, b, c) { c = a << 0 | b << 1 | c << 2; let d = p[c]; void 0 === d && (d = new Gb({ depthPacking: 3201, morphTargets: a, skinning: b }), p[c] = d); return d; } function e(a, b, c) { c = a << 0 | b << 1 | c << 2; let d = h[c]; void 0 === d && (d = new Hb({ morphTargets: a, skinning: b }), h[c] = d); return d; } function f(b, c, f, g, k, l) {
        let m = b.geometry; let p = d; let v = b.customDepthMaterial;
        !0 === f.isPointLight && (p = e, v = b.customDistanceMaterial); void 0 === v ? (v = !1, !0 === c.morphTargets && (!0 === m.isBufferGeometry ? v = m.morphAttributes && m.morphAttributes.position && m.morphAttributes.position.length > 0 : !0 === m.isGeometry && (v = m.morphTargets && m.morphTargets.length > 0)), m = !1, !0 === b.isSkinnedMesh && (!0 === c.skinning ? m = !0 : console.warn('THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:', b)), b = p(v, m, !0 === b.isInstancedMesh)) : b = v; a.localClippingEnabled && !0 === c.clipShadows && c.clippingPlanes.length !== 0
&& (v = b.uuid, p = c.uuid, m = t[v], void 0 === m && (m = {}, t[v] = m), v = m[p], void 0 === v && (v = b.clone(), m[p] = v), b = v); b.visible = c.visible; b.wireframe = c.wireframe; b.side = l === 3 ? c.shadowSide !== null ? c.shadowSide : c.side : c.shadowSide !== null ? c.shadowSide : r[c.side]; b.clipShadows = c.clipShadows; b.clippingPlanes = c.clippingPlanes; b.clipIntersection = c.clipIntersection; b.wireframeLinewidth = c.wireframeLinewidth; b.linewidth = c.linewidth; !0 === f.isPointLight && !0 === b.isMeshDistanceMaterial && (b.referencePosition.setFromMatrixPosition(f.matrixWorld),
        b.nearDistance = g, b.farDistance = k); return b;
      } function g(c, d, e, l, m) {
        if (!1 !== c.visible) {
          if (c.layers.test(d.layers) && (c.isMesh || c.isLine || c.isPoints) && (c.castShadow || c.receiveShadow && m === 3) && (!c.frustumCulled || k.intersectsObject(c))) {
            c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, c.matrixWorld); var p = b.update(c); var v = c.material; if (Array.isArray(v)) {
              for (let h = p.groups, q = 0, r = h.length; q < r; q++) {
                const u = h[q]; var t = v[u.materialIndex]; t && t.visible && (t = f(c, t, l, e.near, e.far, m), a.renderBufferDirect(
                  e,
                  null,
                  p,
                  t,
                  c,
                  u,
                ));
              }
            } else v.visible && (t = f(c, v, l, e.near, e.far, m), a.renderBufferDirect(e, null, p, t, c, null));
          }c = c.children; p = 0; for (v = c.length; p < v; p++)g(c[p], d, e, l, m);
        }
      } var k = new Hd(); const l = new x(); const m = new x(); const v = new S(); var p = []; var h = []; var t = {}; var r = { 0: 1, 1: 0, 2: 2 }; const u = new oa({
        defines: { SAMPLE_RATE: 0.25, HALF_SAMPLE_RATE: 0.125 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new x() }, radius: { value: 4 } }, vertexShader: 'void main() {\n\tgl_Position = vec4( position, 1.0 );\n}', fragmentShader: 'uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}',
      });
      const n = u.clone(); n.defines.HORIZONAL_PASS = 1; const w = new G(); w.setAttribute('position', new K(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)); const B = new ca(w, u); const U = this; this.enabled = !1; this.autoUpdate = !0; this.needsUpdate = !1; this.type = 1; this.render = function (d, e, f) {
        if (!1 !== U.enabled && (!1 !== U.autoUpdate || !1 !== U.needsUpdate) && d.length !== 0) {
          const p = a.getRenderTarget(); const h = a.getActiveCubeFace(); const q = a.getActiveMipmapLevel(); const r = a.state; r.setBlending(0); r.buffers.color.setClear(1, 1, 1, 1); r.buffers.depth.setTest(!0); r.setScissorTest(!1);
          for (let t = 0, z = d.length; t < z; t++) {
            let w = d[t]; let A = w.shadow; if (void 0 === A)console.warn('THREE.WebGLShadowMap:', w, 'has no shadow.'); else {
              l.copy(A.mapSize); let aa = A.getFrameExtents(); l.multiply(aa); m.copy(A.mapSize); if (l.x > c || l.y > c)console.warn('THREE.WebGLShadowMap:', w, 'has shadow exceeding max texture size, reducing'), l.x > c && (m.x = Math.floor(c / aa.x), l.x = m.x * aa.x, A.mapSize.x = m.x), l.y > c && (m.y = Math.floor(c / aa.y), l.y = m.y * aa.y, A.mapSize.y = m.y); A.map !== null || A.isPointLightShadow || this.type !== 3 || (aa = {
                minFilter: 1006,
                magFilter: 1006,
                format: 1023,
              }, A.map = new va(l.x, l.y, aa), A.map.texture.name = `${w.name}.shadowMap`, A.mapPass = new va(l.x, l.y, aa), A.camera.updateProjectionMatrix()); A.map === null && (aa = { minFilter: 1003, magFilter: 1003, format: 1023 }, A.map = new va(l.x, l.y, aa), A.map.texture.name = `${w.name}.shadowMap`, A.camera.updateProjectionMatrix()); a.setRenderTarget(A.map); a.clear(); aa = A.getViewportCount(); for (let wa = 0; wa < aa; wa++) {
                const x = A.getViewport(wa); v.set(m.x * x.x, m.y * x.y, m.x * x.z, m.y * x.w); r.viewport(v); A.updateMatrices(w, wa);
                k = A.getFrustum(); g(e, f, A.camera, w, this.type);
              }A.isPointLightShadow || this.type !== 3 || (w = A, A = f, aa = b.update(B), u.uniforms.shadow_pass.value = w.map.texture, u.uniforms.resolution.value = w.mapSize, u.uniforms.radius.value = w.radius, a.setRenderTarget(w.mapPass), a.clear(), a.renderBufferDirect(A, null, aa, u, B, null), n.uniforms.shadow_pass.value = w.mapPass.texture, n.uniforms.resolution.value = w.mapSize, n.uniforms.radius.value = w.radius, a.setRenderTarget(w.map), a.clear(), a.renderBufferDirect(A, null, aa, n, B, null));
            }
          }U.needsUpdate = !1; a.setRenderTarget(p, h, q);
        }
      };
    } function Ek(a, b, c) {
      function d(b, c, d) { const e = new Uint8Array(4); const f = a.createTexture(); a.bindTexture(b, f); a.texParameteri(b, 10241, 9728); a.texParameteri(b, 10240, 9728); for (b = 0; b < d; b++)a.texImage2D(c + b, 0, 6408, 1, 1, 0, 6408, 5121, e); return f; } function e(c, d) { n[c] = 1; w[c] === 0 && (a.enableVertexAttribArray(c), w[c] = 1); B[c] !== d && ((h ? a : b.get('ANGLE_instanced_arrays'))[h ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'](c, d), B[c] = d); } function f(b) { !0 !== U[b] && (a.enable(b), U[b] = !0); } function g(b) {
        !1
!== U[b] && (a.disable(b), U[b] = !1);
      } function k(b, c, d, e, k, l, m, p) {
        if (b === 0)A && (g(3042), A = !1); else if (A || (f(3042), A = !0), b !== 5) {
          if (b !== aa || p !== y) {
            if (x !== 100 || F !== 100)a.blendEquation(32774), F = x = 100; if (p) switch (b) { case 1: a.blendFuncSeparate(1, 771, 1, 771); break; case 2: a.blendFunc(1, 1); break; case 3: a.blendFuncSeparate(0, 0, 769, 771); break; case 4: a.blendFuncSeparate(0, 768, 0, 770); break; default: console.error('THREE.WebGLState: Invalid blending: ', b); } else {
              switch (b) {
                case 1: a.blendFuncSeparate(770, 771, 1, 771); break; case 2: a.blendFunc(
                  770,
                  1,
                ); break; case 3: a.blendFunc(0, 769); break; case 4: a.blendFunc(0, 768); break; default: console.error('THREE.WebGLState: Invalid blending: ', b);
              }
            }D = E = qa = C = null; aa = b; y = p;
          }
        } else { k = k || c; l = l || d; m = m || e; if (c !== x || k !== F)a.blendEquationSeparate(Lc[c], Lc[k]), x = c, F = k; if (d !== C || e !== qa || l !== E || m !== D)a.blendFuncSeparate(J[d], J[e], J[l], J[m]), C = d, qa = e, E = l, D = m; aa = b; y = null; }
      } function l(b) { G !== b && (b ? a.frontFace(2304) : a.frontFace(2305), G = b); } function m(b) {
        b !== 0 ? (f(2884), b !== I && (b === 1 ? a.cullFace(1029) : b === 2 ? a.cullFace(1028) : a.cullFace(1032)))
          : g(2884); I = b;
      } function v(b, c, d) { if (b) { if (f(32823), K !== c || M !== d)a.polygonOffset(c, d), K = c, M = d; } else g(32823); } function p(b) { void 0 === b && (b = 33984 + da - 1); O !== b && (a.activeTexture(b), O = b); } var h = c.isWebGL2; const t = new function () {
        let b = !1; const c = new S(); let d = null; const e = new S(0, 0, 0, 0); return {
          setMask(c) { d === c || b || (a.colorMask(c, c, c, c), d = c); },
          setLocked(a) { b = a; },
          setClear(b, d, f, g, k) { !0 === k && (b *= g, d *= g, f *= g); c.set(b, d, f, g); !1 === e.equals(c) && (a.clearColor(b, d, f, g), e.copy(c)); },
          reset() {
            b = !1; d = null; e.set(
              -1,
              0,
              0,
              0,
            );
          },
        };
      }(); const r = new function () {
        let b = !1; let c = null; let d = null; let e = null; return {
          setTest(a) { a ? f(2929) : g(2929); },
          setMask(d) { c === d || b || (a.depthMask(d), c = d); },
          setFunc(b) { if (d !== b) { if (b) switch (b) { case 0: a.depthFunc(512); break; case 1: a.depthFunc(519); break; case 2: a.depthFunc(513); break; case 3: a.depthFunc(515); break; case 4: a.depthFunc(514); break; case 5: a.depthFunc(518); break; case 6: a.depthFunc(516); break; case 7: a.depthFunc(517); break; default: a.depthFunc(515); } else a.depthFunc(515); d = b; } },
          setLocked(a) {
            b = a;
          },
          setClear(b) { e !== b && (a.clearDepth(b), e = b); },
          reset() { b = !1; e = d = c = null; },
        };
      }(); const u = new function () {
        let b = !1; let c = null; let d = null; let e = null; let k = null; let l = null; let m = null; let p = null; let v = null; return {
          setTest(a) { b || (a ? f(2960) : g(2960)); },
          setMask(d) { c === d || b || (a.stencilMask(d), c = d); },
          setFunc(b, c, f) { if (d !== b || e !== c || k !== f)a.stencilFunc(b, c, f), d = b, e = c, k = f; },
          setOp(b, c, d) { if (l !== b || m !== c || p !== d)a.stencilOp(b, c, d), l = b, m = c, p = d; },
          setLocked(a) { b = a; },
          setClear(b) {
            v !== b && (a.clearStencil(b),
            v = b);
          },
          reset() { b = !1; v = p = m = l = k = e = d = c = null; },
        };
      }(); c = a.getParameter(34921); var n = new Uint8Array(c); var w = new Uint8Array(c); var B = new Uint8Array(c); var U = {}; let wa = null; var A = null; var aa = null; var x = null; var C = null; var qa = null; var F = null; var E = null; var D = null; var y = !1; var G = null; var I = null; let L = null; var K = null; var M = null; var da = a.getParameter(35661); let ha = !1; c = 0; c = a.getParameter(7938); c.indexOf('WebGL') !== -1 ? (c = parseFloat(/^WebGL ([0-9])/.exec(c)[1]), ha = c >= 1) : c.indexOf('OpenGL ES') !== -1 && (c = parseFloat(/^OpenGL ES ([0-9])/.exec(c)[1]), ha = c >= 2); var O = null; let Nd = {}; const fb = new S(); const Uh = new S();
      const ng = {}; ng[3553] = d(3553, 3553, 1); ng[34067] = d(34067, 34069, 6); t.setClear(0, 0, 0, 1); r.setClear(1); u.setClear(0); f(2929); r.setFunc(3); l(!1); m(1); f(2884); k(0); var Lc = { 100: 32774, 101: 32778, 102: 32779 }; h ? (Lc[103] = 32775, Lc[104] = 32776) : (c = b.get('EXT_blend_minmax'), c !== null && (Lc[103] = c.MIN_EXT, Lc[104] = c.MAX_EXT)); var J = {
        200: 0, 201: 1, 202: 768, 204: 770, 210: 776, 208: 774, 206: 772, 203: 769, 205: 771, 209: 775, 207: 773,
      }; return {
        buffers: { color: t, depth: r, stencil: u },
        initAttributes() { for (let a = 0, b = n.length; a < b; a++)n[a] = 0; },
        enableAttribute(a) {
          e(
            a,
            0,
          );
        },
        enableAttributeAndDivisor: e,
        disableUnusedAttributes() { for (let b = 0, c = w.length; b !== c; ++b)w[b] !== n[b] && (a.disableVertexAttribArray(b), w[b] = 0); },
        enable: f,
        disable: g,
        useProgram(b) { return wa !== b ? (a.useProgram(b), wa = b, !0) : !1; },
        setBlending: k,
        setMaterial(a, b) {
          a.side === 2 ? g(2884) : f(2884); let c = a.side === 1; b && (c = !c); l(c); a.blending === 1 && !1 === a.transparent ? k(0) : k(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha, a.premultipliedAlpha);
          r.setFunc(a.depthFunc); r.setTest(a.depthTest); r.setMask(a.depthWrite); t.setMask(a.colorWrite); b = a.stencilWrite; u.setTest(b); b && (u.setMask(a.stencilWriteMask), u.setFunc(a.stencilFunc, a.stencilRef, a.stencilFuncMask), u.setOp(a.stencilFail, a.stencilZFail, a.stencilZPass)); v(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits);
        },
        setFlipSided: l,
        setCullFace: m,
        setLineWidth(b) { b !== L && (ha && a.lineWidth(b), L = b); },
        setPolygonOffset: v,
        setScissorTest(a) { a ? f(3089) : g(3089); },
        activeTexture: p,
        bindTexture(
          b,
          c,
        ) { O === null && p(); let d = Nd[O]; void 0 === d && (d = { type: void 0, texture: void 0 }, Nd[O] = d); if (d.type !== b || d.texture !== c)a.bindTexture(b, c || ng[b]), d.type = b, d.texture = c; },
        unbindTexture() { const b = Nd[O]; void 0 !== b && void 0 !== b.type && (a.bindTexture(b.type, null), b.type = void 0, b.texture = void 0); },
        compressedTexImage2D() { try { a.compressedTexImage2D.apply(a, arguments); } catch (R) { console.error('THREE.WebGLState:', R); } },
        texImage2D() {
          try { a.texImage2D.apply(a, arguments); } catch (R) {
            console.error(
              'THREE.WebGLState:',
              R,
            );
          }
        },
        texImage3D() { try { a.texImage3D.apply(a, arguments); } catch (R) { console.error('THREE.WebGLState:', R); } },
        scissor(b) { !1 === fb.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), fb.copy(b)); },
        viewport(b) { !1 === Uh.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), Uh.copy(b)); },
        reset() { for (let b = 0; b < w.length; b++)w[b] === 1 && (a.disableVertexAttribArray(b), w[b] = 0); U = {}; O = null; Nd = {}; I = G = aa = wa = null; t.reset(); r.reset(); u.reset(); },
      };
    } function Fk(a, b, c, d, e, f, g) {
      function k(a, b) {
        return L ? new OffscreenCanvas(
          a,
          b,
        ) : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
      } function l(a, b, c, d) {
        let e = 1; if (a.width > d || a.height > d)e = d / Math.max(a.width, a.height); if (e < 1 || !0 === b) {
          if (typeof HTMLImageElement !== 'undefined' && a instanceof HTMLImageElement || typeof HTMLCanvasElement !== 'undefined' && a instanceof HTMLCanvasElement || typeof ImageBitmap !== 'undefined' && a instanceof ImageBitmap) {
            return d = b ? O.floorPowerOfTwo : Math.floor, b = d(e * a.width), e = d(e * a.height), void 0 === I && (I = k(b, e)), c = c ? k(b, e) : I, c.width = b, c.height = e,
            c.getContext('2d').drawImage(a, 0, 0, b, e), console.warn(`THREE.WebGLRenderer: Texture has been resized from (${a.width}x${a.height}) to (${b}x${e}).`), c;
          } 'data' in a && console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (${a.width}x${a.height}).`);
        } return a;
      } function m(a) { return O.isPowerOfTwo(a.width) && O.isPowerOfTwo(a.height); } function v(a, b) { return a.generateMipmaps && b && a.minFilter !== 1003 && a.minFilter !== 1006; } function p(b, c, e, f) {
        a.generateMipmap(b); d.get(c).__maxMipLevel = Math.log(Math.max(
          e,
          f,
        )) * Math.LOG2E;
      } function h(c, d, e) {
        if (!1 === qa) return d; if (c !== null) { if (void 0 !== a[c]) return a[c]; console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '${c}'`); }c = d; d === 6403 && (e === 5126 && (c = 33326), e === 5131 && (c = 33325), e === 5121 && (c = 33321)); d === 6407 && (e === 5126 && (c = 34837), e === 5131 && (c = 34843), e === 5121 && (c = 32849)); d === 6408 && (e === 5126 && (c = 34836), e === 5131 && (c = 34842), e === 5121 && (c = 32856)); c === 33325 || c === 33326 || c === 34842 || c === 34836 ? b.get('EXT_color_buffer_float') : (c === 34843 || c
=== 34837) && console.warn('THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.'); return c;
      } function t(a) { return a === 1003 || a === 1004 || a === 1005 ? 9728 : 9729; } function r(b) { b = b.target; b.removeEventListener('dispose', r); const c = d.get(b); void 0 !== c.__webglInit && (a.deleteTexture(c.__webglTexture), d.remove(b)); b.isVideoTexture && G.delete(b); g.memory.textures--; } function u(b) {
        b = b.target; b.removeEventListener('dispose', u); const c = d.get(b); let e = d.get(b.texture); if (b) {
          void 0 !== e.__webglTexture
&& a.deleteTexture(e.__webglTexture); b.depthTexture && b.depthTexture.dispose(); if (b.isWebGLRenderTargetCube) for (e = 0; e < 6; e++)a.deleteFramebuffer(c.__webglFramebuffer[e]), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[e]); else a.deleteFramebuffer(c.__webglFramebuffer), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer); if (b.isWebGLMultiviewRenderTarget) {
            a.deleteTexture(c.__webglColorTexture); a.deleteTexture(c.__webglDepthStencilTexture); g.memory.textures -= 2; e = 0; for (let f = c.__webglViewFramebuffers.length; e
< f; e++)a.deleteFramebuffer(c.__webglViewFramebuffers[e]);
          }d.remove(b.texture); d.remove(b);
        }g.memory.textures--;
      } function n(a, b) {
        const e = d.get(a); if (a.isVideoTexture) { var f = g.render.frame; G.get(a) !== f && (G.set(a, f), a.update()); } if (a.version > 0 && e.__version !== a.version) if (f = a.image, void 0 === f)console.warn('THREE.WebGLRenderer: Texture marked for update but image is undefined'); else if (!1 === f.complete)console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete'); else { A(e, a, b); return; }c.activeTexture(33984
+ b); c.bindTexture(3553, e.__webglTexture);
      } function w(b, e) {
        if (b.image.length === 6) {
          const g = d.get(b); if (b.version > 0 && g.__version !== b.version) {
            wa(g, b); c.activeTexture(33984 + e); c.bindTexture(34067, g.__webglTexture); a.pixelStorei(37440, b.flipY); let k = b && b.isCompressedTexture; e = b.image[0] && b.image[0].isDataTexture; for (var r = [], q = 0; q < 6; q++)r[q] = k || e ? e ? b.image[q].image : b.image[q] : l(b.image[q], !1, !0, E); const t = r[0]; const u = m(t) || qa; const n = f.convert(b.format); const A = f.convert(b.type); const w = h(b.internalFormat, n, A); U(34067, b, u); if (k) {
              for (q = 0; q < 6; q++) { var z = r[q].mipmaps; for (k = 0; k < z.length; k++) { var B = z[k]; b.format !== 1023 && b.format !== 1022 ? n !== null ? c.compressedTexImage2D(34069 + q, k, w, B.width, B.height, 0, B.data) : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()') : c.texImage2D(34069 + q, k, w, B.width, B.height, 0, n, A, B.data); } }g.__maxMipLevel = z.length - 1;
            } else {
              z = b.mipmaps; for (q = 0; q < 6; q++) {
                if (e) {
                  for (c.texImage2D(34069 + q, 0, w, r[q].width, r[q].height, 0, n, A, r[q].data), k = 0; k < z.length; k++) {
                    B = z[k], B = B.image[q].image,
                    c.texImage2D(34069 + q, k + 1, w, B.width, B.height, 0, n, A, B.data);
                  }
                } else for (c.texImage2D(34069 + q, 0, w, n, A, r[q]), k = 0; k < z.length; k++)B = z[k], c.texImage2D(34069 + q, k + 1, w, n, A, B.image[q]);
              } g.__maxMipLevel = z.length;
            }v(b, u) && p(34067, b, t.width, t.height); g.__version = b.version; if (b.onUpdate)b.onUpdate(b);
          } else c.activeTexture(33984 + e), c.bindTexture(34067, g.__webglTexture);
        }
      } function B(a, b) { c.activeTexture(33984 + b); c.bindTexture(34067, d.get(a).__webglTexture); } function U(c, f, g) {
        g ? (a.texParameteri(c, 10242, M[f.wrapS]), a.texParameteri(
          c,
          10243,
          M[f.wrapT],
        ), c !== 32879 && c !== 35866 || a.texParameteri(c, 32882, M[f.wrapR]), a.texParameteri(c, 10240, da[f.magFilter]), a.texParameteri(c, 10241, da[f.minFilter])) : (a.texParameteri(c, 10242, 33071), a.texParameteri(c, 10243, 33071), c !== 32879 && c !== 35866 || a.texParameteri(c, 32882, 33071), f.wrapS === 1001 && f.wrapT === 1001 || console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'), a.texParameteri(c, 10240, t(f.magFilter)), a.texParameteri(
          c,
          10241,
          t(f.minFilter),
        ), f.minFilter !== 1003 && f.minFilter !== 1006 && console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.')); !(g = b.get('EXT_texture_filter_anisotropic')) || f.type === 1015 && b.get('OES_texture_float_linear') === null || f.type === 1016 && (qa || b.get('OES_texture_half_float_linear')) === null || !(f.anisotropy > 1 || d.get(f).__currentAnisotropy) || (a.texParameterf(c, g.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(f.anisotropy, e.getMaxAnisotropy())),
        d.get(f).__currentAnisotropy = f.anisotropy);
      } function wa(b, c) { void 0 === b.__webglInit && (b.__webglInit = !0, c.addEventListener('dispose', r), b.__webglTexture = a.createTexture(), g.memory.textures++); } function A(b, d, e) {
        let g = 3553; d.isDataTexture2DArray && (g = 35866); d.isDataTexture3D && (g = 32879); wa(b, d); c.activeTexture(33984 + e); c.bindTexture(g, b.__webglTexture); a.pixelStorei(37440, d.flipY); a.pixelStorei(37441, d.premultiplyAlpha); a.pixelStorei(3317, d.unpackAlignment); e = qa ? !1 : d.wrapS !== 1001 || d.wrapT !== 1001 || d.minFilter
!== 1003 && d.minFilter !== 1006; e = e && !1 === m(d.image); e = l(d.image, e, !1, D); const k = m(e) || qa; const q = f.convert(d.format); let r = f.convert(d.type); let t = h(d.internalFormat, q, r); U(g, d, k); const u = d.mipmaps; if (d.isDepthTexture) {
          t = 6402; if (d.type === 1015) { if (!1 === qa) throw Error('Float Depth Texture only supported in WebGL2.0'); t = 36012; } else qa && (t = 33189); d.format === 1026 && t === 6402 && d.type !== 1012 && d.type !== 1014 && (console.warn('THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'), d.type = 1012,
          r = f.convert(d.type)); d.format === 1027 && (t = 34041, d.type !== 1020 && (console.warn('THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'), d.type = 1020, r = f.convert(d.type))); c.texImage2D(3553, 0, t, e.width, e.height, 0, q, r, null);
        } else if (d.isDataTexture) {
          if (u.length > 0 && k) { for (var n = 0, A = u.length; n < A; n++) { var z = u[n]; c.texImage2D(3553, n, t, z.width, z.height, 0, q, r, z.data); }d.generateMipmaps = !1; b.__maxMipLevel = u.length - 1; } else {
            c.texImage2D(3553, 0, t, e.width, e.height, 0, q, r, e.data), b.__maxMipLevel = 0;
          }
        } else if (d.isCompressedTexture) { n = 0; for (A = u.length; n < A; n++)z = u[n], d.format !== 1023 && d.format !== 1022 ? q !== null ? c.compressedTexImage2D(3553, n, t, z.width, z.height, 0, z.data) : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()') : c.texImage2D(3553, n, t, z.width, z.height, 0, q, r, z.data); b.__maxMipLevel = u.length - 1; } else if (d.isDataTexture2DArray)c.texImage3D(35866, 0, t, e.width, e.height, e.depth, 0, q, r, e.data), b.__maxMipLevel = 0; else if (d.isDataTexture3D) {
          c.texImage3D(
            32879,
            0,
            t,
            e.width,
            e.height,
            e.depth,
            0,
            q,
            r,
            e.data,
          ), b.__maxMipLevel = 0;
        } else if (u.length > 0 && k) { n = 0; for (A = u.length; n < A; n++)z = u[n], c.texImage2D(3553, n, t, q, r, z); d.generateMipmaps = !1; b.__maxMipLevel = u.length - 1; } else c.texImage2D(3553, 0, t, q, r, e), b.__maxMipLevel = 0; v(d, k) && p(g, d, e.width, e.height); b.__version = d.version; if (d.onUpdate)d.onUpdate(d);
      } function aa(b, e, g, k) {
        const l = f.convert(e.texture.format); const m = f.convert(e.texture.type); const p = h(e.texture.internalFormat, l, m); c.texImage2D(k, 0, p, e.width, e.height, 0, l, m, null); a.bindFramebuffer(
          36160,
          b,
        ); a.framebufferTexture2D(36160, g, k, d.get(e.texture).__webglTexture, 0); a.bindFramebuffer(36160, null);
      } function x(b, c, d) {
        a.bindRenderbuffer(36161, b); if (c.depthBuffer && !c.stencilBuffer)d ? (d = C(c), a.renderbufferStorageMultisample(36161, d, 33189, c.width, c.height)) : a.renderbufferStorage(36161, 33189, c.width, c.height), a.framebufferRenderbuffer(36160, 36096, 36161, b); else if (c.depthBuffer && c.stencilBuffer) {
          d ? (d = C(c), a.renderbufferStorageMultisample(36161, d, 35056, c.width, c.height)) : a.renderbufferStorage(
            36161,
            34041,
            c.width,
            c.height,
          ), a.framebufferRenderbuffer(36160, 33306, 36161, b);
        } else { b = f.convert(c.texture.format); const e = f.convert(c.texture.type); b = h(c.texture.internalFormat, b, e); d ? (d = C(c), a.renderbufferStorageMultisample(36161, d, b, c.width, c.height)) : a.renderbufferStorage(36161, b, c.width, c.height); }a.bindRenderbuffer(36161, null);
      } function C(a) { return qa && a.isWebGLMultisampleRenderTarget ? Math.min(y, a.samples) : 0; } var qa = e.isWebGL2; const F = e.maxTextures; var E = e.maxCubemapSize; var D = e.maxTextureSize; var y = e.maxSamples; var G = new WeakMap(); let I;
      var L = !1; try { L = typeof OffscreenCanvas !== 'undefined' && (new OffscreenCanvas(1, 1)).getContext('2d') !== null; } catch (Nd) {} let K = 0; var M = { 1E3: 10497, 1001: 33071, 1002: 33648 }; var da = {
        1003: 9728, 1004: 9984, 1005: 9986, 1006: 9729, 1007: 9985, 1008: 9987,
      }; let ha = !1; let P = !1; this.allocateTextureUnit = function () { const a = K; a >= F && console.warn(`THREE.WebGLTextures: Trying to use ${a} texture units while this GPU supports only ${F}`); K += 1; return a; }; this.resetTextureUnits = function () { K = 0; }; this.setTexture2D = n; this.setTexture2DArray = function (a, b) {
        const e = d.get(a); a.version > 0 && e.__version !== a.version ? A(e, a, b) : (c.activeTexture(33984 + b), c.bindTexture(35866, e.__webglTexture));
      }; this.setTexture3D = function (a, b) { const e = d.get(a); a.version > 0 && e.__version !== a.version ? A(e, a, b) : (c.activeTexture(33984 + b), c.bindTexture(32879, e.__webglTexture)); }; this.setTextureCube = w; this.setTextureCubeDynamic = B; this.setupRenderTarget = function (e) {
        let k = d.get(e); let l = d.get(e.texture); e.addEventListener('dispose', u); l.__webglTexture = a.createTexture(); g.memory.textures++; const q = !0 === e.isWebGLRenderTargetCube;
        let r = !0 === e.isWebGLMultisampleRenderTarget; const t = !0 === e.isWebGLMultiviewRenderTarget; const z = m(e) || qa; if (q) { k.__webglFramebuffer = []; for (var A = 0; A < 6; A++)k.__webglFramebuffer[A] = a.createFramebuffer(); } else if (k.__webglFramebuffer = a.createFramebuffer(), r) {
          if (qa) {
            k.__webglMultisampledFramebuffer = a.createFramebuffer(); k.__webglColorRenderbuffer = a.createRenderbuffer(); a.bindRenderbuffer(36161, k.__webglColorRenderbuffer); r = f.convert(e.texture.format); var w = f.convert(e.texture.type); r = h(e.texture.internalFormat, r, w); w = C(e); a.renderbufferStorageMultisample(36161, w, r, e.width, e.height); a.bindFramebuffer(36160, k.__webglMultisampledFramebuffer); a.framebufferRenderbuffer(36160, 36064, 36161, k.__webglColorRenderbuffer); a.bindRenderbuffer(36161, null); e.depthBuffer && (k.__webglDepthRenderbuffer = a.createRenderbuffer(), x(k.__webglDepthRenderbuffer, e, !0)); a.bindFramebuffer(36160, null);
          } else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.');
        } else if (t) {
          A = e.width; let B = e.height; r = e.numViews;
          a.bindFramebuffer(36160, k.__webglFramebuffer); const wa = b.get('OVR_multiview2'); g.memory.textures += 2; w = a.createTexture(); a.bindTexture(35866, w); a.texParameteri(35866, 10240, 9728); a.texParameteri(35866, 10241, 9728); a.texImage3D(35866, 0, 32856, A, B, r, 0, 6408, 5121, null); wa.framebufferTextureMultiviewOVR(36160, 36064, w, 0, 0, r); const F = a.createTexture(); a.bindTexture(35866, F); a.texParameteri(35866, 10240, 9728); a.texParameteri(35866, 10241, 9728); a.texImage3D(35866, 0, 35056, A, B, r, 0, 34041, 34042, null); wa.framebufferTextureMultiviewOVR(
            36160,
            33306,
            F,
            0,
            0,
            r,
          ); B = Array(r); for (A = 0; A < r; ++A)B[A] = a.createFramebuffer(), a.bindFramebuffer(36160, B[A]), a.framebufferTextureLayer(36160, 36064, w, 0, A); k.__webglColorTexture = w; k.__webglDepthStencilTexture = F; k.__webglViewFramebuffers = B; a.bindFramebuffer(36160, null); a.bindTexture(35866, null);
        } if (q) { c.bindTexture(34067, l.__webglTexture); U(34067, e.texture, z); for (A = 0; A < 6; A++)aa(k.__webglFramebuffer[A], e, 36064, 34069 + A); v(e.texture, z) && p(34067, e.texture, e.width, e.height); c.bindTexture(34067, null); } else {
          t || (c.bindTexture(
            3553,
            l.__webglTexture,
          ), U(3553, e.texture, z), aa(k.__webglFramebuffer, e, 36064, 3553), v(e.texture, z) && p(3553, e.texture, e.width, e.height), c.bindTexture(3553, null));
        } if (e.depthBuffer) {
          k = d.get(e); l = !0 === e.isWebGLRenderTargetCube; if (e.depthTexture) {
            if (l) throw Error('target.depthTexture not supported in Cube render targets'); if (e && e.isWebGLRenderTargetCube) throw Error('Depth Texture with cube render targets is not supported'); a.bindFramebuffer(36160, k.__webglFramebuffer); if (!e.depthTexture || !e.depthTexture.isDepthTexture) throw Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');
            d.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width, e.depthTexture.image.height = e.height, e.depthTexture.needsUpdate = !0); n(e.depthTexture, 0); k = d.get(e.depthTexture).__webglTexture; if (e.depthTexture.format === 1026)a.framebufferTexture2D(36160, 36096, 3553, k, 0); else if (e.depthTexture.format === 1027)a.framebufferTexture2D(36160, 33306, 3553, k, 0); else throw Error('Unknown depthTexture format');
          } else if (l) {
            for (k.__webglDepthbuffer = [], l = 0; l < 6; l++)a.bindFramebuffer(36160, k.__webglFramebuffer[l]), k.__webglDepthbuffer[l] = a.createRenderbuffer(), x(k.__webglDepthbuffer[l], e);
          } else a.bindFramebuffer(36160, k.__webglFramebuffer), k.__webglDepthbuffer = a.createRenderbuffer(), x(k.__webglDepthbuffer, e); a.bindFramebuffer(36160, null);
        }
      }; this.updateRenderTargetMipmap = function (a) {
        const b = a.texture; let e = m(a) || qa; if (v(b, e)) {
          e = a.isWebGLRenderTargetCube ? 34067 : 3553; const f = d.get(b).__webglTexture; c.bindTexture(e, f); p(e, b, a.width, a.height); c.bindTexture(
            e,
            null,
          );
        }
      }; this.updateMultisampleRenderTarget = function (b) { if (b.isWebGLMultisampleRenderTarget) if (qa) { let c = d.get(b); a.bindFramebuffer(36008, c.__webglMultisampledFramebuffer); a.bindFramebuffer(36009, c.__webglFramebuffer); c = b.width; const e = b.height; let f = 16384; b.depthBuffer && (f |= 256); b.stencilBuffer && (f |= 1024); a.blitFramebuffer(0, 0, c, e, 0, 0, c, e, f, 9728); } else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.'); }; this.safeSetTexture2D = function (a, b) {
        a && a.isWebGLRenderTarget
&& (!1 === ha && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), ha = !0), a = a.texture); n(a, b);
      }; this.safeSetTextureCube = function (a, b) { a && a.isWebGLRenderTargetCube && (!1 === P && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), P = !0), a = a.texture); a && a.isCubeTexture || Array.isArray(a.image) && a.image.length === 6 ? w(a, b) : B(a, b); };
    } function Vh(a, b, c) {
      const d = c.isWebGL2; return {
        convert(a) {
          if (a === 1009) return 5121; if (a === 1017) return 32819; if (a === 1018) return 32820; if (a === 1019) return 33635; if (a === 1010) return 5120; if (a === 1011) return 5122; if (a === 1012) return 5123; if (a === 1013) return 5124; if (a === 1014) return 5125; if (a === 1015) return 5126; if (a === 1016) { if (d) return 5131; var c = b.get('OES_texture_half_float'); return c !== null ? c.HALF_FLOAT_OES : null; } if (a === 1021) return 6406; if (a === 1022) return 6407; if (a === 1023) return 6408; if (a === 1024) return 6409; if (a === 1025) return 6410;
          if (a === 1026) return 6402; if (a === 1027) return 34041; if (a === 1028) return 6403; if (a === 1029) return 36244; if (a === 1030) return 33319; if (a === 1031) return 33320; if (a === 1032) return 36248; if (a === 1033) return 36249; if (a === 33776 || a === 33777 || a === 33778 || a === 33779) if (c = b.get('WEBGL_compressed_texture_s3tc'), c !== null) { if (a === 33776) return c.COMPRESSED_RGB_S3TC_DXT1_EXT; if (a === 33777) return c.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (a === 33778) return c.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (a === 33779) return c.COMPRESSED_RGBA_S3TC_DXT5_EXT; } else return null;
          if (a === 35840 || a === 35841 || a === 35842 || a === 35843) if (c = b.get('WEBGL_compressed_texture_pvrtc'), c !== null) { if (a === 35840) return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (a === 35841) return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (a === 35842) return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (a === 35843) return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG; } else return null; if (a === 36196) return c = b.get('WEBGL_compressed_texture_etc1'), c !== null ? c.COMPRESSED_RGB_ETC1_WEBGL : null; if (a === 37808 || a === 37809 || a === 37810 || a === 37811 || a === 37812 || a
=== 37813 || a === 37814 || a === 37815 || a === 37816 || a === 37817 || a === 37818 || a === 37819 || a === 37820 || a === 37821) return c = b.get('WEBGL_compressed_texture_astc'), c !== null ? a : null; if (a === 1020) { if (d) return 34042; c = b.get('WEBGL_depth_texture'); return c !== null ? c.UNSIGNED_INT_24_8_WEBGL : null; }
        },
      };
    } function og(a, b, c, d) { va.call(this, a, b, d); this.stencilBuffer = this.depthBuffer = !1; this.numViews = c; } function Gk(a, b) {
      function c(a) { if (a.isArrayCamera) return a.cameras; v[0] = a; return v; } function d(a) {
        if (void 0 === a.isArrayCamera) return !0; a = a.cameras;
        if (a.length > t) return !1; for (let b = 1, c = a.length; b < c; b++) if (a[0].viewport.z !== a[b].viewport.z || a[0].viewport.w !== a[b].viewport.w) return !1; return !0;
      } const e = a.extensions; const f = a.properties; let g; let k; let l; let m; let v; let p; let h; var t = 0; this.isAvailable = function () { if (void 0 === h) { let a = e.get('OVR_multiview2'); if (h = a !== null && !1 === b.getContextAttributes().antialias) for (t = b.getParameter(a.MAX_VIEWS_OVR), g = new og(0, 0, 2), p = new x(), m = [], l = [], v = [], a = 0; a < t; a++)m[a] = new P(), l[a] = new za(); } return h; }; this.attachCamera = function (b) {
        if (!1 !== d(b)) {
          (k = a.getRenderTarget())
            ? p.set(k.width, k.height) : a.getDrawingBufferSize(p); if (b.isArrayCamera) { const c = b.cameras[0].viewport; g.setSize(c.z, c.w); g.setNumViews(b.cameras.length); } else g.setSize(p.x, p.y), g.setNumViews(2); a.setRenderTarget(g);
        }
      }; this.detachCamera = function (c) {
        if (g === a.getRenderTarget()) {
          a.setRenderTarget(k); let d = g; const e = d.numViews; const l = f.get(d).__webglViewFramebuffers; const m = d.width; d = d.height; if (c.isArrayCamera) {
            for (let v = 0; v < e; v++) {
              let h = c.cameras[v].viewport; const q = h.x; const r = h.y; const t = q + h.z; h = r + h.w; b.bindFramebuffer(36008, l[v]); b.blitFramebuffer(
                0,
                0,
                m,
                d,
                q,
                r,
                t,
                h,
                16384,
                9728,
              );
            }
          } else b.bindFramebuffer(36008, l[0]), b.blitFramebuffer(0, 0, m, d, 0, 0, p.x, p.y, 16384, 9728);
        }
      }; this.updateCameraProjectionMatricesUniform = function (a, d) { a = c(a); for (let e = 0; e < a.length; e++)m[e].copy(a[e].projectionMatrix); d.setValue(b, 'projectionMatrices', m); }; this.updateCameraViewMatricesUniform = function (a, d) { a = c(a); for (let e = 0; e < a.length; e++)m[e].copy(a[e].matrixWorldInverse); d.setValue(b, 'viewMatrices', m); }; this.updateObjectMatricesUniforms = function (a, d, e) {
        d = c(d); for (let f = 0; f < d.length; f++) {
          m[f].multiplyMatrices(
            d[f].matrixWorldInverse,
            a.matrixWorld,
          ), l[f].getNormalMatrix(m[f]);
        }e.setValue(b, 'modelViewMatrices', m); e.setValue(b, 'normalMatrices', l);
      };
    } function Pe(a) { pa.call(this); this.cameras = a || []; } function Od() { D.call(this); this.type = 'Group'; } function Wh(a, b) {
      function c(a) { const b = t.get(a.inputSource); b && b.dispatchEvent({ type: a.type }); } function d() {
        t.forEach((a, b) => { a.dispatchEvent({ type: 'disconnected', data: b }); a.visible = !1; }); t.clear(); a.setFramebuffer(null); a.setRenderTarget(a.getRenderTarget()); x.stop(); k.dispatchEvent({ type: 'sessionend' });
        k.isPresenting = !1;
      } function e(a) { m = a; x.setContext(l); x.start(); k.dispatchEvent({ type: 'sessionstart' }); k.isPresenting = !0; } function f(a) { for (var b = l.inputSources, c = 0; c < h.length; c++)t.set(b[c], h[c]); for (c = 0; c < a.removed.length; c++) { b = a.removed[c]; var d = t.get(b); d && (d.dispatchEvent({ type: 'disconnected', data: b }), t.delete(b)); } for (c = 0; c < a.added.length; c++)b = a.added[c], (d = t.get(b)) && d.dispatchEvent({ type: 'connected', data: b }); } function g(a, b) {
        b === null ? a.matrixWorld.copy(a.matrix) : a.matrixWorld.multiplyMatrices(
          b.matrixWorld,
          a.matrix,
        ); a.matrixWorldInverse.getInverse(a.matrixWorld);
      } var k = this; var l = null; var m = null; let v = 'local-floor'; let p = null; var h = []; var t = new Map(); const r = new pa(); r.layers.enable(1); r.viewport = new S(); const u = new pa(); u.layers.enable(2); u.viewport = new S(); const z = new Pe([r, u]); z.layers.enable(1); z.layers.enable(2); this.isPresenting = this.enabled = !1; this.getController = function (a) { let b = h[a]; void 0 === b && (b = new Od(), b.matrixAutoUpdate = !1, b.visible = !1, h[a] = b); return b; }; this.setFramebufferScaleFactor = function () {}; this.setReferenceSpaceType = function (a) {
        v = a;
      }; this.getReferenceSpace = function () { return m; }; this.getSession = function () { return l; }; this.setSession = function (a) {
        l = a; l !== null && (l.addEventListener('select', c), l.addEventListener('selectstart', c), l.addEventListener('selectend', c), l.addEventListener('squeeze', c), l.addEventListener('squeezestart', c), l.addEventListener('squeezeend', c), l.addEventListener('end', d), a = b.getContextAttributes(), a = new XRWebGLLayer(l, b, {
          antialias: a.antialias, alpha: a.alpha, depth: a.depth, stencil: a.stencil,
        }), l.updateRenderState({ baseLayer: a }),
        l.requestReferenceSpace(v).then(e), l.addEventListener('inputsourceschange', f));
      }; const w = new n(); const
        B = new n(); this.getCamera = function (a) {
        let b = a.parent; let c = z.cameras; g(z, b); for (var d = 0; d < c.length; d++)g(c[d], b); a.matrixWorld.copy(z.matrixWorld); a = a.children; d = 0; for (b = a.length; d < b; d++)a[d].updateMatrixWorld(!0); w.setFromMatrixPosition(r.matrixWorld); B.setFromMatrixPosition(u.matrixWorld); d = w.distanceTo(B); let e = r.projectionMatrix.elements; let f = u.projectionMatrix.elements; let k = e[14] / (e[10] - 1); a = e[14] / (e[10] + 1); b = (e[9]
+ 1) / e[5]; c = (e[9] - 1) / e[5]; let l = (e[8] - 1) / e[0]; let m = (f[8] + 1) / f[0]; f = k * l; e = k * m; m = d / (-l + m); l = m * -l; r.matrixWorld.decompose(z.position, z.quaternion, z.scale); z.translateX(l); z.translateZ(m); z.matrixWorld.compose(z.position, z.quaternion, z.scale); z.matrixWorldInverse.getInverse(z.matrixWorld); k += m; m = a + m; z.projectionMatrix.makePerspective(f - l, e + (d - l), b * a / m * k, c * a / m * k, k, m); return z;
      }; let U = null; var x = new yh(); x.setAnimationLoop((b, c) => {
        p = c.getViewerPose(m); if (p !== null) {
          var d = p.views; var e = l.renderState.baseLayer; a.setFramebuffer(e.framebuffer);
          for (var f = 0; f < d.length; f++) { var g = d[f]; const k = e.getViewport(g); const v = z.cameras[f]; v.matrix.fromArray(g.transform.inverse.matrix).getInverse(v.matrix); v.projectionMatrix.fromArray(g.projectionMatrix); v.viewport.set(k.x, k.y, k.width, k.height); f === 0 && z.matrix.copy(v.matrix); }
        }d = l.inputSources; for (f = 0; f < h.length; f++) { e = h[f]; if (g = d[f]) if (g = c.getPose(g.targetRaySpace, m), g !== null) { e.matrix.fromArray(g.transform.matrix); e.matrix.decompose(e.position, e.rotation, e.scale); e.visible = !0; continue; }e.visible = !1; }U && U(b, c);
      });
      this.setAnimationLoop = function (a) { U = a; }; this.dispose = function () {};
    } function pg(a) {
      let b; function c() {
        sa = new wj(H); Ha = new uj(H, sa, a); !1 === Ha.isWebGL2 && (sa.get('WEBGL_depth_texture'), sa.get('OES_texture_float'), sa.get('OES_texture_half_float'), sa.get('OES_texture_half_float_linear'), sa.get('OES_standard_derivatives'), sa.get('OES_element_index_uint'), sa.get('ANGLE_instanced_arrays')); sa.get('OES_texture_float_linear'); oa = new Vh(H, sa, Ha); Z = new Ek(H, sa, Ha); Z.scissor(X.copy(ia).multiplyScalar(R).floor());
        Z.viewport(fb.copy(fa).multiplyScalar(R).floor()); ea = new zj(H); W = new vk(); V = new Fk(H, sa, Z, W, Ha, oa, ea); ma = new rj(H); za = new xj(H, ma, ea); ta = new Cj(H, za, ma, ea); Aa = new Bj(H); ra = new uk(y, sa, Ha); ya = new yk(); va = new Dk(); na = new sj(y, Z, ta, A); Ba = new tj(H, sa, ea, Ha); Da = new yj(H, sa, ea, Ha); ea.programs = ra.programs; y.capabilities = Ha; y.extensions = sa; y.properties = W; y.renderLists = ya; y.state = Z; y.info = ea;
      } function d(a) { a.preventDefault(); console.log('THREE.WebGLRenderer: Context Lost.'); I = !0; } function e() {
        console.log('THREE.WebGLRenderer: Context Restored.');
        I = !1; c();
      } function f(a) { a = a.target; a.removeEventListener('dispose', f); g(a); W.remove(a); } function g(a) { const b = W.get(a).program; a.program = void 0; void 0 !== b && ra.releaseProgram(b); } function k(a, b) { a.render((a) => { y.renderBufferImmediate(a, b); }); } function l(a, b, c, d) {
        if (!1 !== a.visible) {
          if (a.layers.test(b.layers)) {
            if (a.isGroup)c = a.renderOrder; else if (a.isLOD)!0 === a.autoUpdate && a.update(b); else if (a.isLight)F.pushLight(a), a.castShadow && F.pushShadow(a); else if (a.isSprite) {
              if (!a.frustumCulled || lg.intersectsSprite(a)) {
                d
&& Ib.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md); var e = ta.update(a); var f = a.material; f.visible && G.push(a, e, f, c, Ib.z, null);
              }
            } else if (a.isImmediateRenderObject)d && Ib.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md), G.push(a, null, a.material, c, Ib.z, null); else if (a.isMesh || a.isLine || a.isPoints) {
              if (a.isSkinnedMesh && a.skeleton.frame !== ea.render.frame && (a.skeleton.update(), a.skeleton.frame = ea.render.frame), !a.frustumCulled || lg.intersectsObject(a)) {
                if (d && Ib.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md),
                e = ta.update(a), f = a.material, Array.isArray(f)) for (var g = e.groups, k = 0, m = g.length; k < m; k++) { const p = g[k]; const v = f[p.materialIndex]; v && v.visible && G.push(a, e, v, c, Ib.z, p); } else f.visible && G.push(a, e, f, c, Ib.z, null);
              }
            }
          } a = a.children; k = 0; for (m = a.length; k < m; k++)l(a[k], b, c, d);
        }
      } function m(a, b, c, d) {
        for (let e = 0, f = a.length; e < f; e++) {
          let g = a[e]; const k = g.object; const l = g.geometry; const m = void 0 === d ? g.material : d; g = g.group; if (c.isArrayCamera) {
            if (T = c, ka.enabled && ua.isAvailable())v(k, b, c, l, m, g); else {
              for (let p = c.cameras, h = 0, q = p.length; h < q; h++) {
                const r = p[h]; k.layers.test(r.layers) && (Z.viewport(fb.copy(r.viewport)), F.setupLights(r), v(k, b, r, l, m, g));
              }
            }
          } else T = null, v(k, b, c, l, m, g);
        }
      } function v(a, c, d, e, f, g) { a.onBeforeRender(y, c, d, e, f, g); F = va.get(c, T || d); a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, a.matrixWorld); a.normalMatrix.getNormalMatrix(a.modelViewMatrix); if (a.isImmediateRenderObject) { const l = h(d, c, f, a); Z.setMaterial(f); da = b = null; ha = !1; k(a, l); } else y.renderBufferDirect(d, c, e, f, a, g); a.onAfterRender(y, c, d, e, f, g); F = va.get(c, T || d); } function p(
        a,
        b,
        c,
      ) {
        const d = W.get(a); const e = F.state.lights; const k = e.state.version; c = ra.getParameters(a, e.state, F.state.shadowsArray, b, Ua.numPlanes, Ua.numIntersection, c); let l = ra.getProgramCacheKey(a, c); let m = d.program; let p = !0; if (void 0 === m)a.addEventListener('dispose', f); else if (m.cacheKey !== l)g(a); else { if (d.lightsStateVersion !== k)d.lightsStateVersion = k; else if (void 0 !== c.shaderID) return; p = !1; }p && (c.shaderID ? (l = eb[c.shaderID], d.shader = {
          name: a.type, uniforms: bc(l.uniforms), vertexShader: l.vertexShader, fragmentShader: l.fragmentShader,
        })
          : d.shader = {
            name: a.type, uniforms: a.uniforms, vertexShader: a.vertexShader, fragmentShader: a.fragmentShader,
          }, a.onBeforeCompile(d.shader, y), l = ra.getProgramCacheKey(a, c), m = ra.acquireProgram(a, d.shader, c, l), d.program = m, d.environment = a.isMeshStandardMaterial ? b.environment : null, d.outputEncoding = y.outputEncoding, a.program = m); c = m.getAttributes(); if (a.morphTargets) for (l = a.numSupportedMorphTargets = 0; l < y.maxMorphTargets; l++)c[`morphTarget${l}`] >= 0 && a.numSupportedMorphTargets++; if (a.morphNormals) {
          for (l = a.numSupportedMorphNormals = 0; l < y.maxMorphNormals; l++)c[`morphNormal${l}`] >= 0 && a.numSupportedMorphNormals++;
        } c = d.shader.uniforms; if (!a.isShaderMaterial && !a.isRawShaderMaterial || !0 === a.clipping)d.numClippingPlanes = Ua.numPlanes, d.numIntersection = Ua.numIntersection, c.clippingPlanes = Ua.uniform; d.fog = b.fog; d.needsLights = a.isMeshLambertMaterial || a.isMeshToonMaterial || a.isMeshPhongMaterial || a.isMeshStandardMaterial || a.isShadowMaterial || a.isShaderMaterial && !0 === a.lights; d.lightsStateVersion = k; d.needsLights && (c.ambientLightColor.value = e.state.ambient, c.lightProbe.value = e.state.probe, c.directionalLights.value = e.state.directional, c.spotLights.value = e.state.spot, c.rectAreaLights.value = e.state.rectArea, c.pointLights.value = e.state.point, c.hemisphereLights.value = e.state.hemi, c.directionalShadowMap.value = e.state.directionalShadowMap, c.directionalShadowMatrix.value = e.state.directionalShadowMatrix, c.spotShadowMap.value = e.state.spotShadowMap, c.spotShadowMatrix.value = e.state.spotShadowMatrix, c.pointShadowMap.value = e.state.pointShadowMap,
        c.pointShadowMatrix.value = e.state.pointShadowMatrix); a = d.program.getUniforms(); a = Fb.seqWithValue(a.seq, c); d.uniformsList = a;
      } function h(a, b, c, d) {
        V.resetTextureUnits(); const e = b.fog; const f = c.isMeshStandardMaterial ? b.environment : null; const g = W.get(c); let k = F.state.lights; pa && (mg || a !== Y) && Ua.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, g, a === Y && c.id === Oe); c.version === g.__version && (void 0 === g.program ? c.needsUpdate = !0 : c.fog && g.fog !== e ? c.needsUpdate = !0 : g.environment !== f ? c.needsUpdate = !0 : g.needsLights && g.lightsStateVersion
!== k.state.version ? c.needsUpdate = !0 : void 0 === g.numClippingPlanes || g.numClippingPlanes === Ua.numPlanes && g.numIntersection === Ua.numIntersection ? g.outputEncoding !== y.outputEncoding && (c.needsUpdate = !0) : c.needsUpdate = !0); c.version !== g.__version && (p(c, b, d), g.__version = c.version); let l = !1; let m = !1; let v = !1; b = g.program; k = b.getUniforms(); const h = g.shader.uniforms; Z.useProgram(b.program) && (v = m = l = !0); c.id !== Oe && (Oe = c.id, m = !0); if (l || Y !== a) {
          b.numMultiviewViews > 0 ? ua.updateCameraProjectionMatricesUniform(a, k) : k.setValue(
            H,
            'projectionMatrix',
            a.projectionMatrix,
          ); Ha.logarithmicDepthBuffer && k.setValue(H, 'logDepthBufFC', 2 / (Math.log(a.far + 1) / Math.LN2)); Y !== a && (Y = a, v = m = !0); if (c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshStandardMaterial || c.envMap)l = k.map.cameraPosition, void 0 !== l && l.setValue(H, Ib.setFromMatrixPosition(a.matrixWorld)); (c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial) && k.setValue(H, 'isOrthographic', !0 === a.isOrthographicCamera);
          if (c.isMeshPhongMaterial || c.isMeshToonMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial || c.skinning)b.numMultiviewViews > 0 ? ua.updateCameraViewMatricesUniform(a, k) : k.setValue(H, 'viewMatrix', a.matrixWorldInverse);
        } if (c.skinning && (k.setOptional(H, d, 'bindMatrix'), k.setOptional(H, d, 'bindMatrixInverse'), l = d.skeleton)) {
          let q = l.bones; if (Ha.floatVertexTextures) {
            if (void 0 === l.boneTexture) {
              q = Math.sqrt(4 * q.length); q = O.ceilPowerOfTwo(q); q = Math.max(q, 4); const n = new Float32Array(q * q * 4); n.set(l.boneMatrices); const u = new cc(n, q, q, 1023, 1015); l.boneMatrices = n; l.boneTexture = u; l.boneTextureSize = q;
            }k.setValue(H, 'boneTexture', l.boneTexture, V); k.setValue(H, 'boneTextureSize', l.boneTextureSize);
          } else k.setOptional(H, l, 'boneMatrices');
        } if (m || g.receiveShadow !== d.receiveShadow)g.receiveShadow = d.receiveShadow, k.setValue(H, 'receiveShadow', d.receiveShadow); if (m) {
          k.setValue(H, 'toneMappingExposure', y.toneMappingExposure); k.setValue(H, 'toneMappingWhitePoint', y.toneMappingWhitePoint);
          g.needsLights && (m = v, h.ambientLightColor.needsUpdate = m, h.lightProbe.needsUpdate = m, h.directionalLights.needsUpdate = m, h.pointLights.needsUpdate = m, h.spotLights.needsUpdate = m, h.rectAreaLights.needsUpdate = m, h.hemisphereLights.needsUpdate = m); e && c.fog && (h.fogColor.value.copy(e.color), e.isFog ? (h.fogNear.value = e.near, h.fogFar.value = e.far) : e.isFogExp2 && (h.fogDensity.value = e.density)); if (c.isMeshBasicMaterial)t(h, c); else if (c.isMeshLambertMaterial)t(h, c), c.emissiveMap && (h.emissiveMap.value = c.emissiveMap); else if (c.isMeshToonMaterial) {
            t(
              h,
              c,
            ), h.specular.value.copy(c.specular), h.shininess.value = Math.max(c.shininess, 1E-4), c.gradientMap && (h.gradientMap.value = c.gradientMap), c.emissiveMap && (h.emissiveMap.value = c.emissiveMap), c.bumpMap && (h.bumpMap.value = c.bumpMap, h.bumpScale.value = c.bumpScale, c.side === 1 && (h.bumpScale.value *= -1)), c.normalMap && (h.normalMap.value = c.normalMap, h.normalScale.value.copy(c.normalScale), c.side === 1 && h.normalScale.value.negate()), c.displacementMap && (h.displacementMap.value = c.displacementMap, h.displacementScale.value = c.displacementScale, h.displacementBias.value = c.displacementBias);
          } else if (c.isMeshPhongMaterial) {
            t(h, c), h.specular.value.copy(c.specular), h.shininess.value = Math.max(c.shininess, 1E-4), c.emissiveMap && (h.emissiveMap.value = c.emissiveMap), c.bumpMap && (h.bumpMap.value = c.bumpMap, h.bumpScale.value = c.bumpScale, c.side === 1 && (h.bumpScale.value *= -1)), c.normalMap && (h.normalMap.value = c.normalMap, h.normalScale.value.copy(c.normalScale), c.side === 1 && h.normalScale.value.negate()), c.displacementMap && (h.displacementMap.value = c.displacementMap, h.displacementScale.value = c.displacementScale, h.displacementBias.value = c.displacementBias);
          } else if (c.isMeshStandardMaterial) {
            t(h, c, f), c.isMeshPhysicalMaterial ? (r(h, c, f), h.reflectivity.value = c.reflectivity, h.clearcoat.value = c.clearcoat, h.clearcoatRoughness.value = c.clearcoatRoughness, c.sheen && h.sheen.value.copy(c.sheen), c.clearcoatNormalMap && (h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale), h.clearcoatNormalMap.value = c.clearcoatNormalMap, c.side === 1 && h.clearcoatNormalScale.value.negate()),
            h.transparency.value = c.transparency) : r(h, c, f);
          } else if (c.isMeshMatcapMaterial)t(h, c), c.matcap && (h.matcap.value = c.matcap), c.bumpMap && (h.bumpMap.value = c.bumpMap, h.bumpScale.value = c.bumpScale, c.side === 1 && (h.bumpScale.value *= -1)), c.normalMap && (h.normalMap.value = c.normalMap, h.normalScale.value.copy(c.normalScale), c.side === 1 && h.normalScale.value.negate()), c.displacementMap && (h.displacementMap.value = c.displacementMap, h.displacementScale.value = c.displacementScale, h.displacementBias.value = c.displacementBias);
          else if (c.isMeshDepthMaterial)t(h, c), c.displacementMap && (h.displacementMap.value = c.displacementMap, h.displacementScale.value = c.displacementScale, h.displacementBias.value = c.displacementBias); else if (c.isMeshDistanceMaterial)t(h, c), c.displacementMap && (h.displacementMap.value = c.displacementMap, h.displacementScale.value = c.displacementScale, h.displacementBias.value = c.displacementBias), h.referencePosition.value.copy(c.referencePosition), h.nearDistance.value = c.nearDistance, h.farDistance.value = c.farDistance;
          else if (c.isMeshNormalMaterial)t(h, c), c.bumpMap && (h.bumpMap.value = c.bumpMap, h.bumpScale.value = c.bumpScale, c.side === 1 && (h.bumpScale.value *= -1)), c.normalMap && (h.normalMap.value = c.normalMap, h.normalScale.value.copy(c.normalScale), c.side === 1 && h.normalScale.value.negate()), c.displacementMap && (h.displacementMap.value = c.displacementMap, h.displacementScale.value = c.displacementScale, h.displacementBias.value = c.displacementBias); else if (c.isLineBasicMaterial) {
            h.diffuse.value.copy(c.color), h.opacity.value = c.opacity,
            c.isLineDashedMaterial && (h.dashSize.value = c.dashSize, h.totalSize.value = c.dashSize + c.gapSize, h.scale.value = c.scale);
          } else if (c.isPointsMaterial) { h.diffuse.value.copy(c.color); h.opacity.value = c.opacity; h.size.value = c.size * R; h.scale.value = 0.5 * J; c.map && (h.map.value = c.map); c.alphaMap && (h.alphaMap.value = c.alphaMap); if (c.map) var z = c.map; else c.alphaMap && (z = c.alphaMap); void 0 !== z && (!0 === z.matrixAutoUpdate && z.updateMatrix(), h.uvTransform.value.copy(z.matrix)); } else if (c.isSpriteMaterial) {
            h.diffuse.value.copy(c.color);
            h.opacity.value = c.opacity; h.rotation.value = c.rotation; c.map && (h.map.value = c.map); c.alphaMap && (h.alphaMap.value = c.alphaMap); if (c.map) var w = c.map; else c.alphaMap && (w = c.alphaMap); void 0 !== w && (!0 === w.matrixAutoUpdate && w.updateMatrix(), h.uvTransform.value.copy(w.matrix));
          } else c.isShadowMaterial && (h.color.value.copy(c.color), h.opacity.value = c.opacity); void 0 !== h.ltc_1 && (h.ltc_1.value = E.LTC_1); void 0 !== h.ltc_2 && (h.ltc_2.value = E.LTC_2); Fb.upload(H, g.uniformsList, h, V); c.isShaderMaterial && (c.uniformsNeedUpdate = !1);
        }c.isShaderMaterial && !0 === c.uniformsNeedUpdate && (Fb.upload(H, g.uniformsList, h, V), c.uniformsNeedUpdate = !1); c.isSpriteMaterial && k.setValue(H, 'center', d.center); b.numMultiviewViews > 0 ? ua.updateObjectMatricesUniforms(d, a, k) : (k.setValue(H, 'modelViewMatrix', d.modelViewMatrix), k.setValue(H, 'normalMatrix', d.normalMatrix)); k.setValue(H, 'modelMatrix', d.matrixWorld); return b;
      } function t(a, b, c) {
        a.opacity.value = b.opacity; b.color && a.diffuse.value.copy(b.color); b.emissive && a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);
        b.map && (a.map.value = b.map); b.alphaMap && (a.alphaMap.value = b.alphaMap); b.specularMap && (a.specularMap.value = b.specularMap); if (c = b.envMap || c)a.envMap.value = c, a.flipEnvMap.value = c.isCubeTexture ? -1 : 1, a.reflectivity.value = b.reflectivity, a.refractionRatio.value = b.refractionRatio, a.maxMipLevel.value = W.get(c).__maxMipLevel; b.lightMap && (a.lightMap.value = b.lightMap, a.lightMapIntensity.value = b.lightMapIntensity); b.aoMap && (a.aoMap.value = b.aoMap, a.aoMapIntensity.value = b.aoMapIntensity); if (b.map) var d = b.map; else {
          b.specularMap
            ? d = b.specularMap : b.displacementMap ? d = b.displacementMap : b.normalMap ? d = b.normalMap : b.bumpMap ? d = b.bumpMap : b.roughnessMap ? d = b.roughnessMap : b.metalnessMap ? d = b.metalnessMap : b.alphaMap ? d = b.alphaMap : b.emissiveMap && (d = b.emissiveMap);
        } void 0 !== d && (d.isWebGLRenderTarget && (d = d.texture), !0 === d.matrixAutoUpdate && d.updateMatrix(), a.uvTransform.value.copy(d.matrix)); if (b.aoMap) var e = b.aoMap; else b.lightMap && (e = b.lightMap); void 0 !== e && (e.isWebGLRenderTarget && (e = e.texture), !0 === e.matrixAutoUpdate && e.updateMatrix(), a.uv2Transform.value.copy(e.matrix));
      }
      function r(a, b, c) {
        a.roughness.value = b.roughness; a.metalness.value = b.metalness; b.roughnessMap && (a.roughnessMap.value = b.roughnessMap); b.metalnessMap && (a.metalnessMap.value = b.metalnessMap); b.emissiveMap && (a.emissiveMap.value = b.emissiveMap); b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale, b.side === 1 && (a.bumpScale.value *= -1)); b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale), b.side === 1 && a.normalScale.value.negate()); b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias); if (b.envMap || c)a.envMapIntensity.value = b.envMapIntensity;
      }a = a || {}; const u = void 0 !== a.canvas ? a.canvas : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas'); const z = void 0 !== a.context ? a.context : null; let w = void 0 !== a.alpha ? a.alpha : !1; const B = void 0 !== a.depth ? a.depth : !0; const U = void 0 !== a.stencil ? a.stencil : !0; const wa = void 0 !== a.antialias ? a.antialias : !1; var A = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0; const aa = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1; const C = void 0 !== a.powerPreference ? a.powerPreference : 'default'; const D = void 0 !== a.failIfMajorPerformanceCaveat ? a.failIfMajorPerformanceCaveat : !1; var G = null; var F = null; this.domElement = u; this.debug = { checkShaderErrors: !0 }; this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0; this.clippingPlanes = []; this.localClippingEnabled = !1; this.gammaFactor = 2; this.outputEncoding = 3E3; this.physicallyCorrectLights = !1; this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1; this.maxMorphTargets = 8; this.maxMorphNormals = 4; var y = this; var I = !1; let K = null; let L = 0; let M = 0; let N = null; let Q = null; var Oe = -1; var da = b = null; var ha = !1; var Y = null; var T = null; var fb = new S(); var X = new S(); let ba = null; let ca = u.width; var J = u.height; var R = 1; let ja = null; let la = null; var fa = new S(0, 0, ca, J); var ia = new S(0, 0, ca, J); let kg = !1; var lg = new Hd(); var Ua = new vj(); var pa = !1; var mg = !1; var Md = new P(); var Ib = new n(); try {
        w = {
          alpha: w, depth: B, stencil: U, antialias: wa, premultipliedAlpha: A, preserveDrawingBuffer: aa, powerPreference: C, failIfMajorPerformanceCaveat: D, xrCompatible: !0,
        };
        u.addEventListener('webglcontextlost', d, !1); u.addEventListener('webglcontextrestored', e, !1); var H = z || u.getContext('webgl', w) || u.getContext('experimental-webgl', w); if (H === null) { if (u.getContext('webgl') !== null) throw Error('Error creating WebGL context with your selected attributes.'); throw Error('Error creating WebGL context.'); } void 0 === H.getShaderPrecisionFormat && (H.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 }; });
      } catch (Xh) {
        throw console.error(`THREE.WebGLRenderer: ${
          Xh.message}`), Xh;
      } let sa; let Ha; let Z; let ea; let W; let V; let ma; let za; let ta; let ra; let ya; let va; let na; let Aa; let Ba; let Da; let oa; c(); var ka = new Wh(y, H); this.xr = ka; var ua = new Gk(y, H); const Fa = new Th(y, ta, Ha.maxTextureSize); this.shadowMap = Fa; this.getContext = function () { return H; }; this.getContextAttributes = function () { return H.getContextAttributes(); }; this.forceContextLoss = function () { const a = sa.get('WEBGL_lose_context'); a && a.loseContext(); }; this.forceContextRestore = function () { const a = sa.get('WEBGL_lose_context'); a && a.restoreContext(); }; this.getPixelRatio = function () { return R; };
      this.setPixelRatio = function (a) { void 0 !== a && (R = a, this.setSize(ca, J, !1)); }; this.getSize = function (a) { void 0 === a && (console.warn('WebGLRenderer: .getsize() now requires a Vector2 as an argument'), a = new x()); return a.set(ca, J); }; this.setSize = function (a, b, c) { ka.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (ca = a, J = b, u.width = Math.floor(a * R), u.height = Math.floor(b * R), !1 !== c && (u.style.width = `${a}px`, u.style.height = `${b}px`), this.setViewport(0, 0, a, b)); }; this.getDrawingBufferSize = function (a) { void 0 === a && (console.warn('WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument'), a = new x()); return a.set(ca * R, J * R).floor(); }; this.setDrawingBufferSize = function (a, b, c) { ca = a; J = b; R = c; u.width = Math.floor(a * c); u.height = Math.floor(b * c); this.setViewport(0, 0, a, b); }; this.getCurrentViewport = function (a) { void 0 === a && (console.warn('WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument'), a = new S()); return a.copy(fb); }; this.getViewport = function (a) { return a.copy(fa); };
      this.setViewport = function (a, b, c, d) { a.isVector4 ? fa.set(a.x, a.y, a.z, a.w) : fa.set(a, b, c, d); Z.viewport(fb.copy(fa).multiplyScalar(R).floor()); }; this.getScissor = function (a) { return a.copy(ia); }; this.setScissor = function (a, b, c, d) { a.isVector4 ? ia.set(a.x, a.y, a.z, a.w) : ia.set(a, b, c, d); Z.scissor(X.copy(ia).multiplyScalar(R).floor()); }; this.getScissorTest = function () { return kg; }; this.setScissorTest = function (a) { Z.setScissorTest(kg = a); }; this.setOpaqueSort = function (a) { ja = a; }; this.setTransparentSort = function (a) { la = a; }; this.getClearColor = function () { return na.getClearColor(); }; this.setClearColor = function () { na.setClearColor.apply(na, arguments); }; this.getClearAlpha = function () { return na.getClearAlpha(); }; this.setClearAlpha = function () { na.setClearAlpha.apply(na, arguments); }; this.clear = function (a, b, c) { let d = 0; if (void 0 === a || a)d |= 16384; if (void 0 === b || b)d |= 256; if (void 0 === c || c)d |= 1024; H.clear(d); }; this.clearColor = function () { this.clear(!0, !1, !1); }; this.clearDepth = function () { this.clear(!1, !0, !1); }; this.clearStencil = function () { this.clear(!1, !1, !0); };
      this.dispose = function () { u.removeEventListener('webglcontextlost', d, !1); u.removeEventListener('webglcontextrestored', e, !1); ya.dispose(); va.dispose(); W.dispose(); ta.dispose(); ka.dispose(); Ca.stop(); }; this.renderBufferImmediate = function (a, b) {
        Z.initAttributes(); const c = W.get(a); a.hasPositions && !c.position && (c.position = H.createBuffer()); a.hasNormals && !c.normal && (c.normal = H.createBuffer()); a.hasUvs && !c.uv && (c.uv = H.createBuffer()); a.hasColors && !c.color && (c.color = H.createBuffer()); b = b.getAttributes(); a.hasPositions
&& (H.bindBuffer(34962, c.position), H.bufferData(34962, a.positionArray, 35048), Z.enableAttribute(b.position), H.vertexAttribPointer(b.position, 3, 5126, !1, 0, 0)); a.hasNormals && (H.bindBuffer(34962, c.normal), H.bufferData(34962, a.normalArray, 35048), Z.enableAttribute(b.normal), H.vertexAttribPointer(b.normal, 3, 5126, !1, 0, 0)); a.hasUvs && (H.bindBuffer(34962, c.uv), H.bufferData(34962, a.uvArray, 35048), Z.enableAttribute(b.uv), H.vertexAttribPointer(b.uv, 2, 5126, !1, 0, 0)); a.hasColors && (H.bindBuffer(34962, c.color), H.bufferData(
          34962,
          a.colorArray,
          35048,
        ), Z.enableAttribute(b.color), H.vertexAttribPointer(b.color, 3, 5126, !1, 0, 0)); Z.disableUnusedAttributes(); H.drawArrays(4, 0, a.count); a.count = 0;
      }; const Ga = new pb(); this.renderBufferDirect = function (a, c, d, e, f, g) {
        c === null && (c = Ga); let k = f.isMesh && f.matrixWorld.determinant() < 0; let l = h(a, c, e, f); Z.setMaterial(e, k); let m = !1; if (b !== d.id || da !== l.id || ha !== (!0 === e.wireframe))b = d.id, da = l.id, ha = !0 === e.wireframe, m = !0; if (e.morphTargets || e.morphNormals)Aa.update(f, d, e, l), m = !0; a = d.index; c = d.attributes.position;
        if (a === null) { if (void 0 === c || c.count === 0) return; } else if (a.count === 0) return; let p = 1; !0 === e.wireframe && (a = za.getWireframeAttribute(d), p = 2); k = Ba; if (a !== null) { var v = ma.get(a); k = Da; k.setIndex(v); } if (m) {
          if (!1 !== Ha.isWebGL2 || !f.isInstancedMesh && !d.isInstancedBufferGeometry || sa.get('ANGLE_instanced_arrays') !== null) {
            Z.initAttributes(); m = d.attributes; l = l.getAttributes(); const q = e.defaultAttributeValues; for (x in l) {
              const r = l[x]; if (r >= 0) {
                let t = m[x]; if (void 0 !== t) {
                  var n = t.normalized; const u = t.itemSize; var z = ma.get(t); if (void 0
!== z) {
                    var w = z.buffer; var A = z.type; z = z.bytesPerElement; if (t.isInterleavedBufferAttribute) { const B = t.data; const U = B.stride; t = t.offset; B && B.isInstancedInterleavedBuffer ? (Z.enableAttributeAndDivisor(r, B.meshPerAttribute), void 0 === d.maxInstancedCount && (d.maxInstancedCount = B.meshPerAttribute * B.count)) : Z.enableAttribute(r); H.bindBuffer(34962, w); H.vertexAttribPointer(r, u, A, n, U * z, t * z); } else {
                      t.isInstancedBufferAttribute ? (Z.enableAttributeAndDivisor(r, t.meshPerAttribute), void 0 === d.maxInstancedCount && (d.maxInstancedCount = t.meshPerAttribute
* t.count)) : Z.enableAttribute(r), H.bindBuffer(34962, w), H.vertexAttribPointer(r, u, A, n, 0, 0);
                    }
                  }
                } else if (x === 'instanceMatrix')z = ma.get(f.instanceMatrix), void 0 !== z && (w = z.buffer, A = z.type, Z.enableAttributeAndDivisor(r + 0, 1), Z.enableAttributeAndDivisor(r + 1, 1), Z.enableAttributeAndDivisor(r + 2, 1), Z.enableAttributeAndDivisor(r + 3, 1), H.bindBuffer(34962, w), H.vertexAttribPointer(r + 0, 4, A, !1, 64, 0), H.vertexAttribPointer(r + 1, 4, A, !1, 64, 16), H.vertexAttribPointer(r + 2, 4, A, !1, 64, 32), H.vertexAttribPointer(r + 3, 4, A, !1, 64, 48)); else if (void 0
!== q && (n = q[x], void 0 !== n)) switch (n.length) { case 2: H.vertexAttrib2fv(r, n); break; case 3: H.vertexAttrib3fv(r, n); break; case 4: H.vertexAttrib4fv(r, n); break; default: H.vertexAttrib1fv(r, n); }
              }
            }Z.disableUnusedAttributes();
          }a !== null && H.bindBuffer(34963, v.buffer);
        } var x = d.drawRange.start * p; m = g !== null ? g.start * p : 0; v = Math.max(x, m); g = Math.max(0, Math.min(a !== null ? a.count : c.count, x + d.drawRange.count * p, m + (g !== null ? g.count * p : Infinity)) - 1 - v + 1); g !== 0 && (f.isMesh ? !0 === e.wireframe ? (Z.setLineWidth(e.wireframeLinewidth * (N
=== null ? R : 1)), k.setMode(1)) : k.setMode(4) : f.isLine ? (e = e.linewidth, void 0 === e && (e = 1), Z.setLineWidth(e * (N === null ? R : 1)), f.isLineSegments ? k.setMode(1) : f.isLineLoop ? k.setMode(2) : k.setMode(3)) : f.isPoints ? k.setMode(0) : f.isSprite && k.setMode(4), f.isInstancedMesh ? k.renderInstances(d, v, g, f.count) : d.isInstancedBufferGeometry ? k.renderInstances(d, v, g, d.maxInstancedCount) : k.render(v, g));
      }; this.compile = function (a, b) {
        F = va.get(a, b); F.init(); a.traverse((a) => { a.isLight && (F.pushLight(a), a.castShadow && F.pushShadow(a)); });
        F.setupLights(b); a.traverse((b) => { if (b.material) if (Array.isArray(b.material)) for (let c = 0; c < b.material.length; c++)p(b.material[c], a, b); else p(b.material, a, b); });
      }; let Ea = null; var Ca = new yh(); Ca.setAnimationLoop((a) => { ka.isPresenting || Ea && Ea(a); }); typeof window !== 'undefined' && Ca.setContext(window); this.setAnimationLoop = function (a) { Ea = a; ka.setAnimationLoop(a); Ca.start(); }; this.render = function (a, c, d, e) {
        if (void 0 !== d) {
          console.warn('THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.');
          var f = d;
        } if (void 0 !== e) { console.warn('THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.'); var g = e; }c && c.isCamera ? I || (da = b = null, ha = !1, Oe = -1, Y = null, !0 === a.autoUpdate && a.updateMatrixWorld(), c.parent === null && c.updateMatrixWorld(), ka.enabled && ka.isPresenting && (c = ka.getCamera(c)), F = va.get(a, c), F.init(), a.onBeforeRender(y, a, c, f || N), Md.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse), lg.setFromMatrix(Md), mg = this.localClippingEnabled, pa = Ua.init(
          this.clippingPlanes,
          mg,
          c,
        ), G = ya.get(a, c), G.init(), l(a, c, 0, y.sortObjects), !0 === y.sortObjects && G.sort(ja, la), pa && Ua.beginShadows(), Fa.render(F.state.shadowsArray, a, c), F.setupLights(c), pa && Ua.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== f && this.setRenderTarget(f), ka.enabled && ua.isAvailable() && ua.attachCamera(c), na.render(G, a, c, g), d = G.opaque, e = G.transparent, a.overrideMaterial ? (f = a.overrideMaterial, d.length && m(d, a, c, f), e.length && m(e, a, c, f)) : (d.length && m(d, a, c), e.length && m(e, a, c)), a.onAfterRender(y, a, c), N
!== null && (V.updateRenderTargetMipmap(N), V.updateMultisampleRenderTarget(N)), Z.buffers.depth.setTest(!0), Z.buffers.depth.setMask(!0), Z.buffers.color.setMask(!0), Z.setPolygonOffset(!1), ka.enabled && ua.isAvailable() && ua.detachCamera(c), F = G = null) : console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
      }; this.setFramebuffer = function (a) { K !== a && N === null && H.bindFramebuffer(36160, a); K = a; }; this.getActiveCubeFace = function () { return L; }; this.getActiveMipmapLevel = function () { return M; }; this.getRenderTarget = function () { return N; }; this.setRenderTarget = function (a, b, c) {
        N = a; L = b; M = c; a && void 0 === W.get(a).__webglFramebuffer && V.setupRenderTarget(a); let d = K; let e = !1; a ? (d = W.get(a).__webglFramebuffer, a.isWebGLRenderTargetCube ? (d = d[b || 0], e = !0) : d = a.isWebGLMultisampleRenderTarget ? W.get(a).__webglMultisampledFramebuffer : d, fb.copy(a.viewport), X.copy(a.scissor), ba = a.scissorTest) : (fb.copy(fa).multiplyScalar(R).floor(), X.copy(ia).multiplyScalar(R).floor(), ba = kg); Q !== d && (H.bindFramebuffer(36160, d), Q = d); Z.viewport(fb); Z.scissor(X);
        Z.setScissorTest(ba); e && (a = W.get(a.texture), H.framebufferTexture2D(36160, 36064, 34069 + (b || 0), a.__webglTexture, c || 0));
      }; this.readRenderTargetPixels = function (a, b, c, d, e, f, g) {
        if (a && a.isWebGLRenderTarget) {
          let k = W.get(a).__webglFramebuffer; a.isWebGLRenderTargetCube && void 0 !== g && (k = k[g]); if (k) {
            g = !1; k !== Q && (H.bindFramebuffer(36160, k), g = !0); try {
              const l = a.texture; const m = l.format; const h = l.type; m !== 1023 && oa.convert(m) !== H.getParameter(35739) ? console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.')
                : h === 1009 || oa.convert(h) === H.getParameter(35738) || h === 1015 && (Ha.isWebGL2 || sa.get('OES_texture_float') || sa.get('WEBGL_color_buffer_float')) || h === 1016 && (Ha.isWebGL2 ? sa.get('EXT_color_buffer_float') : sa.get('EXT_color_buffer_half_float')) ? H.checkFramebufferStatus(36160) === 36053 ? b >= 0 && b <= a.width - d && c >= 0 && c <= a.height - e && H.readPixels(b, c, d, e, oa.convert(m), oa.convert(h), f) : console.error('THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.') : console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.');
            } finally {
              g
&& H.bindFramebuffer(36160, Q);
            }
          }
        } else console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');
      }; this.copyFramebufferToTexture = function (a, b, c) { void 0 === c && (c = 0); let d = 2 ** -c; const e = Math.floor(b.image.width * d); d = Math.floor(b.image.height * d); const f = oa.convert(b.format); V.setTexture2D(b, 0); H.copyTexImage2D(3553, c, f, a.x, a.y, e, d, 0); Z.unbindTexture(); }; this.copyTextureToTexture = function (a, b, c, d) {
        const e = b.image.width; const f = b.image.height; const g = oa.convert(c.format); const k = oa.convert(c.type);
        V.setTexture2D(c, 0); b.isDataTexture ? H.texSubImage2D(3553, d || 0, a.x, a.y, e, f, g, k, b.image.data) : H.texSubImage2D(3553, d || 0, a.x, a.y, g, k, b.image); Z.unbindTexture();
      }; this.initTexture = function (a) { V.setTexture2D(a, 0); Z.unbindTexture(); }; typeof __THREE_DEVTOOLS__ !== 'undefined' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
    } function Qe(a, b) { this.name = ''; this.color = new y(a); this.density = void 0 !== b ? b : 2.5E-4; } function Re(a, b, c) {
      this.name = ''; this.color = new y(a); this.near = void 0 !== b ? b : 1;
      this.far = void 0 !== c ? c : 1E3;
    } function sb(a, b) { this.array = a; this.stride = b; this.count = void 0 !== a ? a.length / b : 0; this.usage = 35044; this.updateRange = { offset: 0, count: -1 }; this.version = 0; } function Pd(a, b, c, d) { this.data = a; this.itemSize = b; this.offset = c; this.normalized = !0 === d; } function Jb(a) { L.call(this); this.type = 'SpriteMaterial'; this.color = new y(16777215); this.alphaMap = this.map = null; this.rotation = 0; this.transparent = this.sizeAttenuation = !0; this.setValues(a); } function Qd(a) {
      D.call(this); this.type = 'Sprite'; if (void 0
=== Mc) { Mc = new G(); let b = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]); b = new sb(b, 5); Mc.setIndex([0, 1, 2, 0, 2, 3]); Mc.setAttribute('position', new Pd(b, 3, 0, !1)); Mc.setAttribute('uv', new Pd(b, 2, 3, !1)); } this.geometry = Mc; this.material = void 0 !== a ? a : new Jb(); this.center = new x(0.5, 0.5);
    } function Se(a, b, c, d, e, f) { Nc.subVectors(a, c).addScalar(0.5).multiply(d); void 0 !== e ? (Rd.x = f * Nc.x - e * Nc.y, Rd.y = e * Nc.x + f * Nc.y) : Rd.copy(Nc); a.copy(b); a.x += Rd.x; a.y += Rd.y; a.applyMatrix4(Yh); } function Sd() {
      D.call(this);
      this.type = 'LOD'; Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }); this.autoUpdate = !0;
    } function Td(a, b) { a && a.isGeometry && console.error('THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'); ca.call(this, a, b); this.type = 'SkinnedMesh'; this.bindMode = 'attached'; this.bindMatrix = new P(); this.bindMatrixInverse = new P(); } function Te(a, b) {
      a = a || []; this.bones = a.slice(0); this.boneMatrices = new Float32Array(16 * this.bones.length); this.frame = -1; if (void 0 === b) this.calculateInverses();
      else if (this.bones.length === b.length) this.boneInverses = b.slice(0); else for (console.warn('THREE.Skeleton boneInverses is the wrong length.'), this.boneInverses = [], a = 0, b = this.bones.length; a < b; a++) this.boneInverses.push(new P());
    } function qg() { D.call(this); this.type = 'Bone'; } function Ue(a, b, c) { ca.call(this, a, b); this.instanceMatrix = new K(new Float32Array(16 * c), 16); this.count = c; } function ja(a) {
      L.call(this); this.type = 'LineBasicMaterial'; this.color = new y(16777215); this.linewidth = 1; this.linejoin = this.linecap = 'round';
      this.setValues(a);
    } function Ja(a, b, c) { c === 1 && console.error('THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.'); D.call(this); this.type = 'Line'; this.geometry = void 0 !== a ? a : new G(); this.material = void 0 !== b ? b : new ja({ color: 16777215 * Math.random() }); } function la(a, b) { Ja.call(this, a, b); this.type = 'LineSegments'; } function Ve(a, b) { Ja.call(this, a, b); this.type = 'LineLoop'; } function Va(a) {
      L.call(this); this.type = 'PointsMaterial'; this.color = new y(16777215); this.alphaMap = this.map = null; this.size = 1; this.sizeAttenuation = !0; this.morphTargets = !1; this.setValues(a);
    } function Oc(a, b) { D.call(this); this.type = 'Points'; this.geometry = void 0 !== a ? a : new G(); this.material = void 0 !== b ? b : new Va({ color: 16777215 * Math.random() }); this.updateMorphTargets(); } function rg(a, b, c, d, e, f, g) {
      const k = sg.distanceSqToPoint(a); k < c && (c = new n(), sg.closestPointToPoint(a, c), c.applyMatrix4(d), a = e.ray.origin.distanceTo(c), a < e.near || a > e.far || f.push({
        distance: a, distanceToRay: Math.sqrt(k), point: c, index: b, face: null, object: g,
      }));
    }
    function tg(a, b, c, d, e, f, g, k, l) { T.call(this, a, b, c, d, e, f, g, k, l); this.format = void 0 !== g ? g : 1022; this.minFilter = void 0 !== f ? f : 1006; this.magFilter = void 0 !== e ? e : 1006; this.generateMipmaps = !1; } function Pc(a, b, c, d, e, f, g, k, l, m, h, p) { T.call(this, null, f, g, k, l, m, d, e, h, p); this.image = { width: b, height: c }; this.mipmaps = a; this.generateMipmaps = this.flipY = !1; } function Ud(a, b, c, d, e, f, g, k, l) { T.call(this, a, b, c, d, e, f, g, k, l); this.needsUpdate = !0; } function Vd(a, b, c, d, e, f, g, k, l, m) {
      m = void 0 !== m ? m : 1026; if (m !== 1026 && m !== 1027) throw Error('DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat');
      void 0 === c && m === 1026 && (c = 1012); void 0 === c && m === 1027 && (c = 1020); T.call(this, null, d, e, f, g, k, m, c, l); this.image = { width: a, height: b }; this.magFilter = void 0 !== g ? g : 1003; this.minFilter = void 0 !== k ? k : 1003; this.generateMipmaps = this.flipY = !1;
    } function Qc(a) {
      G.call(this); this.type = 'WireframeGeometry'; const b = []; let c; let d; let e; const f = [0, 0]; let g = {}; let k = ['a', 'b', 'c']; if (a && a.isGeometry) {
        var l = a.faces; var m = 0; for (d = l.length; m < d; m++) {
          var h = l[m]; for (c = 0; c < 3; c++) {
            var p = h[k[c]]; var q = h[k[(c + 1) % 3]]; f[0] = Math.min(p, q); f[1] = Math.max(p, q); p = `${f[0]
            },${f[1]}`; void 0 === g[p] && (g[p] = { index1: f[0], index2: f[1] });
          }
        } for (p in g)m = g[p], k = a.vertices[m.index1], b.push(k.x, k.y, k.z), k = a.vertices[m.index2], b.push(k.x, k.y, k.z);
      } else if (a && a.isBufferGeometry) {
        if (k = new n(), a.index !== null) {
          l = a.attributes.position; h = a.index; let t = a.groups; t.length === 0 && (t = [{ start: 0, count: h.count, materialIndex: 0 }]); a = 0; for (e = t.length; a < e; ++a) {
            for (m = t[a], c = m.start, d = m.count, m = c, d = c + d; m < d; m += 3) {
              for (c = 0; c < 3; c++) {
                p = h.getX(m + c), q = h.getX(m + (c + 1) % 3), f[0] = Math.min(p, q), f[1] = Math.max(p, q), p = `${f[0]},${
                  f[1]}`, void 0 === g[p] && (g[p] = { index1: f[0], index2: f[1] });
              }
            }
          } for (p in g)m = g[p], k.fromBufferAttribute(l, m.index1), b.push(k.x, k.y, k.z), k.fromBufferAttribute(l, m.index2), b.push(k.x, k.y, k.z);
        } else for (l = a.attributes.position, m = 0, d = l.count / 3; m < d; m++) for (c = 0; c < 3; c++)g = 3 * m + c, k.fromBufferAttribute(l, g), b.push(k.x, k.y, k.z), g = 3 * m + (c + 1) % 3, k.fromBufferAttribute(l, g), b.push(k.x, k.y, k.z);
      } this.setAttribute('position', new C(b, 3));
    } function Wd(a, b, c) {
      M.call(this); this.type = 'ParametricGeometry'; this.parameters = {
        func: a,
        slices: b,
        stacks: c,
      }; this.fromBufferGeometry(new Rc(a, b, c)); this.mergeVertices();
    } function Rc(a, b, c) {
      G.call(this); this.type = 'ParametricBufferGeometry'; this.parameters = { func: a, slices: b, stacks: c }; const d = []; const e = []; const f = []; const g = []; let k = new n(); let l = new n(); const m = new n(); const h = new n(); const p = new n(); let q; let t; a.length < 3 && console.error('THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.'); const r = b + 1; for (q = 0; q <= c; q++) {
        const u = q / c; for (t = 0; t <= b; t++) {
          const z = t / b; a(z, u, l); e.push(l.x, l.y, l.z); z - 1E-5 >= 0 ? (a(z - 1E-5, u, m), h.subVectors(l, m)) : (a(z
+ 1E-5, u, m), h.subVectors(m, l)); u - 1E-5 >= 0 ? (a(z, u - 1E-5, m), p.subVectors(l, m)) : (a(z, u + 1E-5, m), p.subVectors(m, l)); k.crossVectors(h, p).normalize(); f.push(k.x, k.y, k.z); g.push(z, u);
        }
      } for (q = 0; q < c; q++) for (t = 0; t < b; t++)a = q * r + t + 1, k = (q + 1) * r + t + 1, l = (q + 1) * r + t, d.push(q * r + t, a, l), d.push(a, k, l); this.setIndex(d); this.setAttribute('position', new C(e, 3)); this.setAttribute('normal', new C(f, 3)); this.setAttribute('uv', new C(g, 2));
    } function Xd(a, b, c, d) {
      M.call(this); this.type = 'PolyhedronGeometry'; this.parameters = {
        vertices: a,
        indices: b,
        radius: c,
        detail: d,
      }; this.fromBufferGeometry(new Ga(a, b, c, d)); this.mergeVertices();
    } function Ga(a, b, c, d) {
      function e(a) { k.push(a.x, a.y, a.z); } function f(b, c) { b *= 3; c.x = a[b + 0]; c.y = a[b + 1]; c.z = a[b + 2]; } function g(a, b, c, d) { d < 0 && a.x === 1 && (l[b] = a.x - 1); c.x === 0 && c.z === 0 && (l[b] = d / 2 / Math.PI + 0.5); }G.call(this); this.type = 'PolyhedronBufferGeometry'; this.parameters = {
        vertices: a, indices: b, radius: c, detail: d,
      }; c = c || 1; d = d || 0; var k = []; var l = []; (function (a) {
        for (let c = new n(), d = new n(), g = new n(), k = 0; k < b.length; k += 3) {
          f(b[k + 0], c); f(b[k + 1], d);
          f(b[k + 2], g); var l; var m; let h = c; const w = d; const B = g; const U = 2 ** a; const x = []; for (m = 0; m <= U; m++) { x[m] = []; const A = h.clone().lerp(B, m / U); const aa = w.clone().lerp(B, m / U); const y = U - m; for (l = 0; l <= y; l++)x[m][l] = l === 0 && m === U ? A : A.clone().lerp(aa, l / y); } for (m = 0; m < U; m++) for (l = 0; l < 2 * (U - m) - 1; l++)h = Math.floor(l / 2), l % 2 === 0 ? (e(x[m][h + 1]), e(x[m + 1][h]), e(x[m][h])) : (e(x[m][h + 1]), e(x[m + 1][h + 1]), e(x[m + 1][h]));
        }
      }(d)); (function (a) { for (let b = new n(), c = 0; c < k.length; c += 3)b.x = k[c + 0], b.y = k[c + 1], b.z = k[c + 2], b.normalize().multiplyScalar(a), k[c + 0] = b.x, k[c + 1] = b.y, k[c + 2] = b.z; }(c));
      (function () {
        for (var a = new n(), b = 0; b < k.length; b += 3)a.x = k[b + 0], a.y = k[b + 1], a.z = k[b + 2], l.push(Math.atan2(a.z, -a.x) / 2 / Math.PI + 0.5, 1 - (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + 0.5)); a = new n(); b = new n(); for (var c = new n(), d = new n(), e = new x(), f = new x(), h = new x(), z = 0, w = 0; z < k.length; z += 9, w += 6) {
          a.set(k[z + 0], k[z + 1], k[z + 2]); b.set(k[z + 3], k[z + 4], k[z + 5]); c.set(k[z + 6], k[z + 7], k[z + 8]); e.set(l[w + 0], l[w + 1]); f.set(l[w + 2], l[w + 3]); h.set(l[w + 4], l[w + 5]); d.copy(a).add(b).add(c).divideScalar(3); const B = Math.atan2(d.z, -d.x); g(e, w + 0, a, B);
          g(f, w + 2, b, B); g(h, w + 4, c, B);
        } for (a = 0; a < l.length; a += 6)b = l[a + 0], c = l[a + 2], d = l[a + 4], e = Math.min(b, c, d), Math.max(b, c, d) > 0.9 && e < 0.1 && (b < 0.2 && (l[a + 0] += 1), c < 0.2 && (l[a + 2] += 1), d < 0.2 && (l[a + 4] += 1));
      }()); this.setAttribute('position', new C(k, 3)); this.setAttribute('normal', new C(k.slice(), 3)); this.setAttribute('uv', new C(l, 2)); d === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    } function Yd(a, b) { M.call(this); this.type = 'TetrahedronGeometry'; this.parameters = { radius: a, detail: b }; this.fromBufferGeometry(new Sc(a, b)); this.mergeVertices(); }
    function Sc(a, b) { Ga.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b); this.type = 'TetrahedronBufferGeometry'; this.parameters = { radius: a, detail: b }; } function Zd(a, b) { M.call(this); this.type = 'OctahedronGeometry'; this.parameters = { radius: a, detail: b }; this.fromBufferGeometry(new ec(a, b)); this.mergeVertices(); } function ec(a, b) {
      Ga.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b); this.type = 'OctahedronBufferGeometry'; this.parameters = { radius: a, detail: b };
    } function $d(a, b) { M.call(this); this.type = 'IcosahedronGeometry'; this.parameters = { radius: a, detail: b }; this.fromBufferGeometry(new Tc(a, b)); this.mergeVertices(); } function Tc(a, b) {
      const c = (1 + Math.sqrt(5)) / 2; Ga.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b); this.type = 'IcosahedronBufferGeometry'; this.parameters = { radius: a, detail: b };
    } function ae(a, b) { M.call(this); this.type = 'DodecahedronGeometry'; this.parameters = { radius: a, detail: b }; this.fromBufferGeometry(new Uc(a, b)); this.mergeVertices(); } function Uc(a, b) {
      const c = (1 + Math.sqrt(5)) / 2; const d = 1 / c; Ga.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2,
        6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b); this.type = 'DodecahedronBufferGeometry'; this.parameters = { radius: a, detail: b };
    } function be(a, b, c, d, e, f) {
      M.call(this); this.type = 'TubeGeometry'; this.parameters = {
        path: a, tubularSegments: b, radius: c, radialSegments: d, closed: e,
      }; void 0 !== f && console.warn('THREE.TubeGeometry: taper has been removed.'); a = new fc(a, b, c, d, e); this.tangents = a.tangents; this.normals = a.normals; this.binormals = a.binormals; this.fromBufferGeometry(a); this.mergeVertices();
    } function fc(a, b, c, d, e) {
      function f(e) { h = a.getPointAt(e / b, h); const f = g.normals[e]; e = g.binormals[e]; for (q = 0; q <= d; q++) { let m = q / d * Math.PI * 2; const p = Math.sin(m); m = -Math.cos(m); l.x = m * f.x + p * e.x; l.y = m * f.y + p * e.y; l.z = m * f.z + p * e.z; l.normalize(); r.push(l.x, l.y, l.z); k.x = h.x + c * l.x; k.y = h.y + c * l.y; k.z = h.z + c * l.z; t.push(k.x, k.y, k.z); } }G.call(this); this.type = 'TubeBufferGeometry'; this.parameters = {
        path: a,
        tubularSegments: b,
        radius: c,
        radialSegments: d,
        closed: e,
      }; b = b || 64; c = c || 1; d = d || 8; e = e || !1; var g = a.computeFrenetFrames(b, e); this.tangents = g.tangents; this.normals = g.normals; this.binormals = g.binormals; var k = new n(); var l = new n(); const m = new x(); var h = new n(); let p; let q; var t = []; var r = []; const u = []; const
        z = []; for (p = 0; p < b; p++)f(p); f(!1 === e ? b : 0); for (p = 0; p <= b; p++) for (q = 0; q <= d; q++)m.x = p / b, m.y = q / d, u.push(m.x, m.y); (function () { for (q = 1; q <= b; q++) for (p = 1; p <= d; p++) { const a = (d + 1) * q + (p - 1); const c = (d + 1) * q + p; const e = (d + 1) * (q - 1) + p; z.push((d + 1) * (q - 1) + (p - 1), a, e); z.push(a, c, e); } }()); this.setIndex(z); this.setAttribute('position', new C(
        t,
        3,
      )); this.setAttribute('normal', new C(r, 3)); this.setAttribute('uv', new C(u, 2));
    } function ce(a, b, c, d, e, f, g) {
      M.call(this); this.type = 'TorusKnotGeometry'; this.parameters = {
        radius: a, tube: b, tubularSegments: c, radialSegments: d, p: e, q: f,
      }; void 0 !== g && console.warn('THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.'); this.fromBufferGeometry(new Vc(a, b, c, d, e, f)); this.mergeVertices();
    } function Vc(a, b, c, d, e, f) {
      function g(a, b, c, d, e) {
        const f = Math.sin(a); b = c / b * a; c = Math.cos(b); e.x = d
* (2 + c) * 0.5 * Math.cos(a); e.y = d * (2 + c) * f * 0.5; e.z = d * Math.sin(b) * 0.5;
      }G.call(this); this.type = 'TorusKnotBufferGeometry'; this.parameters = {
        radius: a, tube: b, tubularSegments: c, radialSegments: d, p: e, q: f,
      }; a = a || 1; b = b || 0.4; c = Math.floor(c) || 64; d = Math.floor(d) || 8; e = e || 2; f = f || 3; const k = []; const l = []; const m = []; const h = []; let p; const q = new n(); const t = new n(); const r = new n(); const u = new n(); const z = new n(); const w = new n(); const B = new n(); for (p = 0; p <= c; ++p) {
        var x = p / c * e * Math.PI * 2; g(x, e, f, a, r); g(x + 0.01, e, f, a, u); w.subVectors(u, r); B.addVectors(u, r); z.crossVectors(w, B); B.crossVectors(z, w); z.normalize(); B.normalize();
        for (x = 0; x <= d; ++x) { let y = x / d * Math.PI * 2; const A = -b * Math.cos(y); y = b * Math.sin(y); q.x = r.x + (A * B.x + y * z.x); q.y = r.y + (A * B.y + y * z.y); q.z = r.z + (A * B.z + y * z.z); l.push(q.x, q.y, q.z); t.subVectors(q, r).normalize(); m.push(t.x, t.y, t.z); h.push(p / c); h.push(x / d); }
      } for (x = 1; x <= c; x++) for (p = 1; p <= d; p++)a = (d + 1) * x + (p - 1), b = (d + 1) * x + p, e = (d + 1) * (x - 1) + p, k.push((d + 1) * (x - 1) + (p - 1), a, e), k.push(a, b, e); this.setIndex(k); this.setAttribute('position', new C(l, 3)); this.setAttribute('normal', new C(m, 3)); this.setAttribute('uv', new C(h, 2));
    } function de(
      a,
      b,
      c,
      d,
      e,
    ) {
      M.call(this); this.type = 'TorusGeometry'; this.parameters = {
        radius: a, tube: b, radialSegments: c, tubularSegments: d, arc: e,
      }; this.fromBufferGeometry(new Wc(a, b, c, d, e)); this.mergeVertices();
    } function Wc(a, b, c, d, e) {
      G.call(this); this.type = 'TorusBufferGeometry'; this.parameters = {
        radius: a, tube: b, radialSegments: c, tubularSegments: d, arc: e,
      }; a = a || 1; b = b || 0.4; c = Math.floor(c) || 8; d = Math.floor(d) || 6; e = e || 2 * Math.PI; const f = []; const g = []; const k = []; const l = []; const m = new n(); const h = new n(); const p = new n(); let q; let t; for (q = 0; q <= c; q++) {
        for (t = 0; t <= d; t++) {
          const r = t / d * e; const u = q / c
* Math.PI * 2; h.x = (a + b * Math.cos(u)) * Math.cos(r); h.y = (a + b * Math.cos(u)) * Math.sin(r); h.z = b * Math.sin(u); g.push(h.x, h.y, h.z); m.x = a * Math.cos(r); m.y = a * Math.sin(r); p.subVectors(h, m).normalize(); k.push(p.x, p.y, p.z); l.push(t / d); l.push(q / c);
        }
      } for (q = 1; q <= c; q++) for (t = 1; t <= d; t++)a = (d + 1) * (q - 1) + t - 1, b = (d + 1) * (q - 1) + t, e = (d + 1) * q + t, f.push((d + 1) * q + t - 1, a, e), f.push(a, b, e); this.setIndex(f); this.setAttribute('position', new C(g, 3)); this.setAttribute('normal', new C(k, 3)); this.setAttribute('uv', new C(l, 2));
    } function Zh(a, b, c, d, e) {
      for (var f,
        g = 0, k = b, l = c - d; k < c; k += d)g += (a[l] - a[k]) * (a[k + 1] + a[l + 1]), l = k; if (e === g > 0) for (e = b; e < c; e += d)f = $h(e, a[e], a[e + 1], f); else for (e = c - d; e >= b; e -= d)f = $h(e, a[e], a[e + 1], f); f && gc(f, f.next) && (ee(f), f = f.next); return f;
    } function fe(a, b) { if (!a) return a; b || (b = a); do { var c = !1; if (a.steiner || !gc(a, a.next) && ta(a.prev, a, a.next) !== 0)a = a.next; else { ee(a); a = b = a.prev; if (a === a.next) break; c = !0; } } while (c || a !== b); return b; } function ge(a, b, c, d, e, f, g) {
      if (a) {
        if (!g && f) {
          var k = a; var l = k; do {
            l.z === null && (l.z = ug(l.x, l.y, d, e, f)), l.prevZ = l.prev, l = l.nextZ = l.next;
          } while (l !== k); l.prevZ.nextZ = null; l.prevZ = null; k = l; var m; var h; var p; let q; var t = 1; do { l = k; var r = k = null; for (h = 0; l;) { h++; var n = l; for (m = p = 0; m < t && (p++, n = n.nextZ, n); m++);for (q = t; p > 0 || q > 0 && n;)p !== 0 && (q === 0 || !n || l.z <= n.z) ? (m = l, l = l.nextZ, p--) : (m = n, n = n.nextZ, q--), r ? r.nextZ = m : k = m, m.prevZ = r, r = m; l = n; }r.nextZ = null; t *= 2; } while (h > 1);
        } for (k = a; a.prev !== a.next;) {
          l = a.prev; n = a.next; if (f)r = Hk(a, d, e, f); else {
            a:if (r = a, h = r.prev, p = r, t = r.next, ta(h, p, t) >= 0)r = !1; else {
              for (m = r.next.next; m !== r.prev;) {
                if (Xc(h.x, h.y, p.x, p.y, t.x, t.y, m.x, m.y) && ta(m.prev, m, m.next)
>= 0) { r = !1; break a; }m = m.next;
              }r = !0;
            }
          } if (r)b.push(l.i / c), b.push(a.i / c), b.push(n.i / c), ee(a), k = a = n.next; else if (a = n, a === k) {
            if (!g)ge(fe(a), b, c, d, e, f, 1); else if (g === 1) { g = b; k = c; l = a; do n = l.prev, r = l.next.next, !gc(n, r) && ai(n, l, l.next, r) && he(n, r) && he(r, n) && (g.push(n.i / k), g.push(l.i / k), g.push(r.i / k), ee(l), ee(l.next), l = a = r), l = l.next; while (l !== a); a = l; ge(a, b, c, d, e, f, 2); } else if (g === 2) {
              a: {
                g = a; do {
                  for (k = g.next.next; k !== g.prev;) {
                    if (l = g.i !== k.i) {
                      l = g; n = k; if (r = l.next.i !== n.i && l.prev.i !== n.i) {
                        b: {
                          r = l; do {
                            if (r.i
!== l.i && r.next.i !== l.i && r.i !== n.i && r.next.i !== n.i && ai(r, r.next, l, n)) { r = !0; break b; }r = r.next;
                          } while (r !== l); r = !1;
                        }r = !r;
                      } if (r = r && he(l, n) && he(n, l)) { r = l; h = !1; p = (l.x + n.x) / 2; n = (l.y + n.y) / 2; do r.y > n !== r.next.y > n && r.next.y !== r.y && p < (r.next.x - r.x) * (n - r.y) / (r.next.y - r.y) + r.x && (h = !h), r = r.next; while (r !== l); r = h; }l = r;
                    } if (l) { a = bi(g, k); g = fe(g, g.next); a = fe(a, a.next); ge(g, b, c, d, e, f); ge(a, b, c, d, e, f); break a; }k = k.next;
                  }g = g.next;
                } while (g !== a);
              }
            } break;
          }
        }
      }
    } function Hk(a, b, c, d) {
      const e = a.prev; const f = a.next; if (ta(e, a, f) >= 0) return !1; const g = e.x > a.x
        ? e.x > f.x ? e.x : f.x : a.x > f.x ? a.x : f.x; const k = e.y > a.y ? e.y > f.y ? e.y : f.y : a.y > f.y ? a.y : f.y; const l = ug(e.x < a.x ? e.x < f.x ? e.x : f.x : a.x < f.x ? a.x : f.x, e.y < a.y ? e.y < f.y ? e.y : f.y : a.y < f.y ? a.y : f.y, b, c, d); b = ug(g, k, b, c, d); c = a.prevZ; for (d = a.nextZ; c && c.z >= l && d && d.z <= b;) { if (c !== a.prev && c !== a.next && Xc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && ta(c.prev, c, c.next) >= 0) return !1; c = c.prevZ; if (d !== a.prev && d !== a.next && Xc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && ta(d.prev, d, d.next) >= 0) return !1; d = d.nextZ; } for (;c && c.z >= l;) {
        if (c !== a.prev && c !== a.next && Xc(
          e.x,
          e.y,
          a.x,
          a.y,
          f.x,
          f.y,
          c.x,
          c.y,
        ) && ta(c.prev, c, c.next) >= 0) return !1; c = c.prevZ;
      } for (;d && d.z <= b;) { if (d !== a.prev && d !== a.next && Xc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && ta(d.prev, d, d.next) >= 0) return !1; d = d.nextZ; } return !0;
    } function Ik(a, b) { return a.x - b.x; } function Jk(a, b) {
      let c = b; const d = a.x; const e = a.y; let f = -Infinity; do { if (e <= c.y && e >= c.next.y && c.next.y !== c.y) { var g = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y); if (g <= d && g > f) { f = g; if (g === d) { if (e === c.y) return c; if (e === c.next.y) return c.next; } var k = c.x < c.next.x ? c : c.next; } }c = c.next; } while (c !== b); if (!k) return null;
      if (d === f) return k.prev; b = k; g = k.x; const l = k.y; let m = Infinity; for (c = k.next; c !== b;) { if (d >= c.x && c.x >= g && d !== c.x && Xc(e < l ? d : f, e, g, l, e < l ? f : d, e, c.x, c.y)) { const h = Math.abs(e - c.y) / (d - c.x); (h < m || h === m && c.x > k.x) && he(c, a) && (k = c, m = h); }c = c.next; } return k;
    } function ug(a, b, c, d, e) { a = 32767 * (a - c) * e; b = 32767 * (b - d) * e; a = (a | a << 8) & 16711935; a = (a | a << 4) & 252645135; a = (a | a << 2) & 858993459; b = (b | b << 8) & 16711935; b = (b | b << 4) & 252645135; b = (b | b << 2) & 858993459; return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1; } function Kk(a) {
      let b = a; let c = a; do {
        if (b.x < c.x
|| b.x === c.x && b.y < c.y)c = b; b = b.next;
      } while (b !== a); return c;
    } function Xc(a, b, c, d, e, f, g, k) { return (e - g) * (b - k) - (a - g) * (f - k) >= 0 && (a - g) * (d - k) - (c - g) * (b - k) >= 0 && (c - g) * (f - k) - (e - g) * (d - k) >= 0; } function ta(a, b, c) { return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y); } function gc(a, b) { return a.x === b.x && a.y === b.y; } function ai(a, b, c, d) { return gc(a, c) && gc(b, d) || gc(a, d) && gc(c, b) ? !0 : ta(a, b, c) > 0 !== ta(a, b, d) > 0 && ta(c, d, a) > 0 !== ta(c, d, b) > 0; } function he(a, b) {
      return ta(a.prev, a, a.next) < 0 ? ta(a, b, a.next) >= 0 && ta(a, a.prev, b) >= 0 : ta(a, b, a.prev) < 0
|| ta(a, a.next, b) < 0;
    } function bi(a, b) { const c = new vg(a.i, a.x, a.y); const d = new vg(b.i, b.x, b.y); const e = a.next; const f = b.prev; a.next = b; b.prev = a; c.next = e; e.prev = c; d.next = c; c.prev = d; f.next = d; d.prev = f; return d; } function $h(a, b, c, d) { a = new vg(a, b, c); d ? (a.next = d.next, a.prev = d, d.next.prev = a, d.next = a) : (a.prev = a, a.next = a); return a; } function ee(a) { a.next.prev = a.prev; a.prev.next = a.next; a.prevZ && (a.prevZ.nextZ = a.nextZ); a.nextZ && (a.nextZ.prevZ = a.prevZ); } function vg(a, b, c) {
      this.i = a; this.x = b; this.y = c; this.nextZ = this.prevZ = this.z = this.next = this.prev = null; this.steiner = !1;
    } function ci(a) { const b = a.length; b > 2 && a[b - 1].equals(a[0]) && a.pop(); } function di(a, b) { for (let c = 0; c < b.length; c++)a.push(b[c].x), a.push(b[c].y); } function hc(a, b) { M.call(this); this.type = 'ExtrudeGeometry'; this.parameters = { shapes: a, options: b }; this.fromBufferGeometry(new gb(a, b)); this.mergeVertices(); } function gb(a, b) {
      function c(a) {
        function c(a, b, c) { b || console.error('THREE.ExtrudeGeometry: vec does not exist'); return b.clone().multiplyScalar(c).add(a); } function g(a, b, c) {
          let d = a.x
- b.x; let e = a.y - b.y; let f = c.x - a.x; let g = c.y - a.y; let k = d * d + e * e; if (Math.abs(d * g - e * f) > Number.EPSILON) { const l = Math.sqrt(k); const m = Math.sqrt(f * f + g * g); k = b.x - e / l; b = b.y + d / l; g = ((c.x - g / m - k) * g - (c.y + f / m - b) * f) / (d * g - e * f); f = k + d * g - a.x; d = b + e * g - a.y; e = f * f + d * d; if (e <= 2) return new x(f, d); e = Math.sqrt(e / 2); } else a = !1, d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0), a ? (f = -e, e = Math.sqrt(k)) : (f = d, d = e, e = Math.sqrt(k / 2)); return new x(f / e, d / e);
        } function k(a, b) {
          for (J = a.length; --J
>= 0;) { const c = J; let f = J - 1; f < 0 && (f = a.length - 1); var g; const k = B + 2 * C; for (g = 0; g < k; g++) { let l = X * g; let m = X * (g + 1); const h = b + f + l; const p = b + f + m; m = b + c + m; r(b + c + l); r(h); r(m); r(h); r(p); r(m); l = e.length / 3; l = F.generateSideWallUV(d, e, l - 6, l - 3, l - 2, l - 1); u(l[0]); u(l[1]); u(l[3]); u(l[1]); u(l[2]); u(l[3]); } }
        } function l(a, b, c) { z.push(a); z.push(b); z.push(c); } function h(a, b, c) { r(a); r(b); r(c); a = e.length / 3; a = F.generateTopUV(d, e, a - 3, a - 2, a - 1); u(a[0]); u(a[1]); u(a[2]); } function r(a) { e.push(z[3 * a]); e.push(z[3 * a + 1]); e.push(z[3 * a + 2]); } function u(a) {
          f.push(a.x);
          f.push(a.y);
        } var z = []; let w = void 0 !== b.curveSegments ? b.curveSegments : 12; var B = void 0 !== b.steps ? b.steps : 1; let U = void 0 !== b.depth ? b.depth : 100; let y = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0; let A = void 0 !== b.bevelThickness ? b.bevelThickness : 6; let aa = void 0 !== b.bevelSize ? b.bevelSize : A - 2; let G = void 0 !== b.bevelOffset ? b.bevelOffset : 0; var C = void 0 !== b.bevelSegments ? b.bevelSegments : 3; let D = b.extrudePath; var F = void 0 !== b.UVGenerator ? b.UVGenerator : Lk; void 0 !== b.amount && (console.warn('THREE.ExtrudeBufferGeometry: amount has been renamed to depth.'),
        U = b.amount); let E = !1; if (D) { var I = D.getSpacedPoints(B); E = !0; y = !1; var K = D.computeFrenetFrames(B, !1); var L = new n(); var M = new n(); var O = new n(); }y || (G = aa = A = C = 0); let N; w = a.extractPoints(w); a = w.shape; const P = w.holes; if (!tb.isClockWise(a)) { a = a.reverse(); var da = 0; for (N = P.length; da < N; da++) { var ha = P[da]; tb.isClockWise(ha) && (P[da] = ha.reverse()); } } const Y = tb.triangulateShape(a, P); const W = a; da = 0; for (N = P.length; da < N; da++)ha = P[da], a = a.concat(ha); let Q; var X = a.length; let T; const ca = Y.length; w = []; var J = 0; let R = W.length; let V = R - 1; for (Q = J + 1; J < R; J++,
        V++, Q++)V === R && (V = 0), Q === R && (Q = 0), w[J] = g(W[J], W[V], W[Q]); D = []; let ea = w.concat(); da = 0; for (N = P.length; da < N; da++) { ha = P[da]; var ba = []; J = 0; R = ha.length; V = R - 1; for (Q = J + 1; J < R; J++, V++, Q++)V === R && (V = 0), Q === R && (Q = 0), ba[J] = g(ha[J], ha[V], ha[Q]); D.push(ba); ea = ea.concat(ba); } for (V = 0; V < C; V++) {
          R = V / C; var fa = A * Math.cos(R * Math.PI / 2); Q = aa * Math.sin(R * Math.PI / 2) + G; J = 0; for (R = W.length; J < R; J++) { var S = c(W[J], w[J], Q); l(S.x, S.y, -fa); }da = 0; for (N = P.length; da < N; da++) {
            for (ha = P[da], ba = D[da], J = 0, R = ha.length; J < R; J++) {
              S = c(ha[J], ba[J], Q),
              l(S.x, S.y, -fa);
            }
          }
        }Q = aa + G; for (J = 0; J < X; J++)S = y ? c(a[J], ea[J], Q) : a[J], E ? (M.copy(K.normals[0]).multiplyScalar(S.x), L.copy(K.binormals[0]).multiplyScalar(S.y), O.copy(I[0]).add(M).add(L), l(O.x, O.y, O.z)) : l(S.x, S.y, 0); for (R = 1; R <= B; R++) for (J = 0; J < X; J++)S = y ? c(a[J], ea[J], Q) : a[J], E ? (M.copy(K.normals[R]).multiplyScalar(S.x), L.copy(K.binormals[R]).multiplyScalar(S.y), O.copy(I[R]).add(M).add(L), l(O.x, O.y, O.z)) : l(S.x, S.y, U / B * R); for (V = C - 1; V >= 0; V--) {
          R = V / C; fa = A * Math.cos(R * Math.PI / 2); Q = aa * Math.sin(R * Math.PI / 2) + G; J = 0; for (R = W.length; J < R; J++)S = c(W[J], w[J], Q), l(S.x, S.y, U + fa); da = 0; for (N = P.length; da < N; da++) for (ha = P[da], ba = D[da], J = 0, R = ha.length; J < R; J++)S = c(ha[J], ba[J], Q), E ? l(S.x, S.y + I[B - 1].y, I[B - 1].x + fa) : l(S.x, S.y, U + fa);
        }(function () { const a = e.length / 3; if (y) { let b = 0 * X; for (J = 0; J < ca; J++)T = Y[J], h(T[2] + b, T[1] + b, T[0] + b); b = X * (B + 2 * C); for (J = 0; J < ca; J++)T = Y[J], h(T[0] + b, T[1] + b, T[2] + b); } else { for (J = 0; J < ca; J++)T = Y[J], h(T[2], T[1], T[0]); for (J = 0; J < ca; J++)T = Y[J], h(T[0] + X * B, T[1] + X * B, T[2] + X * B); }d.addGroup(a, e.length / 3 - a, 0); }()); (function () {
          const a = e.length
/ 3; let b = 0; k(W, b); b += W.length; da = 0; for (N = P.length; da < N; da++)ha = P[da], k(ha, b), b += ha.length; d.addGroup(a, e.length / 3 - a, 1);
        }());
      }G.call(this); this.type = 'ExtrudeBufferGeometry'; this.parameters = { shapes: a, options: b }; a = Array.isArray(a) ? a : [a]; for (var d = this, e = [], f = [], g = 0, k = a.length; g < k; g++)c(a[g]); this.setAttribute('position', new C(e, 3)); this.setAttribute('uv', new C(f, 2)); this.computeVertexNormals();
    } function ei(a, b, c) {
      c.shapes = []; if (Array.isArray(a)) for (let d = 0, e = a.length; d < e; d++)c.shapes.push(a[d].uuid); else c.shapes.push(a.uuid);
      void 0 !== b.extrudePath && (c.options.extrudePath = b.extrudePath.toJSON()); return c;
    } function ie(a, b) { M.call(this); this.type = 'TextGeometry'; this.parameters = { text: a, parameters: b }; this.fromBufferGeometry(new Yc(a, b)); this.mergeVertices(); } function Yc(a, b) {
      b = b || {}; const c = b.font; if (!c || !c.isFont) return console.error('THREE.TextGeometry: font parameter is not an instance of THREE.Font.'), new M(); a = c.generateShapes(a, b.size); b.depth = void 0 !== b.height ? b.height : 50; void 0 === b.bevelThickness && (b.bevelThickness = 10);
      void 0 === b.bevelSize && (b.bevelSize = 8); void 0 === b.bevelEnabled && (b.bevelEnabled = !1); gb.call(this, a, b); this.type = 'TextBufferGeometry';
    } function je(a, b, c, d, e, f, g) {
      M.call(this); this.type = 'SphereGeometry'; this.parameters = {
        radius: a, widthSegments: b, heightSegments: c, phiStart: d, phiLength: e, thetaStart: f, thetaLength: g,
      }; this.fromBufferGeometry(new ic(a, b, c, d, e, f, g)); this.mergeVertices();
    } function ic(a, b, c, d, e, f, g) {
      G.call(this); this.type = 'SphereBufferGeometry'; this.parameters = {
        radius: a,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: f,
        thetaLength: g,
      }; a = a || 1; b = Math.max(3, Math.floor(b) || 8); c = Math.max(2, Math.floor(c) || 6); d = void 0 !== d ? d : 0; e = void 0 !== e ? e : 2 * Math.PI; f = void 0 !== f ? f : 0; g = void 0 !== g ? g : Math.PI; const k = Math.min(f + g, Math.PI); let l; let m; let h = 0; const p = []; const q = new n(); const t = new n(); const r = []; const u = []; const z = []; const w = []; for (m = 0; m <= c; m++) {
        const B = []; const x = m / c; let y = 0; m == 0 && f == 0 ? y = 0.5 / b : m == c && k == Math.PI && (y = -0.5 / b); for (l = 0; l <= b; l++) {
          const A = l / b; q.x = -a * Math.cos(d + A * e) * Math.sin(f + x * g); q.y = a * Math.cos(f + x * g); q.z = a * Math.sin(d + A * e) * Math.sin(f + x * g); u.push(
            q.x,
            q.y,
            q.z,
          ); t.copy(q).normalize(); z.push(t.x, t.y, t.z); w.push(A + y, 1 - x); B.push(h++);
        }p.push(B);
      } for (m = 0; m < c; m++) for (l = 0; l < b; l++)a = p[m][l + 1], d = p[m][l], e = p[m + 1][l], g = p[m + 1][l + 1], (m !== 0 || f > 0) && r.push(a, d, g), (m !== c - 1 || k < Math.PI) && r.push(d, e, g); this.setIndex(r); this.setAttribute('position', new C(u, 3)); this.setAttribute('normal', new C(z, 3)); this.setAttribute('uv', new C(w, 2));
    } function ke(a, b, c, d, e, f) {
      M.call(this); this.type = 'RingGeometry'; this.parameters = {
        innerRadius: a,
        outerRadius: b,
        thetaSegments: c,
        phiSegments: d,
        thetaStart: e,
        thetaLength: f,
      }; this.fromBufferGeometry(new Zc(a, b, c, d, e, f)); this.mergeVertices();
    } function Zc(a, b, c, d, e, f) {
      G.call(this); this.type = 'RingBufferGeometry'; this.parameters = {
        innerRadius: a, outerRadius: b, thetaSegments: c, phiSegments: d, thetaStart: e, thetaLength: f,
      }; a = a || 0.5; b = b || 1; e = void 0 !== e ? e : 0; f = void 0 !== f ? f : 2 * Math.PI; c = void 0 !== c ? Math.max(3, c) : 8; d = void 0 !== d ? Math.max(1, d) : 1; const g = []; const k = []; const l = []; const m = []; let h = a; const p = (b - a) / d; const q = new n(); const t = new x(); let r; let u; for (r = 0; r <= d; r++) {
        for (u = 0; u <= c; u++) {
          a = e + u / c * f, q.x = h * Math.cos(a), q.y = h * Math.sin(a),
          k.push(q.x, q.y, q.z), l.push(0, 0, 1), t.x = (q.x / b + 1) / 2, t.y = (q.y / b + 1) / 2, m.push(t.x, t.y);
        }h += p;
      } for (r = 0; r < d; r++) for (b = r * (c + 1), u = 0; u < c; u++)a = u + b, e = a + c + 1, f = a + c + 2, h = a + 1, g.push(a, e, h), g.push(e, f, h); this.setIndex(g); this.setAttribute('position', new C(k, 3)); this.setAttribute('normal', new C(l, 3)); this.setAttribute('uv', new C(m, 2));
    } function le(a, b, c, d) {
      M.call(this); this.type = 'LatheGeometry'; this.parameters = {
        points: a, segments: b, phiStart: c, phiLength: d,
      }; this.fromBufferGeometry(new $c(a, b, c, d)); this.mergeVertices();
    } function $c(
      a,
      b,
      c,
      d,
    ) {
      G.call(this); this.type = 'LatheBufferGeometry'; this.parameters = {
        points: a, segments: b, phiStart: c, phiLength: d,
      }; b = Math.floor(b) || 12; c = c || 0; d = d || 2 * Math.PI; d = O.clamp(d, 0, 2 * Math.PI); let e = []; let f = []; let g = []; let k = 1 / b; let l = new n(); let m = new x(); let h; for (h = 0; h <= b; h++) { var p = c + h * k * d; const q = Math.sin(p); const t = Math.cos(p); for (p = 0; p <= a.length - 1; p++)l.x = a[p].x * q, l.y = a[p].y, l.z = a[p].x * t, f.push(l.x, l.y, l.z), m.x = h / b, m.y = p / (a.length - 1), g.push(m.x, m.y); } for (h = 0; h < b; h++) {
        for (p = 0; p < a.length - 1; p++) {
          c = p + h * a.length, k = c + a.length, l = c + a.length + 1, m = c
+ 1, e.push(c, k, m), e.push(k, l, m);
        }
      } this.setIndex(e); this.setAttribute('position', new C(f, 3)); this.setAttribute('uv', new C(g, 2)); this.computeVertexNormals(); if (d === 2 * Math.PI) for (d = this.attributes.normal.array, e = new n(), f = new n(), g = new n(), c = b * a.length * 3, p = h = 0; h < a.length; h++, p += 3)e.x = d[p + 0], e.y = d[p + 1], e.z = d[p + 2], f.x = d[c + p + 0], f.y = d[c + p + 1], f.z = d[c + p + 2], g.addVectors(e, f).normalize(), d[p + 0] = d[c + p + 0] = g.x, d[p + 1] = d[c + p + 1] = g.y, d[p + 2] = d[c + p + 2] = g.z;
    } function jc(a, b) {
      M.call(this); this.type = 'ShapeGeometry'; typeof b === 'object'
&& (console.warn('THREE.ShapeGeometry: Options parameter has been removed.'), b = b.curveSegments); this.parameters = { shapes: a, curveSegments: b }; this.fromBufferGeometry(new kc(a, b)); this.mergeVertices();
    } function kc(a, b) {
      function c(a) {
        let c; const k = e.length / 3; a = a.extractPoints(b); let m = a.shape; const h = a.holes; !1 === tb.isClockWise(m) && (m = m.reverse()); a = 0; for (c = h.length; a < c; a++) { var v = h[a]; !0 === tb.isClockWise(v) && (h[a] = v.reverse()); } const n = tb.triangulateShape(m, h); a = 0; for (c = h.length; a < c; a++)v = h[a], m = m.concat(v); a = 0; for (c = m.length; a
< c; a++)v = m[a], e.push(v.x, v.y, 0), f.push(0, 0, 1), g.push(v.x, v.y); a = 0; for (c = n.length; a < c; a++)m = n[a], d.push(m[0] + k, m[1] + k, m[2] + k), l += 3;
      }G.call(this); this.type = 'ShapeBufferGeometry'; this.parameters = { shapes: a, curveSegments: b }; b = b || 12; var d = []; var e = []; var f = []; var g = []; let k = 0; var l = 0; if (!1 === Array.isArray(a))c(a); else for (let m = 0; m < a.length; m++)c(a[m]), this.addGroup(k, l, m), k += l, l = 0; this.setIndex(d); this.setAttribute('position', new C(e, 3)); this.setAttribute('normal', new C(f, 3)); this.setAttribute('uv', new C(g, 2));
    } function fi(
      a,
      b,
    ) { b.shapes = []; if (Array.isArray(a)) for (let c = 0, d = a.length; c < d; c++)b.shapes.push(a[c].uuid); else b.shapes.push(a.uuid); return b; } function ad(a, b) {
      G.call(this); this.type = 'EdgesGeometry'; this.parameters = { thresholdAngle: b }; const c = []; b = Math.cos(O.DEG2RAD * (void 0 !== b ? b : 1)); let d = [0, 0]; const e = {}; let f = ['a', 'b', 'c']; if (a.isBufferGeometry) { var g = new M(); g.fromBufferGeometry(a); } else g = a.clone(); g.mergeVertices(); g.computeFaceNormals(); a = g.vertices; g = g.faces; for (let k = 0, l = g.length; k < l; k++) {
        for (let m = g[k], h = 0; h < 3; h++) {
          var p = m[f[h]]; const q = m[f[(h + 1) % 3]]; d[0] = Math.min(p, q); d[1] = Math.max(p, q); p = `${d[0]},${d[1]}`; void 0 === e[p] ? e[p] = {
            index1: d[0], index2: d[1], face1: k, face2: void 0,
          } : e[p].face2 = k;
        }
      } for (p in e) if (d = e[p], void 0 === d.face2 || g[d.face1].normal.dot(g[d.face2].normal) <= b)f = a[d.index1], c.push(f.x, f.y, f.z), f = a[d.index2], c.push(f.x, f.y, f.z); this.setAttribute('position', new C(c, 3));
    } function lc(a, b, c, d, e, f, g, k) {
      M.call(this); this.type = 'CylinderGeometry'; this.parameters = {
        radiusTop: a,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: f,
        thetaStart: g,
        thetaLength: k,
      }; this.fromBufferGeometry(new ub(a, b, c, d, e, f, g, k)); this.mergeVertices();
    } function ub(a, b, c, d, e, f, g, k) {
      function l(c) {
        let e; let f = new x(); let l = new n(); let v = 0; const u = !0 === c ? a : b; const B = !0 === c ? 1 : -1; const y = r; for (e = 1; e <= d; e++)p.push(0, z * B, 0), q.push(0, B, 0), t.push(0.5, 0.5), r++; const F = r; for (e = 0; e <= d; e++) { let C = e / d * k + g; const G = Math.cos(C); C = Math.sin(C); l.x = u * C; l.y = z * B; l.z = u * G; p.push(l.x, l.y, l.z); q.push(0, B, 0); f.x = 0.5 * G + 0.5; f.y = 0.5 * C * B + 0.5; t.push(f.x, f.y); r++; } for (e = 0; e < d; e++) {
          f = y + e, l = F + e, !0 === c ? h.push(l, l + 1, f)
            : h.push(l + 1, l, f), v += 3;
        }m.addGroup(w, v, !0 === c ? 1 : 2); w += v;
      }G.call(this); this.type = 'CylinderBufferGeometry'; this.parameters = {
        radiusTop: a, radiusBottom: b, height: c, radialSegments: d, heightSegments: e, openEnded: f, thetaStart: g, thetaLength: k,
      }; var m = this; a = void 0 !== a ? a : 1; b = void 0 !== b ? b : 1; c = c || 1; d = Math.floor(d) || 8; e = Math.floor(e) || 1; f = void 0 !== f ? f : !1; g = void 0 !== g ? g : 0; k = void 0 !== k ? k : 2 * Math.PI; var h = []; var p = []; var q = []; var t = []; var r = 0; const u = []; var z = c / 2; var w = 0; (function () {
        let f; let l; let v = new n(); let A = new n(); let x = 0; let y = (b - a) / c; for (l = 0; l <= e; l++) {
          const C = []; const G = l
/ e; const F = G * (b - a) + a; for (f = 0; f <= d; f++) { const D = f / d; let E = D * k + g; const I = Math.sin(E); E = Math.cos(E); A.x = F * I; A.y = -G * c + z; A.z = F * E; p.push(A.x, A.y, A.z); v.set(I, y, E).normalize(); q.push(v.x, v.y, v.z); t.push(D, 1 - G); C.push(r++); }u.push(C);
        } for (f = 0; f < d; f++) for (l = 0; l < e; l++)v = u[l + 1][f], A = u[l + 1][f + 1], y = u[l][f + 1], h.push(u[l][f], v, y), h.push(v, A, y), x += 6; m.addGroup(w, x, 0); w += x;
      }()); !1 === f && (a > 0 && l(!0), b > 0 && l(!1)); this.setIndex(h); this.setAttribute('position', new C(p, 3)); this.setAttribute('normal', new C(q, 3)); this.setAttribute('uv', new C(
        t,
        2,
      ));
    } function me(a, b, c, d, e, f, g) {
      lc.call(this, 0, a, b, c, d, e, f, g); this.type = 'ConeGeometry'; this.parameters = {
        radius: a, height: b, radialSegments: c, heightSegments: d, openEnded: e, thetaStart: f, thetaLength: g,
      };
    } function ne(a, b, c, d, e, f, g) {
      ub.call(this, 0, a, b, c, d, e, f, g); this.type = 'ConeBufferGeometry'; this.parameters = {
        radius: a, height: b, radialSegments: c, heightSegments: d, openEnded: e, thetaStart: f, thetaLength: g,
      };
    } function oe(a, b, c, d) {
      M.call(this); this.type = 'CircleGeometry'; this.parameters = {
        radius: a,
        segments: b,
        thetaStart: c,
        thetaLength: d,
      }; this.fromBufferGeometry(new bd(a, b, c, d)); this.mergeVertices();
    } function bd(a, b, c, d) {
      G.call(this); this.type = 'CircleBufferGeometry'; this.parameters = {
        radius: a, segments: b, thetaStart: c, thetaLength: d,
      }; a = a || 1; b = void 0 !== b ? Math.max(3, b) : 8; c = void 0 !== c ? c : 0; d = void 0 !== d ? d : 2 * Math.PI; const e = []; const f = []; const g = []; const k = []; let l; const m = new n(); const h = new x(); f.push(0, 0, 0); g.push(0, 0, 1); k.push(0.5, 0.5); let p = 0; for (l = 3; p <= b; p++, l += 3) {
        const q = c + p / b * d; m.x = a * Math.cos(q); m.y = a * Math.sin(q); f.push(m.x, m.y, m.z); g.push(0, 0, 1); h.x = (f[l] / a + 1)
/ 2; h.y = (f[l + 1] / a + 1) / 2; k.push(h.x, h.y);
      } for (l = 1; l <= b; l++)e.push(l, l + 1, 0); this.setIndex(e); this.setAttribute('position', new C(f, 3)); this.setAttribute('normal', new C(g, 3)); this.setAttribute('uv', new C(k, 2));
    } function mc(a) { L.call(this); this.type = 'ShadowMaterial'; this.color = new y(0); this.transparent = !0; this.setValues(a); } function vb(a) { oa.call(this, a); this.type = 'RawShaderMaterial'; } function hb(a) {
      L.call(this); this.defines = { STANDARD: '' }; this.type = 'MeshStandardMaterial'; this.color = new y(16777215); this.roughness = 1; this.metalness = 0; this.lightMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.emissive = new y(0); this.emissiveIntensity = 1; this.bumpMap = this.emissiveMap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new x(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null; this.envMapIntensity = 1; this.refractionRatio = 0.98; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
    } function nc(a) { hb.call(this); this.defines = { STANDARD: '', PHYSICAL: '' }; this.type = 'MeshPhysicalMaterial'; this.reflectivity = 0.5; this.clearcoatRoughness = this.clearcoat = 0; this.sheen = null; this.clearcoatNormalScale = new x(1, 1); this.clearcoatNormalMap = null; this.transparency = 0; this.setValues(a); } function Kb(a) {
      L.call(this); this.type = 'MeshPhongMaterial'; this.color = new y(16777215); this.specular = new y(1118481); this.shininess = 30; this.lightMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.emissive = new y(0); this.emissiveIntensity = 1; this.bumpMap = this.emissiveMap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new x(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.envMap = this.alphaMap = this.specularMap = null; this.combine = 0; this.reflectivity = 1; this.refractionRatio = 0.98; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
    } function oc(a) {
      L.call(this); this.defines = { TOON: '' }; this.type = 'MeshToonMaterial'; this.color = new y(16777215); this.specular = new y(1118481); this.shininess = 30; this.lightMap = this.gradientMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.emissive = new y(0); this.emissiveIntensity = 1; this.bumpMap = this.emissiveMap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new x(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.alphaMap = this.specularMap = null; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
    } function pc(a) {
      L.call(this); this.type = 'MeshNormalMaterial'; this.bumpMap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new x(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.wireframe = !1; this.wireframeLinewidth = 1; this.morphNormals = this.morphTargets = this.skinning = this.fog = !1; this.setValues(a);
    } function qc(a) {
      L.call(this); this.type = 'MeshLambertMaterial'; this.color = new y(16777215); this.lightMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.emissive = new y(0); this.emissiveIntensity = 1; this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null; this.combine = 0; this.reflectivity = 1; this.refractionRatio = 0.98; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
    } function rc(a) {
      L.call(this); this.defines = { MATCAP: '' }; this.type = 'MeshMatcapMaterial'; this.color = new y(16777215); this.bumpMap = this.map = this.matcap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new x(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.alphaMap = null; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
    } function sc(a) { ja.call(this); this.type = 'LineDashedMaterial'; this.scale = 1; this.dashSize = 3; this.gapSize = 1; this.setValues(a); } function Ka(a, b, c, d) { this.parameterPositions = a; this._cachedIndex = 0; this.resultBuffer = void 0 !== d ? d : new b.constructor(c); this.sampleValues = b; this.valueSize = c; } function We(a, b, c, d) { Ka.call(this, a, b, c, d); this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0; } function pe(
      a,
      b,
      c,
      d,
    ) { Ka.call(this, a, b, c, d); } function Xe(a, b, c, d) { Ka.call(this, a, b, c, d); } function ra(a, b, c, d) { if (void 0 === a) throw Error('THREE.KeyframeTrack: track name is undefined'); if (void 0 === b || b.length === 0) throw Error(`THREE.KeyframeTrack: no keyframes in track named ${a}`); this.name = a; this.times = ea.convertArray(b, this.TimeBufferType); this.values = ea.convertArray(c, this.ValueBufferType); this.setInterpolation(d || this.DefaultInterpolation); } function Ye(a, b, c) { ra.call(this, a, b, c); } function Ze(a, b, c, d) {
      ra.call(
        this,
        a,
        b,
        c,
        d,
      );
    } function cd(a, b, c, d) { ra.call(this, a, b, c, d); } function $e(a, b, c, d) { Ka.call(this, a, b, c, d); } function qe(a, b, c, d) { ra.call(this, a, b, c, d); } function af(a, b, c, d) { ra.call(this, a, b, c, d); } function dd(a, b, c, d) { ra.call(this, a, b, c, d); } function Qa(a, b, c) { this.name = a; this.tracks = c; this.duration = void 0 !== b ? b : -1; this.uuid = O.generateUUID(); this.duration < 0 && this.resetDuration(); } function Mk(a) {
      switch (a.toLowerCase()) {
        case 'scalar': case 'double': case 'float': case 'number': case 'integer': return cd; case 'vector': case 'vector2': case 'vector3': case 'vector4': return dd;
        case 'color': return Ze; case 'quaternion': return qe; case 'bool': case 'boolean': return Ye; case 'string': return af;
      } throw Error(`THREE.KeyframeTrack: Unsupported typeName: ${a}`);
    } function Nk(a) { if (void 0 === a.type) throw Error('THREE.KeyframeTrack: track type undefined, can not parse'); const b = Mk(a.type); if (void 0 === a.times) { const c = []; const d = []; ea.flattenJSON(a.keys, c, d, 'value'); a.times = c; a.values = d; } return void 0 !== b.parse ? b.parse(a) : new b(a.name, a.times, a.values, a.interpolation); } function wg(a, b, c) {
      const d = this; let e = !1; let f = 0; let g = 0; let k = void 0; const l = []; this.onStart = void 0; this.onLoad = a; this.onProgress = b; this.onError = c; this.itemStart = function (a) { g++; if (!1 === e && void 0 !== d.onStart)d.onStart(a, f, g); e = !0; }; this.itemEnd = function (a) { f++; if (void 0 !== d.onProgress)d.onProgress(a, f, g); if (f === g && (e = !1, void 0 !== d.onLoad))d.onLoad(); }; this.itemError = function (a) { if (void 0 !== d.onError)d.onError(a); }; this.resolveURL = function (a) { return k ? k(a) : a; }; this.setURLModifier = function (a) { k = a; return this; }; this.addHandler = function (a, b) { l.push(a, b); return this; };
      this.removeHandler = function (a) { a = l.indexOf(a); a !== -1 && l.splice(a, 2); return this; }; this.getHandler = function (a) { for (let b = 0, c = l.length; b < c; b += 2) { const d = l[b]; const e = l[b + 1]; d.global && (d.lastIndex = 0); if (d.test(a)) return e; } return null; };
    } function Q(a) { this.manager = void 0 !== a ? a : gi; this.crossOrigin = 'anonymous'; this.resourcePath = this.path = ''; } function Ra(a) { Q.call(this, a); } function xg(a) { Q.call(this, a); } function yg(a) { Q.call(this, a); } function bf(a) { Q.call(this, a); } function ed(a) { Q.call(this, a); } function cf(a) {
      Q.call(
        this,
        a,
      );
    } function df(a) { Q.call(this, a); } function I() { this.type = 'Curve'; this.arcLengthDivisions = 200; } function La(a, b, c, d, e, f, g, k) { I.call(this); this.type = 'EllipseCurve'; this.aX = a || 0; this.aY = b || 0; this.xRadius = c || 1; this.yRadius = d || 1; this.aStartAngle = e || 0; this.aEndAngle = f || 2 * Math.PI; this.aClockwise = g || !1; this.aRotation = k || 0; } function fd(a, b, c, d, e, f) { La.call(this, a, b, c, c, d, e, f); this.type = 'ArcCurve'; } function zg() {
      let a = 0; let b = 0; let c = 0; let d = 0; return {
        initCatmullRom(e, f, g, k, l) {
          e = l * (g - e); k = l * (k - f); a = f; b = e; c = -3 * f + 3 * g
- 2 * e - k; d = 2 * f - 2 * g + e + k;
        },
        initNonuniformCatmullRom(e, f, g, k, l, m, h) { e = ((f - e) / l - (g - e) / (l + m) + (g - f) / m) * m; k = ((g - f) / m - (k - f) / (m + h) + (k - g) / h) * m; a = f; b = e; c = -3 * f + 3 * g - 2 * e - k; d = 2 * f - 2 * g + e + k; },
        calc(e) { const f = e * e; return a + b * e + c * f + d * f * e; },
      };
    } function Aa(a, b, c, d) { I.call(this); this.type = 'CatmullRomCurve3'; this.points = a || []; this.closed = b || !1; this.curveType = c || 'centripetal'; this.tension = d || 0.5; } function hi(a, b, c, d, e) { b = 0.5 * (d - b); e = 0.5 * (e - c); const f = a * a; return (2 * c - 2 * d + b + e) * a * f + (-3 * c + 3 * d - 2 * b - e) * f + b * a + c; } function re(
      a,
      b,
      c,
      d,
    ) { const e = 1 - a; return e * e * b + 2 * (1 - a) * a * c + a * a * d; } function se(a, b, c, d, e) { const f = 1 - a; const g = 1 - a; return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e; } function Wa(a, b, c, d) { I.call(this); this.type = 'CubicBezierCurve'; this.v0 = a || new x(); this.v1 = b || new x(); this.v2 = c || new x(); this.v3 = d || new x(); } function ib(a, b, c, d) { I.call(this); this.type = 'CubicBezierCurve3'; this.v0 = a || new n(); this.v1 = b || new n(); this.v2 = c || new n(); this.v3 = d || new n(); } function Ea(a, b) { I.call(this); this.type = 'LineCurve'; this.v1 = a || new x(); this.v2 = b || new x(); } function Xa(a, b) {
      I.call(this);
      this.type = 'LineCurve3'; this.v1 = a || new n(); this.v2 = b || new n();
    } function Ya(a, b, c) { I.call(this); this.type = 'QuadraticBezierCurve'; this.v0 = a || new x(); this.v1 = b || new x(); this.v2 = c || new x(); } function jb(a, b, c) { I.call(this); this.type = 'QuadraticBezierCurve3'; this.v0 = a || new n(); this.v1 = b || new n(); this.v2 = c || new n(); } function Za(a) { I.call(this); this.type = 'SplineCurve'; this.points = a || []; } function wb() { I.call(this); this.type = 'CurvePath'; this.curves = []; this.autoClose = !1; } function $a(a) {
      wb.call(this); this.type = 'Path'; this.currentPoint = new x(); a && this.setFromPoints(a);
    } function Lb(a) { $a.call(this, a); this.uuid = O.generateUUID(); this.type = 'Shape'; this.holes = []; } function ba(a, b) { D.call(this); this.type = 'Light'; this.color = new y(a); this.intensity = void 0 !== b ? b : 1; this.receiveShadow = void 0; } function ef(a, b, c) { ba.call(this, a, c); this.type = 'HemisphereLight'; this.castShadow = void 0; this.position.copy(D.DefaultUp); this.updateMatrix(); this.groundColor = new y(b); } function kb(a) {
      this.camera = a; this.bias = 0; this.radius = 1; this.mapSize = new x(512, 512); this.mapPass = this.map = null; this.matrix = new P(); this._frustum = new Hd(); this._frameExtents = new x(1, 1); this._viewportCount = 1; this._viewports = [new S(0, 0, 1, 1)];
    } function ff() { kb.call(this, new pa(50, 1, 0.5, 500)); } function gf(a, b, c, d, e, f) {
      ba.call(this, a, b); this.type = 'SpotLight'; this.position.copy(D.DefaultUp); this.updateMatrix(); this.target = new D(); Object.defineProperty(this, 'power', { get() { return this.intensity * Math.PI; }, set(a) { this.intensity = a / Math.PI; } }); this.distance = void 0 !== c ? c : 0; this.angle = void 0 !== d ? d : Math.PI
/ 3; this.penumbra = void 0 !== e ? e : 0; this.decay = void 0 !== f ? f : 1; this.shadow = new ff();
    } function Ag() { kb.call(this, new pa(90, 1, 0.5, 500)); this._frameExtents = new x(4, 2); this._viewportCount = 6; this._viewports = [new S(2, 1, 1, 1), new S(0, 1, 1, 1), new S(3, 1, 1, 1), new S(1, 1, 1, 1), new S(3, 0, 1, 1), new S(1, 0, 1, 1)]; this._cubeDirections = [new n(1, 0, 0), new n(-1, 0, 0), new n(0, 0, 1), new n(0, 0, -1), new n(0, 1, 0), new n(0, -1, 0)]; this._cubeUps = [new n(0, 1, 0), new n(0, 1, 0), new n(0, 1, 0), new n(0, 1, 0), new n(0, 0, 1), new n(0, 0, -1)]; } function hf(
      a,
      b,
      c,
      d,
    ) { ba.call(this, a, b); this.type = 'PointLight'; Object.defineProperty(this, 'power', { get() { return 4 * this.intensity * Math.PI; }, set(a) { this.intensity = a / (4 * Math.PI); } }); this.distance = void 0 !== c ? c : 0; this.decay = void 0 !== d ? d : 1; this.shadow = new Ag(); } function gd(a, b, c, d, e, f) {
      db.call(this); this.type = 'OrthographicCamera'; this.zoom = 1; this.view = null; this.left = void 0 !== a ? a : -1; this.right = void 0 !== b ? b : 1; this.top = void 0 !== c ? c : 1; this.bottom = void 0 !== d ? d : -1; this.near = void 0 !== e ? e : 0.1; this.far = void 0 !== f ? f : 2E3;
      this.updateProjectionMatrix();
    } function jf() { kb.call(this, new gd(-5, 5, 5, -5, 0.5, 500)); } function kf(a, b) { ba.call(this, a, b); this.type = 'DirectionalLight'; this.position.copy(D.DefaultUp); this.updateMatrix(); this.target = new D(); this.shadow = new jf(); } function lf(a, b) { ba.call(this, a, b); this.type = 'AmbientLight'; this.castShadow = void 0; } function mf(a, b, c, d) { ba.call(this, a, b); this.type = 'RectAreaLight'; this.width = void 0 !== c ? c : 10; this.height = void 0 !== d ? d : 10; } function nf(a) { Q.call(this, a); this.textures = {}; } function of() {
      G.call(this);
      this.type = 'InstancedBufferGeometry'; this.maxInstancedCount = void 0;
    } function pf(a, b, c, d) { typeof c === 'number' && (d = c, c = !1, console.error('THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.')); K.call(this, a, b, c); this.meshPerAttribute = d || 1; } function qf(a) { Q.call(this, a); } function rf(a) { Q.call(this, a); } function Bg(a) {
      typeof createImageBitmap === 'undefined' && console.warn('THREE.ImageBitmapLoader: createImageBitmap() not supported.'); typeof fetch === 'undefined' && console.warn('THREE.ImageBitmapLoader: fetch() not supported.');
      Q.call(this, a); this.options = void 0;
    } function Cg() { this.type = 'ShapePath'; this.color = new y(); this.subPaths = []; this.currentPath = null; } function Dg(a) { this.type = 'Font'; this.data = a; } function Eg(a) { Q.call(this, a); } function sf(a) { Q.call(this, a); } function tf() { this.coefficients = []; for (let a = 0; a < 9; a++) this.coefficients.push(new n()); } function ab(a, b) { ba.call(this, void 0, b); this.sh = void 0 !== a ? a : new tf(); } function Fg(a, b, c) {
      ab.call(this, void 0, c); a = (new y()).set(a); c = (new y()).set(b); b = new n(a.r, a.g, a.b); a = new n(c.r, c.g, c.b);
      c = Math.sqrt(Math.PI); const d = c * Math.sqrt(0.75); this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c); this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d);
    } function Gg(a, b) { ab.call(this, void 0, b); a = (new y()).set(a); this.sh.coefficients[0].set(a.r, a.g, a.b).multiplyScalar(2 * Math.sqrt(Math.PI)); } function ii() {
      this.type = 'StereoCamera'; this.aspect = 1; this.eyeSep = 0.064; this.cameraL = new pa(); this.cameraL.layers.enable(1); this.cameraL.matrixAutoUpdate = !1; this.cameraR = new pa(); this.cameraR.layers.enable(2); this.cameraR.matrixAutoUpdate = !1; this._cache = {
        focus: null, fov: null, aspect: null, near: null, far: null, zoom: null, eyeSep: null,
      };
    } function Hg(a) { this.autoStart = void 0 !== a ? a : !0; this.elapsedTime = this.oldTime = this.startTime = 0; this.running = !1; } function Ig() { D.call(this); this.type = 'AudioListener'; this.context = Jg.getContext(); this.gain = this.context.createGain(); this.gain.connect(this.context.destination); this.filter = null; this.timeDelta = 0; this._clock = new Hg(); } function hd(a) {
      D.call(this); this.type = 'Audio'; this.listener = a; this.context = a.context; this.gain = this.context.createGain(); this.gain.connect(a.getInput()); this.autoplay = !1; this.buffer = null; this.detune = 0; this.loop = !1; this.offset = this.loopEnd = this.loopStart = 0; this.duration = void 0; this.playbackRate = 1; this.isPlaying = !1; this.hasPlaybackControl = !0; this.sourceType = 'empty'; this._pausedAt = this._startedAt = 0; this.filters = [];
    } function Kg(a) { hd.call(this, a); this.panner = this.context.createPanner(); this.panner.panningModel = 'HRTF'; this.panner.connect(this.gain); } function Lg(a, b) {
      this.analyser = a.context.createAnalyser();
      this.analyser.fftSize = void 0 !== b ? b : 2048; this.data = new Uint8Array(this.analyser.frequencyBinCount); a.getOutput().connect(this.analyser);
    } function Mg(a, b, c) { this.binding = a; this.valueSize = c; a = Float64Array; switch (b) { case 'quaternion': b = this._slerp; break; case 'string': case 'bool': a = Array; b = this._select; break; default: b = this._lerp; } this.buffer = new a(4 * c); this._mixBufferRegion = b; this.referenceCount = this.useCount = this.cumulativeWeight = 0; } function ji(a, b, c) {
      c = c || Ba.parseTrackName(b); this._targetGroup = a; this._bindings = a.subscribe_(b, c);
    } function Ba(a, b, c) { this.path = b; this.parsedPath = c || Ba.parseTrackName(b); this.node = Ba.findNode(a, this.parsedPath.nodeName) || a; this.rootNode = a; } function ki() {
      this.uuid = O.generateUUID(); this._objects = Array.prototype.slice.call(arguments); this.nCachedObjects_ = 0; const a = {}; this._indicesByUUID = a; for (let b = 0, c = arguments.length; b !== c; ++b)a[arguments[b].uuid] = b; this._paths = []; this._parsedPaths = []; this._bindings = []; this._bindingsIndicesByPath = {}; const d = this; this.stats = {
        objects: {
          get total() { return d._objects.length; },
          get inUse() { return this.total - d.nCachedObjects_; },
        },
        get bindingsPerObject() { return d._bindings.length; },
      };
    } function li(a, b, c) {
      this._mixer = a; this._clip = b; this._localRoot = c || null; a = b.tracks; b = a.length; c = Array(b); for (var d = { endingStart: 2400, endingEnd: 2400 }, e = 0; e !== b; ++e) { const f = a[e].createInterpolant(null); c[e] = f; f.settings = d; } this._interpolantSettings = d; this._interpolants = c; this._propertyBindings = Array(b); this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null; this.loop = 2201; this._loopCount = -1; this._startTime = null; this.time = 0; this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1; this.repetitions = Infinity; this.paused = !1; this.enabled = !0; this.clampWhenFinished = !1; this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0;
    } function Ng(a) { this._root = a; this._initMemoryManager(); this.time = this._accuIndex = 0; this.timeScale = 1; } function uf(a, b) { typeof a === 'string' && (console.warn('THREE.Uniform: Type parameter is no longer needed.'), a = b); this.value = a; } function Og(a, b, c) {
      sb.call(
        this,
        a,
        b,
      ); this.meshPerAttribute = c || 1;
    } function mi(a, b, c, d) {
      this.ray = new Wb(a, b); this.near = c || 0; this.far = d || Infinity; this.camera = null; this.params = {
        Mesh: {}, Line: {}, LOD: {}, Points: { threshold: 1 }, Sprite: {},
      }; Object.defineProperties(this.params, { PointCloud: { get() { console.warn('THREE.Raycaster: params.PointCloud has been renamed to params.Points.'); return this.Points; } } });
    } function ni(a, b) { return a.distance - b.distance; } function Pg(a, b, c, d) {
      if (!1 !== a.visible && (a.raycast(b, c), !0 === d)) {
        a = a.children; d = 0; for (let e = a.length; d < e; d++)Pg(a[d], b, c, !0);
      }
    } function oi(a, b, c) { this.radius = void 0 !== a ? a : 1; this.phi = void 0 !== b ? b : 0; this.theta = void 0 !== c ? c : 0; return this; } function pi(a, b, c) { this.radius = void 0 !== a ? a : 1; this.theta = void 0 !== b ? b : 0; this.y = void 0 !== c ? c : 0; return this; } function Qg(a, b) { this.min = void 0 !== a ? a : new x(Infinity, Infinity); this.max = void 0 !== b ? b : new x(-Infinity, -Infinity); } function Rg(a, b) { this.start = void 0 !== a ? a : new n(); this.end = void 0 !== b ? b : new n(); } function te(a) { D.call(this); this.material = a; this.render = function () {}; }
    function id(a, b) { D.call(this); this.light = a; this.light.updateMatrixWorld(); this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1; this.color = b; a = new G(); b = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1]; for (let c = 0, d = 1; c < 32; c++, d++) { const e = c / 32 * Math.PI * 2; const f = d / 32 * Math.PI * 2; b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1); }a.setAttribute('position', new C(b, 3)); b = new ja({ fog: !1 }); this.cone = new la(a, b); this.add(this.cone); this.update(); } function qi(a) {
      const b = []; a && a.isBone && b.push(a); for (let c = 0; c < a.children.length; c++)b.push.apply(b, qi(a.children[c])); return b;
    } function jd(a) {
      for (var b = qi(a), c = new G(), d = [], e = [], f = new y(0, 0, 1), g = new y(0, 1, 0), k = 0; k < b.length; k++) { const l = b[k]; l.parent && l.parent.isBone && (d.push(0, 0, 0), d.push(0, 0, 0), e.push(f.r, f.g, f.b), e.push(g.r, g.g, g.b)); }c.setAttribute('position', new C(d, 3)); c.setAttribute('color', new C(e, 3)); d = new ja({
        vertexColors: 2, depthTest: !1, depthWrite: !1, transparent: !0,
      }); la.call(this, c, d); this.root = a; this.bones = b; this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1;
    } function kd(a, b, c) { this.light = a; this.light.updateMatrixWorld(); this.color = c; a = new ic(b, 4, 2); b = new Oa({ wireframe: !0, fog: !1 }); ca.call(this, a, b); this.matrix = this.light.matrixWorld; this.matrixAutoUpdate = !1; this.update(); } function ld(a, b, c) {
      D.call(this); this.light = a; this.light.updateMatrixWorld(); this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1; this.color = c; a = new ec(b); a.rotateY(0.5 * Math.PI); this.material = new Oa({ wireframe: !0, fog: !1 }); void 0 === this.color && (this.material.vertexColors = 2); b = a.getAttribute('position');
      b = new Float32Array(3 * b.count); a.setAttribute('color', new K(b, 3)); this.add(new ca(a, this.material)); this.update();
    } function vf(a, b, c, d) {
      a = a || 10; b = b || 10; c = new y(void 0 !== c ? c : 4473924); d = new y(void 0 !== d ? d : 8947848); const e = b / 2; const f = a / b; const g = a / 2; a = []; for (var k = [], l = 0, m = 0, h = -g; l <= b; l++, h += f) { a.push(-g, 0, h, g, 0, h); a.push(h, 0, -g, h, 0, g); const p = l === e ? c : d; p.toArray(k, m); m += 3; p.toArray(k, m); m += 3; p.toArray(k, m); m += 3; p.toArray(k, m); m += 3; }b = new G(); b.setAttribute('position', new C(a, 3)); b.setAttribute('color', new C(k, 3)); c = new ja({ vertexColors: 2 });
      la.call(this, b, c);
    } function wf(a, b, c, d, e, f) {
      a = a || 10; b = b || 16; c = c || 8; d = d || 64; e = new y(void 0 !== e ? e : 4473924); f = new y(void 0 !== f ? f : 8947848); let g = []; const k = []; let l; for (l = 0; l <= b; l++) { var m = l / b * 2 * Math.PI; var h = Math.sin(m) * a; m = Math.cos(m) * a; g.push(0, 0, 0); g.push(h, 0, m); var p = l & 1 ? e : f; k.push(p.r, p.g, p.b); k.push(p.r, p.g, p.b); } for (l = 0; l <= c; l++) {
        p = l & 1 ? e : f; const q = a - a / c * l; for (b = 0; b < d; b++) {
          m = b / d * 2 * Math.PI, h = Math.sin(m) * q, m = Math.cos(m) * q, g.push(h, 0, m), k.push(p.r, p.g, p.b), m = (b + 1) / d * 2 * Math.PI, h = Math.sin(m) * q, m = Math.cos(m) * q, g.push(
            h,
            0,
            m,
          ), k.push(p.r, p.g, p.b);
        }
      }a = new G(); a.setAttribute('position', new C(g, 3)); a.setAttribute('color', new C(k, 3)); g = new ja({ vertexColors: 2 }); la.call(this, a, g);
    } function md(a, b, c) {
      D.call(this); this.light = a; this.light.updateMatrixWorld(); this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1; this.color = c; void 0 === b && (b = 1); a = new G(); a.setAttribute('position', new C([-b, b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0], 3)); b = new ja({ fog: !1 }); this.lightPlane = new Ja(a, b); this.add(this.lightPlane); a = new G(); a.setAttribute('position', new C([0,
        0, 0, 0, 0, 1], 3)); this.targetLine = new Ja(a, b); this.add(this.targetLine); this.update();
    } function ue(a) {
      function b(a, b, d) { c(a, d); c(b, d); } function c(a, b) { f.push(0, 0, 0); g.push(b.r, b.g, b.b); void 0 === k[a] && (k[a] = []); k[a].push(f.length / 3 - 1); } const d = new G(); const e = new ja({ color: 16777215, vertexColors: 1 }); var f = []; var g = []; var k = {}; const l = new y(16755200); const m = new y(16711680); const h = new y(43775); const p = new y(16777215); const
        q = new y(3355443); b('n1', 'n2', l); b('n2', 'n4', l); b('n4', 'n3', l); b('n3', 'n1', l); b('f1', 'f2', l); b('f2', 'f4', l); b('f4', 'f3', l); b(
        'f3',
        'f1',
        l,
      ); b('n1', 'f1', l); b('n2', 'f2', l); b('n3', 'f3', l); b('n4', 'f4', l); b('p', 'n1', m); b('p', 'n2', m); b('p', 'n3', m); b('p', 'n4', m); b('u1', 'u2', h); b('u2', 'u3', h); b('u3', 'u1', h); b('c', 't', p); b('p', 'c', q); b('cn1', 'cn2', q); b('cn3', 'cn4', q); b('cf1', 'cf2', q); b('cf3', 'cf4', q); d.setAttribute('position', new C(f, 3)); d.setAttribute('color', new C(g, 3)); la.call(this, d, e); this.camera = a; this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(); this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1; this.pointMap = k; this.update();
    } function ia(a, b, c, d, e, f, g) { xf.set(e, f, g).unproject(d); a = b[a]; if (void 0 !== a) for (c = c.getAttribute('position'), b = 0, d = a.length; b < d; b++)c.setXYZ(a[b], xf.x, xf.y, xf.z); } function xb(a, b) { this.object = a; void 0 === b && (b = 16776960); a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]); const c = new Float32Array(24); const d = new G(); d.setIndex(new K(a, 1)); d.setAttribute('position', new K(c, 3)); la.call(this, d, new ja({ color: b })); this.matrixAutoUpdate = !1; this.update(); } function ve(a, b) {
      this.type = 'Box3Helper';
      this.box = a; b = b || 16776960; a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]); const c = new G(); c.setIndex(new K(a, 1)); c.setAttribute('position', new C([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)); la.call(this, c, new ja({ color: b })); this.geometry.computeBoundingSphere();
    } function we(a, b, c) {
      this.type = 'PlaneHelper'; this.plane = a; this.size = void 0 === b ? 1 : b; a = void 0 !== c ? c : 16776960; b = new G(); b.setAttribute('position', new C([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1,
        0, 0, 1, 0, 0, 0], 3)); b.computeBoundingSphere(); Ja.call(this, b, new ja({ color: a })); b = new G(); b.setAttribute('position', new C([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)); b.computeBoundingSphere(); this.add(new ca(b, new Oa({
        color: a, opacity: 0.2, transparent: !0, depthWrite: !1,
      })));
    } function yb(a, b, c, d, e, f) {
      D.call(this); void 0 === a && (a = new n(0, 0, 1)); void 0 === b && (b = new n(0, 0, 0)); void 0 === c && (c = 1); void 0 === d && (d = 16776960); void 0 === e && (e = 0.2 * c); void 0 === f && (f = 0.2 * e); void 0 === yf && (yf = new G(), yf.setAttribute('position', new C([0,
        0, 0, 0, 1, 0], 3)), Sg = new ub(0, 0.5, 1, 5, 1), Sg.translate(0, -0.5, 0)); this.position.copy(b); this.line = new Ja(yf, new ja({ color: d })); this.line.matrixAutoUpdate = !1; this.add(this.line); this.cone = new ca(Sg, new Oa({ color: d })); this.cone.matrixAutoUpdate = !1; this.add(this.cone); this.setDirection(a); this.setLength(c, e, f);
    } function xe(a) {
      a = a || 1; let b = [0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a]; a = new G(); a.setAttribute('position', new C(b, 3)); a.setAttribute('color', new C([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3)); b = new ja({ vertexColors: 2 });
      la.call(this, a, b);
    } function Tg(a) { Y = a; Ug(zf); } function ri(a) {
      const b = {
        magFilter: 1003, minFilter: 1003, generateMipmaps: !1, type: a ? a.type : 1009, format: a ? a.format : 1023, encoding: a ? a.encoding : 3002, depthBuffer: !1, stencilBuffer: !1,
      }; const c = si(b); c.depthBuffer = a ? !1 : !0; Af = si(b); return c;
    } function ti() { Af.dispose(); Y.setRenderTarget(null); const a = Y.getSize(new x()); Y.setViewport(0, 0, a.x, a.y); } function Ug(a) { const b = new pb(); b.add(new ca(ye[0], a)); Y.compile(b, Vg); } function si(a) {
      a = new va(3 * lb, 3 * lb, a); a.texture.mapping = 306; a.texture.name = 'PMREM.cubeUv'; a.scissorTest = !0; return a;
    } function Wg(a, b, c, d) { const e = 1 / Y.getPixelRatio(); a *= e; b *= e; c *= e; d *= e; Y.setViewport(a, b, c, d); Y.setScissor(a, b, c, d); } function ui(a) { const b = Y.autoClear; Y.autoClear = !1; for (let c = 1; c < vi; c++)wi(a, c - 1, c, Math.sqrt(Bf[c] * Bf[c] - Bf[c - 1] * Bf[c - 1]), xi[(c - 1) % xi.length]); Y.autoClear = b; } function wi(a, b, c, d, e) { yi(a, Af, b, c, d, 'latitudinal', e); yi(Af, a, c, c, d, 'longitudinal', e); } function yi(a, b, c, d, e, f, g) {
      f !== 'latitudinal' && f !== 'longitudinal' && console.error('blur direction must be either latitudinal or longitudinal!');
      const k = new pb(); k.add(new ca(ye[d], zf)); const l = zf.uniforms; let m = zi[c] - 1; m = isFinite(e) ? Math.PI / (2 * m) : 2 * Math.PI / 39; const h = e / m; const p = isFinite(e) ? 1 + Math.floor(3 * h) : 20; p > 20 && console.warn(`sigmaRadians, ${e}, is too large and will clip, as it requested ${p} samples when the maximum is set to 20`); for (var q = [], n = 0, r = 0; r < 20; ++r)e = r / h, e = Math.exp(-e * e / 2), q.push(e), r == 0 ? n += e : r < p && (n += 2 * e); for (r = 0; r < q.length; r++)q[r] /= n; l.envMap.value = a.texture; l.samples.value = p; l.weights.value = q; l.latitudinal.value = f === 'latitudinal';
      g && (l.poleAxis.value = g); l.dTheta.value = m; l.mipInt.value = 8 - c; l.inputEncoding.value = mb[a.texture.encoding]; l.outputEncoding.value = mb[a.texture.encoding]; a = zi[d]; e = 3 * Math.max(0, lb - 2 * a); d = (d === 0 ? 0 : 2 * lb) + 2 * a * (d > 4 ? d - 8 + 4 : 0); Y.setRenderTarget(b); Wg(e, d, 3 * a, 2 * a); Y.render(k, Vg);
    } function Ai() {
      let a = new x(1, 1); a = new vb({
        uniforms: {
          envMap: { value: null }, texelSize: { value: a }, inputEncoding: { value: mb[3E3] }, outputEncoding: { value: mb[3E3] },
        },
        vertexShader: Xg(),
        fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n${
          Yg()}\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv;\n\tuv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n\tuv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1,
      }); a.type = 'EquirectangularToCubeUV'; return a;
    } function Bi() {
      const a = new vb({
        uniforms: { envMap: { value: null }, inputEncoding: { value: mb[3E3] }, outputEncoding: { value: mb[3E3] } },
        vertexShader: Xg(),
        fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n${Yg()}\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1,
      }); a.type = 'CubemapToCubeUV'; return a;
    } function Xg() { return '\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.x *= -1.0;\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.y *= -1.0;\n\t} else if (face == 5.0) {\n\t\tdirection.xz *= -1.0;\n\t}\n\treturn direction;\n}\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t'; }
    function Yg() { return '\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t'; }
    function Ci(a) { console.warn('THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.'); Aa.call(this, a); this.type = 'catmullrom'; this.closed = !0; } function Di(a) { console.warn('THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.'); Aa.call(this, a); this.type = 'catmullrom'; } function Zg(a) { console.warn('THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.'); Aa.call(this, a); this.type = 'catmullrom'; } void 0 === Number.EPSILON && (Number.EPSILON = 2 ** -52); void 0 === Number.isInteger && (Number.isInteger = function (a) { return typeof a === 'number' && isFinite(a) && Math.floor(a) === a; }); void 0 === Math.sign && (Math.sign = function (a) { return a < 0 ? -1 : a > 0 ? 1 : +a; }); !1 === 'name' in Function.prototype && Object.defineProperty(Function.prototype, 'name', { get() { return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]; } }); void 0 === Object.assign && (Object.assign = function (a) {
      if (void 0 === a || a === null) throw new TypeError('Cannot convert undefined or null to object'); for (var b = Object(a), c = 1; c < arguments.length; c++) { const d = arguments[c]; if (void 0 !== d && d !== null) for (const e in d)Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e]); } return b;
    }); Object.assign(Fa.prototype, {
      addEventListener(a, b) { void 0 === this._listeners && (this._listeners = {}); const c = this._listeners; void 0 === c[a] && (c[a] = []); c[a].indexOf(b) === -1 && c[a].push(b); },
      hasEventListener(a, b) { if (void 0 === this._listeners) return !1; const c = this._listeners; return void 0 !== c[a] && c[a].indexOf(b) !== -1; },
      removeEventListener(
        a,
        b,
      ) { void 0 !== this._listeners && (a = this._listeners[a], void 0 !== a && (b = a.indexOf(b), b !== -1 && a.splice(b, 1))); },
      dispatchEvent(a) { if (void 0 !== this._listeners) { let b = this._listeners[a.type]; if (void 0 !== b) { a.target = this; b = b.slice(0); for (let c = 0, d = b.length; c < d; c++)b[c].call(this, a); } } },
    }); for (var ya = [], ze = 0; ze < 256; ze++)ya[ze] = (ze < 16 ? '0' : '') + ze.toString(16); var O = {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI,
      generateUUID() {
        const a = 4294967295 * Math.random() | 0; const b = 4294967295 * Math.random() | 0; const c = 4294967295 * Math.random()
| 0; const d = 4294967295 * Math.random() | 0; return (`${ya[a & 255] + ya[a >> 8 & 255] + ya[a >> 16 & 255] + ya[a >> 24 & 255]}-${ya[b & 255]}${ya[b >> 8 & 255]}-${ya[b >> 16 & 15 | 64]}${ya[b >> 24 & 255]}-${ya[c & 63 | 128]}${ya[c >> 8 & 255]}-${ya[c >> 16 & 255]}${ya[c >> 24 & 255]}${ya[d & 255]}${ya[d >> 8 & 255]}${ya[d >> 16 & 255]}${ya[d >> 24 & 255]}`).toUpperCase();
      },
      clamp(a, b, c) { return Math.max(b, Math.min(c, a)); },
      euclideanModulo(a, b) { return (a % b + b) % b; },
      mapLinear(a, b, c, d, e) { return d + (a - b) * (e - d) / (c - b); },
      lerp(a, b, c) { return (1 - c) * a + c * b; },
      smoothstep(
        a,
        b,
        c,
      ) { if (a <= b) return 0; if (a >= c) return 1; a = (a - b) / (c - b); return a * a * (3 - 2 * a); },
      smootherstep(a, b, c) { if (a <= b) return 0; if (a >= c) return 1; a = (a - b) / (c - b); return a * a * a * (a * (6 * a - 15) + 10); },
      randInt(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
      randFloat(a, b) { return a + Math.random() * (b - a); },
      randFloatSpread(a) { return a * (0.5 - Math.random()); },
      degToRad(a) { return a * O.DEG2RAD; },
      radToDeg(a) { return a * O.RAD2DEG; },
      isPowerOfTwo(a) { return (a & a - 1) === 0 && a !== 0; },
      ceilPowerOfTwo(a) {
        return 2 ** Math.ceil(Math.log(a) / Math.LN2);
      },
      floorPowerOfTwo(a) { return 2 ** Math.floor(Math.log(a) / Math.LN2); },
    }; Object.defineProperties(x.prototype, { width: { get() { return this.x; }, set(a) { this.x = a; } }, height: { get() { return this.y; }, set(a) { this.y = a; } } }); Object.assign(x.prototype, {
      isVector2: !0,
      set(a, b) { this.x = a; this.y = b; return this; },
      setScalar(a) { this.y = this.x = a; return this; },
      setX(a) { this.x = a; return this; },
      setY(a) { this.y = a; return this; },
      setComponent(a, b) { switch (a) { case 0: this.x = b; break; case 1: this.y = b; break; default: throw Error(`index is out of range: ${a}`); } return this; },
      getComponent(a) { switch (a) { case 0: return this.x; case 1: return this.y; default: throw Error(`index is out of range: ${a}`); } },
      clone() { return new this.constructor(this.x, this.y); },
      copy(a) { this.x = a.x; this.y = a.y; return this; },
      add(a, b) {
        if (void 0 !== b) {
          return console.warn('THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'),
          this.addVectors(a, b);
        } this.x += a.x; this.y += a.y; return this;
      },
      addScalar(a) { this.x += a; this.y += a; return this; },
      addVectors(a, b) { this.x = a.x + b.x; this.y = a.y + b.y; return this; },
      addScaledVector(a, b) { this.x += a.x * b; this.y += a.y * b; return this; },
      sub(a, b) { if (void 0 !== b) return console.warn('THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'), this.subVectors(a, b); this.x -= a.x; this.y -= a.y; return this; },
      subScalar(a) { this.x -= a; this.y -= a; return this; },
      subVectors(a, b) { this.x = a.x - b.x; this.y = a.y - b.y; return this; },
      multiply(a) { this.x *= a.x; this.y *= a.y; return this; },
      multiplyScalar(a) { this.x *= a; this.y *= a; return this; },
      divide(a) { this.x /= a.x; this.y /= a.y; return this; },
      divideScalar(a) { return this.multiplyScalar(1 / a); },
      applyMatrix3(a) { const b = this.x; const c = this.y; a = a.elements; this.x = a[0] * b + a[3] * c + a[6]; this.y = a[1] * b + a[4] * c + a[7]; return this; },
      min(a) { this.x = Math.min(this.x, a.x); this.y = Math.min(this.y, a.y); return this; },
      max(a) { this.x = Math.max(this.x, a.x); this.y = Math.max(this.y, a.y); return this; },
      clamp(a, b) { this.x = Math.max(a.x, Math.min(b.x, this.x)); this.y = Math.max(a.y, Math.min(b.y, this.y)); return this; },
      clampScalar(a, b) { this.x = Math.max(a, Math.min(b, this.x)); this.y = Math.max(a, Math.min(b, this.y)); return this; },
      clampLength(a, b) { const c = this.length(); return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c))); },
      floor() {
        this.x = Math.floor(this.x); this.y = Math.floor(this.y);
        return this;
      },
      ceil() { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); return this; },
      round() { this.x = Math.round(this.x); this.y = Math.round(this.y); return this; },
      roundToZero() { this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x); this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y); return this; },
      negate() { this.x = -this.x; this.y = -this.y; return this; },
      dot(a) { return this.x * a.x + this.y * a.y; },
      cross(a) { return this.x * a.y - this.y * a.x; },
      lengthSq() {
        return this.x
* this.x + this.y * this.y;
      },
      length() { return Math.sqrt(this.x * this.x + this.y * this.y); },
      manhattanLength() { return Math.abs(this.x) + Math.abs(this.y); },
      normalize() { return this.divideScalar(this.length() || 1); },
      angle() { let a = Math.atan2(this.y, this.x); a < 0 && (a += 2 * Math.PI); return a; },
      distanceTo(a) { return Math.sqrt(this.distanceToSquared(a)); },
      distanceToSquared(a) { const b = this.x - a.x; a = this.y - a.y; return b * b + a * a; },
      manhattanDistanceTo(a) {
        return Math.abs(this.x - a.x)
+ Math.abs(this.y - a.y);
      },
      setLength(a) { return this.normalize().multiplyScalar(a); },
      lerp(a, b) { this.x += (a.x - this.x) * b; this.y += (a.y - this.y) * b; return this; },
      lerpVectors(a, b, c) { return this.subVectors(b, a).multiplyScalar(c).add(a); },
      equals(a) { return a.x === this.x && a.y === this.y; },
      fromArray(a, b) { void 0 === b && (b = 0); this.x = a[b]; this.y = a[b + 1]; return this; },
      toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this.x; a[b + 1] = this.y; return a; },
      fromBufferAttribute(
        a,
        b,
        c,
      ) { void 0 !== c && console.warn('THREE.Vector2: offset has been removed from .fromBufferAttribute().'); this.x = a.getX(b); this.y = a.getY(b); return this; },
      rotateAround(a, b) { const c = Math.cos(b); b = Math.sin(b); const d = this.x - a.x; const e = this.y - a.y; this.x = d * c - e * b + a.x; this.y = d * b + e * c + a.y; return this; },
    }); Object.assign(Da, {
      slerp(a, b, c, d) { return c.copy(a).slerp(b, d); },
      slerpFlat(a, b, c, d, e, f, g) {
        let k = c[d + 0]; let l = c[d + 1]; let m = c[d + 2]; c = c[d + 3]; d = e[f + 0]; const h = e[f + 1]; const p = e[f + 2]; e = e[f + 3]; if (c !== e || k !== d || l !== h || m
!== p) { f = 1 - g; let q = k * d + l * h + m * p + c * e; let n = q >= 0 ? 1 : -1; let r = 1 - q * q; r > Number.EPSILON && (r = Math.sqrt(r), q = Math.atan2(r, q * n), f = Math.sin(f * q) / r, g = Math.sin(g * q) / r); n *= g; k = k * f + d * n; l = l * f + h * n; m = m * f + p * n; c = c * f + e * n; f === 1 - g && (g = 1 / Math.sqrt(k * k + l * l + m * m + c * c), k *= g, l *= g, m *= g, c *= g); }a[b] = k; a[b + 1] = l; a[b + 2] = m; a[b + 3] = c;
      },
    }); Object.defineProperties(Da.prototype, {
      x: { get() { return this._x; }, set(a) { this._x = a; this._onChangeCallback(); } },
      y: { get() { return this._y; }, set(a) { this._y = a; this._onChangeCallback(); } },
      z: {
        get() { return this._z; },
        set(a) { this._z = a; this._onChangeCallback(); },
      },
      w: { get() { return this._w; }, set(a) { this._w = a; this._onChangeCallback(); } },
    }); Object.assign(Da.prototype, {
      isQuaternion: !0,
      set(a, b, c, d) { this._x = a; this._y = b; this._z = c; this._w = d; this._onChangeCallback(); return this; },
      clone() { return new this.constructor(this._x, this._y, this._z, this._w); },
      copy(a) { this._x = a.x; this._y = a.y; this._z = a.z; this._w = a.w; this._onChangeCallback(); return this; },
      setFromEuler(a, b) {
        if (!a
|| !a.isEuler) throw Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.'); let c = a._x; let d = a._y; let e = a._z; a = a.order; let f = Math.cos; const g = Math.sin; const k = f(c / 2); const l = f(d / 2); f = f(e / 2); c = g(c / 2); d = g(d / 2); e = g(e / 2); a === 'XYZ' ? (this._x = c * l * f + k * d * e, this._y = k * d * f - c * l * e, this._z = k * l * e + c * d * f, this._w = k * l * f - c * d * e) : a === 'YXZ' ? (this._x = c * l * f + k * d * e, this._y = k * d * f - c * l * e, this._z = k * l * e - c * d * f, this._w = k * l * f + c * d * e) : a === 'ZXY' ? (this._x = c * l * f - k * d * e, this._y = k * d * f + c * l * e, this._z = k * l * e + c * d * f, this._w = k * l * f - c * d * e) : a === 'ZYX' ? (this._x = c * l * f - k * d * e, this._y = k * d * f + c * l * e, this._z = k * l * e - c * d * f, this._w = k * l * f + c * d * e) : a === 'YZX' ? (this._x = c * l * f + k * d * e, this._y = k * d * f + c * l * e, this._z = k * l * e - c * d * f, this._w = k * l * f - c * d * e) : a === 'XZY' && (this._x = c * l * f - k * d * e, this._y = k * d * f - c * l * e, this._z = k * l * e + c * d * f, this._w = k * l * f + c * d * e); !1 !== b && this._onChangeCallback(); return this;
      },
      setFromAxisAngle(a, b) { b /= 2; const c = Math.sin(b); this._x = a.x * c; this._y = a.y * c; this._z = a.z * c; this._w = Math.cos(b); this._onChangeCallback(); return this; },
      setFromRotationMatrix(a) {
        let b = a.elements; let c = b[0]; a = b[4]; const d = b[8]; const e = b[1]; const f = b[5]; const g = b[9]; const k = b[2]; const l = b[6]; b = b[10]; const m = c + f + b; m > 0 ? (c = 0.5 / Math.sqrt(m + 1), this._w = 0.25 / c, this._x = (l - g) * c, this._y = (d - k) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (l - g) / c, this._x = 0.25 * c, this._y = (a + e) / c, this._z = (d + k) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - k) / c, this._x = (a + e) / c, this._y = 0.25 * c, this._z = (g + l) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + k) / c, this._y = (g + l) / c, this._z = 0.25 * c); this._onChangeCallback(); return this;
      },
      setFromUnitVectors(
        a,
        b,
      ) { let c = a.dot(b) + 1; c < 1E-6 ? (c = 0, Math.abs(a.x) > Math.abs(a.z) ? (this._x = -a.y, this._y = a.x, this._z = 0) : (this._x = 0, this._y = -a.z, this._z = a.y)) : (this._x = a.y * b.z - a.z * b.y, this._y = a.z * b.x - a.x * b.z, this._z = a.x * b.y - a.y * b.x); this._w = c; return this.normalize(); },
      angleTo(a) { return 2 * Math.acos(Math.abs(O.clamp(this.dot(a), -1, 1))); },
      rotateTowards(a, b) { const c = this.angleTo(a); if (c === 0) return this; this.slerp(a, Math.min(1, b / c)); return this; },
      inverse() { return this.conjugate(); },
      conjugate() {
        this._x
*= -1; this._y *= -1; this._z *= -1; this._onChangeCallback(); return this;
      },
      dot(a) { return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w; },
      lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w; },
      length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w); },
      normalize() { let a = this.length(); a === 0 ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a); this._onChangeCallback(); return this; },
      multiply(a, b) { return void 0 !== b ? (console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a); },
      premultiply(a) { return this.multiplyQuaternions(a, this); },
      multiplyQuaternions(a, b) {
        const c = a._x; const d = a._y; const e = a._z; a = a._w; const f = b._x; const g = b._y; const k = b._z; b = b._w; this._x = c * b + a * f + d * k - e * g; this._y = d * b + a * g + e * f - c * k; this._z = e * b + a * k + c * g - d * f; this._w = a * b - c * f - d * g - e * k; this._onChangeCallback();
        return this;
      },
      slerp(a, b) {
        if (b === 0) return this; if (b === 1) return this.copy(a); const c = this._x; const d = this._y; const e = this._z; const f = this._w; let g = f * a._w + c * a._x + d * a._y + e * a._z; g < 0 ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a); if (g >= 1) return this._w = f, this._x = c, this._y = d, this._z = e, this; a = 1 - g * g; if (a <= Number.EPSILON) return g = 1 - b, this._w = g * f + b * this._w, this._x = g * c + b * this._x, this._y = g * d + b * this._y, this._z = g * e + b * this._z, this.normalize(), this._onChangeCallback(), this; a = Math.sqrt(a); const k = Math.atan2(
          a,
          g,
        ); g = Math.sin((1 - b) * k) / a; b = Math.sin(b * k) / a; this._w = f * g + this._w * b; this._x = c * g + this._x * b; this._y = d * g + this._y * b; this._z = e * g + this._z * b; this._onChangeCallback(); return this;
      },
      equals(a) { return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w; },
      fromArray(a, b) { void 0 === b && (b = 0); this._x = a[b]; this._y = a[b + 1]; this._z = a[b + 2]; this._w = a[b + 3]; this._onChangeCallback(); return this; },
      toArray(a, b) {
        void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this._x; a[b + 1] = this._y; a[b + 2] = this._z; a[b
+ 3] = this._w; return a;
      },
      _onChange(a) { this._onChangeCallback = a; return this; },
      _onChangeCallback() {},
    }); const $g = new n(); const
      Ei = new Da(); Object.assign(n.prototype, {
      isVector3: !0,
      set(a, b, c) { this.x = a; this.y = b; this.z = c; return this; },
      setScalar(a) { this.z = this.y = this.x = a; return this; },
      setX(a) { this.x = a; return this; },
      setY(a) { this.y = a; return this; },
      setZ(a) { this.z = a; return this; },
      setComponent(a, b) {
        switch (a) {
          case 0: this.x = b; break; case 1: this.y = b; break; case 2: this.z = b; break; default: throw Error(`index is out of range: ${a}`);
        } return this;
      },
      getComponent(a) { switch (a) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw Error(`index is out of range: ${a}`); } },
      clone() { return new this.constructor(this.x, this.y, this.z); },
      copy(a) { this.x = a.x; this.y = a.y; this.z = a.z; return this; },
      add(a, b) {
        if (void 0 !== b) {
          return console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'), this.addVectors(
            a,
            b,
          );
        } this.x += a.x; this.y += a.y; this.z += a.z; return this;
      },
      addScalar(a) { this.x += a; this.y += a; this.z += a; return this; },
      addVectors(a, b) { this.x = a.x + b.x; this.y = a.y + b.y; this.z = a.z + b.z; return this; },
      addScaledVector(a, b) { this.x += a.x * b; this.y += a.y * b; this.z += a.z * b; return this; },
      sub(a, b) { if (void 0 !== b) return console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'), this.subVectors(a, b); this.x -= a.x; this.y -= a.y; this.z -= a.z; return this; },
      subScalar(a) {
        this.x
-= a; this.y -= a; this.z -= a; return this;
      },
      subVectors(a, b) { this.x = a.x - b.x; this.y = a.y - b.y; this.z = a.z - b.z; return this; },
      multiply(a, b) { if (void 0 !== b) return console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'), this.multiplyVectors(a, b); this.x *= a.x; this.y *= a.y; this.z *= a.z; return this; },
      multiplyScalar(a) { this.x *= a; this.y *= a; this.z *= a; return this; },
      multiplyVectors(a, b) { this.x = a.x * b.x; this.y = a.y * b.y; this.z = a.z * b.z; return this; },
      applyEuler(a) { a && a.isEuler || console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'); return this.applyQuaternion(Ei.setFromEuler(a)); },
      applyAxisAngle(a, b) { return this.applyQuaternion(Ei.setFromAxisAngle(a, b)); },
      applyMatrix3(a) { const b = this.x; const c = this.y; const d = this.z; a = a.elements; this.x = a[0] * b + a[3] * c + a[6] * d; this.y = a[1] * b + a[4] * c + a[7] * d; this.z = a[2] * b + a[5] * c + a[8] * d; return this; },
      applyNormalMatrix(a) { return this.applyMatrix3(a).normalize(); },
      applyMatrix4(a) { const b = this.x; const c = this.y; const d = this.z; a = a.elements; const e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]); this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e; this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e; this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e; return this; },
      applyQuaternion(a) { let b = this.x; const c = this.y; const d = this.z; const e = a.x; const f = a.y; const g = a.z; a = a.w; const k = a * b + f * d - g * c; const l = a * c + g * b - e * d; const m = a * d + e * c - f * b; b = -e * b - f * c - g * d; this.x = k * a + b * -e + l * -g - m * -f; this.y = l * a + b * -f + m * -e - k * -g; this.z = m * a + b * -g + k * -f - l * -e; return this; },
      project(a) { return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix); },
      unproject(a) { return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld); },
      transformDirection(a) { const b = this.x; const c = this.y; const d = this.z; a = a.elements; this.x = a[0] * b + a[4] * c + a[8] * d; this.y = a[1] * b + a[5] * c + a[9] * d; this.z = a[2] * b + a[6] * c + a[10] * d; return this.normalize(); },
      divide(a) { this.x /= a.x; this.y /= a.y; this.z /= a.z; return this; },
      divideScalar(a) { return this.multiplyScalar(1 / a); },
      min(a) {
        this.x = Math.min(this.x, a.x); this.y = Math.min(this.y, a.y); this.z = Math.min(
          this.z,
          a.z,
        ); return this;
      },
      max(a) { this.x = Math.max(this.x, a.x); this.y = Math.max(this.y, a.y); this.z = Math.max(this.z, a.z); return this; },
      clamp(a, b) { this.x = Math.max(a.x, Math.min(b.x, this.x)); this.y = Math.max(a.y, Math.min(b.y, this.y)); this.z = Math.max(a.z, Math.min(b.z, this.z)); return this; },
      clampScalar(a, b) { this.x = Math.max(a, Math.min(b, this.x)); this.y = Math.max(a, Math.min(b, this.y)); this.z = Math.max(a, Math.min(b, this.z)); return this; },
      clampLength(a, b) {
        const c = this.length(); return this.divideScalar(c
|| 1).multiplyScalar(Math.max(a, Math.min(b, c)));
      },
      floor() { this.x = Math.floor(this.x); this.y = Math.floor(this.y); this.z = Math.floor(this.z); return this; },
      ceil() { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); this.z = Math.ceil(this.z); return this; },
      round() { this.x = Math.round(this.x); this.y = Math.round(this.y); this.z = Math.round(this.z); return this; },
      roundToZero() {
        this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x); this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y); this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z); return this;
      },
      negate() { this.x = -this.x; this.y = -this.y; this.z = -this.z; return this; },
      dot(a) { return this.x * a.x + this.y * a.y + this.z * a.z; },
      lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z; },
      length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); },
      manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z); },
      normalize() { return this.divideScalar(this.length() || 1); },
      setLength(a) { return this.normalize().multiplyScalar(a); },
      lerp(a, b) { this.x += (a.x - this.x) * b; this.y += (a.y - this.y) * b; this.z += (a.z - this.z) * b; return this; },
      lerpVectors(a, b, c) { return this.subVectors(b, a).multiplyScalar(c).add(a); },
      cross(a, b) { return void 0 !== b ? (console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'), this.crossVectors(a, b)) : this.crossVectors(this, a); },
      crossVectors(a, b) { const c = a.x; const d = a.y; a = a.z; const e = b.x; const f = b.y; b = b.z; this.x = d * b - a * f; this.y = a * e - c * b; this.z = c * f - d * e; return this; },
      projectOnVector(a) { const b = a.dot(this) / a.lengthSq(); return this.copy(a).multiplyScalar(b); },
      projectOnPlane(a) { $g.copy(this).projectOnVector(a); return this.sub($g); },
      reflect(a) { return this.sub($g.copy(a).multiplyScalar(2 * this.dot(a))); },
      angleTo(a) { const b = Math.sqrt(this.lengthSq() * a.lengthSq()); b === 0 && console.error("THREE.Vector3: angleTo() can't handle zero length vectors."); a = this.dot(a) / b; return Math.acos(O.clamp(a, -1, 1)); },
      distanceTo(a) { return Math.sqrt(this.distanceToSquared(a)); },
      distanceToSquared(a) { const b = this.x - a.x; const c = this.y - a.y; a = this.z - a.z; return b * b + c * c + a * a; },
      manhattanDistanceTo(a) { return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z); },
      setFromSpherical(a) { return this.setFromSphericalCoords(a.radius, a.phi, a.theta); },
      setFromSphericalCoords(a, b, c) { const d = Math.sin(b) * a; this.x = d * Math.sin(c); this.y = Math.cos(b) * a; this.z = d * Math.cos(c); return this; },
      setFromCylindrical(a) {
        return this.setFromCylindricalCoords(
          a.radius,
          a.theta,
          a.y,
        );
      },
      setFromCylindricalCoords(a, b, c) { this.x = a * Math.sin(b); this.y = c; this.z = a * Math.cos(b); return this; },
      setFromMatrixPosition(a) { a = a.elements; this.x = a[12]; this.y = a[13]; this.z = a[14]; return this; },
      setFromMatrixScale(a) { const b = this.setFromMatrixColumn(a, 0).length(); const c = this.setFromMatrixColumn(a, 1).length(); a = this.setFromMatrixColumn(a, 2).length(); this.x = b; this.y = c; this.z = a; return this; },
      setFromMatrixColumn(a, b) { return this.fromArray(a.elements, 4 * b); },
      equals(a) {
        return a.x
=== this.x && a.y === this.y && a.z === this.z;
      },
      fromArray(a, b) { void 0 === b && (b = 0); this.x = a[b]; this.y = a[b + 1]; this.z = a[b + 2]; return this; },
      toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this.x; a[b + 1] = this.y; a[b + 2] = this.z; return a; },
      fromBufferAttribute(a, b, c) { void 0 !== c && console.warn('THREE.Vector3: offset has been removed from .fromBufferAttribute().'); this.x = a.getX(b); this.y = a.getY(b); this.z = a.getZ(b); return this; },
    }); const tc = new n(); Object.assign(za.prototype, {
      isMatrix3: !0,
      set(
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        k,
        l,
      ) { const m = this.elements; m[0] = a; m[1] = d; m[2] = g; m[3] = b; m[4] = e; m[5] = k; m[6] = c; m[7] = f; m[8] = l; return this; },
      identity() { this.set(1, 0, 0, 0, 1, 0, 0, 0, 1); return this; },
      clone() { return (new this.constructor()).fromArray(this.elements); },
      copy(a) { const b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; b[3] = a[3]; b[4] = a[4]; b[5] = a[5]; b[6] = a[6]; b[7] = a[7]; b[8] = a[8]; return this; },
      setFromMatrix4(a) { a = a.elements; this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]); return this; },
      applyToBufferAttribute(a) { for (let b = 0, c = a.count; b < c; b++)tc.x = a.getX(b), tc.y = a.getY(b), tc.z = a.getZ(b), tc.applyMatrix3(this), a.setXYZ(b, tc.x, tc.y, tc.z); return a; },
      multiply(a) { return this.multiplyMatrices(this, a); },
      premultiply(a) { return this.multiplyMatrices(a, this); },
      multiplyMatrices(a, b) {
        let c = a.elements; let d = b.elements; b = this.elements; a = c[0]; const e = c[3]; const f = c[6]; const g = c[1]; const k = c[4]; const l = c[7]; const m = c[2]; const h = c[5]; c = c[8]; const p = d[0]; const q = d[3]; const n = d[6]; const r = d[1]; const u = d[4]; const z = d[7]; const w = d[2]; const B = d[5]; d = d[8];
        b[0] = a * p + e * r + f * w; b[3] = a * q + e * u + f * B; b[6] = a * n + e * z + f * d; b[1] = g * p + k * r + l * w; b[4] = g * q + k * u + l * B; b[7] = g * n + k * z + l * d; b[2] = m * p + h * r + c * w; b[5] = m * q + h * u + c * B; b[8] = m * n + h * z + c * d; return this;
      },
      multiplyScalar(a) { const b = this.elements; b[0] *= a; b[3] *= a; b[6] *= a; b[1] *= a; b[4] *= a; b[7] *= a; b[2] *= a; b[5] *= a; b[8] *= a; return this; },
      determinant() { let a = this.elements; const b = a[0]; const c = a[1]; const d = a[2]; const e = a[3]; const f = a[4]; const g = a[5]; const k = a[6]; const l = a[7]; a = a[8]; return b * f * a - b * g * l - c * e * a + c * g * k + d * e * l - d * f * k; },
      getInverse(a, b) {
        a && a.isMatrix4 && console.error('THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.');
        let c = a.elements; a = this.elements; const d = c[0]; const e = c[1]; const f = c[2]; const g = c[3]; const k = c[4]; const l = c[5]; const m = c[6]; const h = c[7]; c = c[8]; const p = c * k - l * h; const q = l * m - c * g; const n = h * g - k * m; const r = d * p + e * q + f * n; if (r === 0) { if (!0 === b) throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"); console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"); return this.identity(); }b = 1 / r; a[0] = p * b; a[1] = (f * h - c * e) * b; a[2] = (l * e - f * k) * b; a[3] = q * b; a[4] = (c * d - f * m) * b; a[5] = (f * g - l * d) * b; a[6] = n * b; a[7] = (e * m - h * d) * b; a[8] = (k * d - e * g) * b; return this;
      },
      transpose() { const a = this.elements; let b = a[1]; a[1] = a[3]; a[3] = b; b = a[2]; a[2] = a[6]; a[6] = b; b = a[5]; a[5] = a[7]; a[7] = b; return this; },
      getNormalMatrix(a) { return this.setFromMatrix4(a).getInverse(this).transpose(); },
      transposeIntoArray(a) { const b = this.elements; a[0] = b[0]; a[1] = b[3]; a[2] = b[6]; a[3] = b[1]; a[4] = b[4]; a[5] = b[7]; a[6] = b[2]; a[7] = b[5]; a[8] = b[8]; return this; },
      setUvTransform(a, b, c, d, e, f, g) {
        const k = Math.cos(e); e = Math.sin(e); this.set(c * k, c * e, -c * (k * f + e * g) + f + a, -d * e, d * k, -d * (-e * f + k * g) + g
+ b, 0, 0, 1);
      },
      scale(a, b) { const c = this.elements; c[0] *= a; c[3] *= a; c[6] *= a; c[1] *= b; c[4] *= b; c[7] *= b; return this; },
      rotate(a) { const b = Math.cos(a); a = Math.sin(a); const c = this.elements; const d = c[0]; const e = c[3]; const f = c[6]; const g = c[1]; const k = c[4]; const l = c[7]; c[0] = b * d + a * g; c[3] = b * e + a * k; c[6] = b * f + a * l; c[1] = -a * d + b * g; c[4] = -a * e + b * k; c[7] = -a * f + b * l; return this; },
      translate(a, b) { const c = this.elements; c[0] += a * c[2]; c[3] += a * c[5]; c[6] += a * c[8]; c[1] += b * c[2]; c[4] += b * c[5]; c[7] += b * c[8]; return this; },
      equals(a) {
        const b = this.elements; a = a.elements;
        for (let c = 0; c < 9; c++) if (b[c] !== a[c]) return !1; return !0;
      },
      fromArray(a, b) { void 0 === b && (b = 0); for (let c = 0; c < 9; c++) this.elements[c] = a[c + b]; return this; },
      toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); const c = this.elements; a[b] = c[0]; a[b + 1] = c[1]; a[b + 2] = c[2]; a[b + 3] = c[3]; a[b + 4] = c[4]; a[b + 5] = c[5]; a[b + 6] = c[6]; a[b + 7] = c[7]; a[b + 8] = c[8]; return a; },
    }); let nd; const Mb = {
      getDataURL(a) {
        if (typeof HTMLCanvasElement === 'undefined') return a.src; if (!(a instanceof HTMLCanvasElement)) {
          void 0 === nd && (nd = document.createElementNS(
            'http://www.w3.org/1999/xhtml',
            'canvas',
          )); nd.width = a.width; nd.height = a.height; const b = nd.getContext('2d'); a instanceof ImageData ? b.putImageData(a, 0, 0) : b.drawImage(a, 0, 0, a.width, a.height); a = nd;
        } return a.width > 2048 || a.height > 2048 ? a.toDataURL('image/jpeg', 0.6) : a.toDataURL('image/png');
      },
    }; var mj = 0; T.DEFAULT_IMAGE = void 0; T.DEFAULT_MAPPING = 300; T.prototype = Object.assign(Object.create(Fa.prototype), {
      constructor: T,
      isTexture: !0,
      updateMatrix() {
        this.matrix.setUvTransform(
          this.offset.x,
          this.offset.y,
          this.repeat.x,
          this.repeat.y,
          this.rotation,
          this.center.x,
          this.center.y,
        );
      },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) {
        this.name = a.name; this.image = a.image; this.mipmaps = a.mipmaps.slice(0); this.mapping = a.mapping; this.wrapS = a.wrapS; this.wrapT = a.wrapT; this.magFilter = a.magFilter; this.minFilter = a.minFilter; this.anisotropy = a.anisotropy; this.format = a.format; this.internalFormat = a.internalFormat; this.type = a.type; this.offset.copy(a.offset); this.repeat.copy(a.repeat); this.center.copy(a.center); this.rotation = a.rotation; this.matrixAutoUpdate = a.matrixAutoUpdate; this.matrix.copy(a.matrix); this.generateMipmaps = a.generateMipmaps; this.premultiplyAlpha = a.premultiplyAlpha; this.flipY = a.flipY; this.unpackAlignment = a.unpackAlignment; this.encoding = a.encoding; return this;
      },
      toJSON(a) {
        const b = void 0 === a || typeof a === 'string'; if (!b && void 0 !== a.textures[this.uuid]) return a.textures[this.uuid]; const c = {
          metadata: { version: 4.5, type: 'Texture', generator: 'Texture.toJSON' },
          uuid: this.uuid,
          name: this.name,
          mapping: this.mapping,
          repeat: [this.repeat.x, this.repeat.y],
          offset: [this.offset.x, this.offset.y],
          center: [this.center.x, this.center.y],
          rotation: this.rotation,
          wrap: [this.wrapS, this.wrapT],
          format: this.format,
          type: this.type,
          encoding: this.encoding,
          minFilter: this.minFilter,
          magFilter: this.magFilter,
          anisotropy: this.anisotropy,
          flipY: this.flipY,
          premultiplyAlpha: this.premultiplyAlpha,
          unpackAlignment: this.unpackAlignment,
        }; if (void 0 !== this.image) {
          const d = this.image; void 0 === d.uuid && (d.uuid = O.generateUUID()); if (!b && void 0 === a.images[d.uuid]) {
            if (Array.isArray(d)) {
              var e = [];
              for (let f = 0, g = d.length; f < g; f++)e.push(Mb.getDataURL(d[f]));
            } else e = Mb.getDataURL(d); a.images[d.uuid] = { uuid: d.uuid, url: e };
          }c.image = d.uuid;
        }b || (a.textures[this.uuid] = c); return c;
      },
      dispose() { this.dispatchEvent({ type: 'dispose' }); },
      transformUv(a) {
        if (this.mapping !== 300) return a; a.applyMatrix3(this.matrix); if (a.x < 0 || a.x > 1) switch (this.wrapS) { case 1E3: a.x -= Math.floor(a.x); break; case 1001: a.x = a.x < 0 ? 0 : 1; break; case 1002: a.x = Math.abs(Math.floor(a.x) % 2) === 1 ? Math.ceil(a.x) - a.x : a.x - Math.floor(a.x); } if (a.y
< 0 || a.y > 1) switch (this.wrapT) { case 1E3: a.y -= Math.floor(a.y); break; case 1001: a.y = a.y < 0 ? 0 : 1; break; case 1002: a.y = Math.abs(Math.floor(a.y) % 2) === 1 ? Math.ceil(a.y) - a.y : a.y - Math.floor(a.y); } this.flipY && (a.y = 1 - a.y); return a;
      },
    }); Object.defineProperty(T.prototype, 'needsUpdate', { set(a) { !0 === a && this.version++; } }); Object.defineProperties(S.prototype, { width: { get() { return this.z; }, set(a) { this.z = a; } }, height: { get() { return this.w; }, set(a) { this.w = a; } } }); Object.assign(
      S.prototype,
      {
        isVector4: !0,
        set(a, b, c, d) { this.x = a; this.y = b; this.z = c; this.w = d; return this; },
        setScalar(a) { this.w = this.z = this.y = this.x = a; return this; },
        setX(a) { this.x = a; return this; },
        setY(a) { this.y = a; return this; },
        setZ(a) { this.z = a; return this; },
        setW(a) { this.w = a; return this; },
        setComponent(a, b) { switch (a) { case 0: this.x = b; break; case 1: this.y = b; break; case 2: this.z = b; break; case 3: this.w = b; break; default: throw Error(`index is out of range: ${a}`); } return this; },
        getComponent(a) {
          switch (a) {
            case 0: return this.x;
            case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw Error(`index is out of range: ${a}`);
          }
        },
        clone() { return new this.constructor(this.x, this.y, this.z, this.w); },
        copy(a) { this.x = a.x; this.y = a.y; this.z = a.z; this.w = void 0 !== a.w ? a.w : 1; return this; },
        add(a, b) { if (void 0 !== b) return console.warn('THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'), this.addVectors(a, b); this.x += a.x; this.y += a.y; this.z += a.z; this.w += a.w; return this; },
        addScalar(a) { this.x += a; this.y += a; this.z += a; this.w += a; return this; },
        addVectors(a, b) { this.x = a.x + b.x; this.y = a.y + b.y; this.z = a.z + b.z; this.w = a.w + b.w; return this; },
        addScaledVector(a, b) { this.x += a.x * b; this.y += a.y * b; this.z += a.z * b; this.w += a.w * b; return this; },
        sub(a, b) { if (void 0 !== b) return console.warn('THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'), this.subVectors(a, b); this.x -= a.x; this.y -= a.y; this.z -= a.z; this.w -= a.w; return this; },
        subScalar(a) {
          this.x
-= a; this.y -= a; this.z -= a; this.w -= a; return this;
        },
        subVectors(a, b) { this.x = a.x - b.x; this.y = a.y - b.y; this.z = a.z - b.z; this.w = a.w - b.w; return this; },
        multiplyScalar(a) { this.x *= a; this.y *= a; this.z *= a; this.w *= a; return this; },
        applyMatrix4(a) { const b = this.x; const c = this.y; const d = this.z; const e = this.w; a = a.elements; this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e; this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e; this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e; this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e; return this; },
        divideScalar(a) {
          return this.multiplyScalar(1
/ a);
        },
        setAxisAngleFromQuaternion(a) { this.w = 2 * Math.acos(a.w); const b = Math.sqrt(1 - a.w * a.w); b < 1E-4 ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b); return this; },
        setAxisAngleFromRotationMatrix(a) {
          a = a.elements; let b = a[0]; let c = a[4]; let d = a[8]; const e = a[1]; let f = a[5]; let g = a[9]; let k = a[2]; let l = a[6]; let m = a[10]; if (Math.abs(c - e) < 0.01 && Math.abs(d - k) < 0.01 && Math.abs(g - l) < 0.01) {
            if (Math.abs(c + e) < 0.1 && Math.abs(d + k) < 0.1 && Math.abs(g + l) < 0.1 && Math.abs(b + f + m - 3) < 0.1) return this.set(1, 0, 0, 0), this; a = Math.PI;
            b = (b + 1) / 2; f = (f + 1) / 2; m = (m + 1) / 2; c = (c + e) / 4; d = (d + k) / 4; g = (g + l) / 4; b > f && b > m ? b < 0.01 ? (l = 0, c = k = 0.707106781) : (l = Math.sqrt(b), k = c / l, c = d / l) : f > m ? f < 0.01 ? (l = 0.707106781, k = 0, c = 0.707106781) : (k = Math.sqrt(f), l = c / k, c = g / k) : m < 0.01 ? (k = l = 0.707106781, c = 0) : (c = Math.sqrt(m), l = d / c, k = g / c); this.set(l, k, c, a); return this;
          }a = Math.sqrt((l - g) * (l - g) + (d - k) * (d - k) + (e - c) * (e - c)); Math.abs(a) < 0.001 && (a = 1); this.x = (l - g) / a; this.y = (d - k) / a; this.z = (e - c) / a; this.w = Math.acos((b + f + m - 1) / 2); return this;
        },
        min(a) {
          this.x = Math.min(this.x, a.x); this.y = Math.min(
            this.y,
            a.y,
          ); this.z = Math.min(this.z, a.z); this.w = Math.min(this.w, a.w); return this;
        },
        max(a) { this.x = Math.max(this.x, a.x); this.y = Math.max(this.y, a.y); this.z = Math.max(this.z, a.z); this.w = Math.max(this.w, a.w); return this; },
        clamp(a, b) { this.x = Math.max(a.x, Math.min(b.x, this.x)); this.y = Math.max(a.y, Math.min(b.y, this.y)); this.z = Math.max(a.z, Math.min(b.z, this.z)); this.w = Math.max(a.w, Math.min(b.w, this.w)); return this; },
        clampScalar(a, b) {
          this.x = Math.max(a, Math.min(b, this.x)); this.y = Math.max(a, Math.min(
            b,
            this.y,
          )); this.z = Math.max(a, Math.min(b, this.z)); this.w = Math.max(a, Math.min(b, this.w)); return this;
        },
        clampLength(a, b) { const c = this.length(); return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c))); },
        floor() { this.x = Math.floor(this.x); this.y = Math.floor(this.y); this.z = Math.floor(this.z); this.w = Math.floor(this.w); return this; },
        ceil() { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); this.z = Math.ceil(this.z); this.w = Math.ceil(this.w); return this; },
        round() {
          this.x = Math.round(this.x); this.y = Math.round(this.y); this.z = Math.round(this.z); this.w = Math.round(this.w); return this;
        },
        roundToZero() { this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x); this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y); this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z); this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w); return this; },
        negate() { this.x = -this.x; this.y = -this.y; this.z = -this.z; this.w = -this.w; return this; },
        dot(a) {
          return this.x * a.x + this.y * a.y + this.z
* a.z + this.w * a.w;
        },
        lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w; },
        length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); },
        manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w); },
        normalize() { return this.divideScalar(this.length() || 1); },
        setLength(a) { return this.normalize().multiplyScalar(a); },
        lerp(a, b) {
          this.x += (a.x - this.x) * b; this.y += (a.y - this.y) * b; this.z += (a.z
- this.z) * b; this.w += (a.w - this.w) * b; return this;
        },
        lerpVectors(a, b, c) { return this.subVectors(b, a).multiplyScalar(c).add(a); },
        equals(a) { return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w; },
        fromArray(a, b) { void 0 === b && (b = 0); this.x = a[b]; this.y = a[b + 1]; this.z = a[b + 2]; this.w = a[b + 3]; return this; },
        toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this.x; a[b + 1] = this.y; a[b + 2] = this.z; a[b + 3] = this.w; return a; },
        fromBufferAttribute(a, b, c) {
          void 0 !== c && console.warn('THREE.Vector4: offset has been removed from .fromBufferAttribute().');
          this.x = a.getX(b); this.y = a.getY(b); this.z = a.getZ(b); this.w = a.getW(b); return this;
        },
      },
    ); va.prototype = Object.assign(Object.create(Fa.prototype), {
      constructor: va,
      isWebGLRenderTarget: !0,
      setSize(a, b) { if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.texture.image.width = a, this.texture.image.height = b, this.dispose(); this.viewport.set(0, 0, a, b); this.scissor.set(0, 0, a, b); },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) {
        this.width = a.width; this.height = a.height; this.viewport.copy(a.viewport);
        this.texture = a.texture.clone(); this.depthBuffer = a.depthBuffer; this.stencilBuffer = a.stencilBuffer; this.depthTexture = a.depthTexture; return this;
      },
      dispose() { this.dispatchEvent({ type: 'dispose' }); },
    }); Zf.prototype = Object.assign(Object.create(va.prototype), { constructor: Zf, isWebGLMultisampleRenderTarget: !0, copy(a) { va.prototype.copy.call(this, a); this.samples = a.samples; return this; } }); const Ma = new n(); const W = new P(); const Ok = new n(0, 0, 0); const Pk = new n(1, 1, 1); const Nb = new n(); const Cf = new n(); const
      ka = new n(); Object.assign(P.prototype, {
      isMatrix4: !0,
      set(a, b, c, d, e, f, g, k, l, m, h, p, q, n, r, u) { const v = this.elements; v[0] = a; v[4] = b; v[8] = c; v[12] = d; v[1] = e; v[5] = f; v[9] = g; v[13] = k; v[2] = l; v[6] = m; v[10] = h; v[14] = p; v[3] = q; v[7] = n; v[11] = r; v[15] = u; return this; },
      identity() { this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); return this; },
      clone() { return (new P()).fromArray(this.elements); },
      copy(a) {
        const b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; b[3] = a[3]; b[4] = a[4]; b[5] = a[5]; b[6] = a[6]; b[7] = a[7]; b[8] = a[8]; b[9] = a[9]; b[10] = a[10]; b[11] = a[11];
        b[12] = a[12]; b[13] = a[13]; b[14] = a[14]; b[15] = a[15]; return this;
      },
      copyPosition(a) { const b = this.elements; a = a.elements; b[12] = a[12]; b[13] = a[13]; b[14] = a[14]; return this; },
      extractBasis(a, b, c) { a.setFromMatrixColumn(this, 0); b.setFromMatrixColumn(this, 1); c.setFromMatrixColumn(this, 2); return this; },
      makeBasis(a, b, c) { this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1); return this; },
      extractRotation(a) {
        const b = this.elements; const c = a.elements; const d = 1 / Ma.setFromMatrixColumn(a, 0).length();
        const e = 1 / Ma.setFromMatrixColumn(a, 1).length(); a = 1 / Ma.setFromMatrixColumn(a, 2).length(); b[0] = c[0] * d; b[1] = c[1] * d; b[2] = c[2] * d; b[3] = 0; b[4] = c[4] * e; b[5] = c[5] * e; b[6] = c[6] * e; b[7] = 0; b[8] = c[8] * a; b[9] = c[9] * a; b[10] = c[10] * a; b[11] = 0; b[12] = 0; b[13] = 0; b[14] = 0; b[15] = 1; return this;
      },
      makeRotationFromEuler(a) {
        a && a.isEuler || console.error('THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.'); const b = this.elements; let c = a.x; let d = a.y; let e = a.z; const f = Math.cos(c); c = Math.sin(c); const g = Math.cos(d);
        d = Math.sin(d); const k = Math.cos(e); e = Math.sin(e); if (a.order === 'XYZ') { a = f * k; var l = f * e; var m = c * k; var h = c * e; b[0] = g * k; b[4] = -g * e; b[8] = d; b[1] = l + m * d; b[5] = a - h * d; b[9] = -c * g; b[2] = h - a * d; b[6] = m + l * d; b[10] = f * g; } else {
          a.order === 'YXZ' ? (a = g * k, l = g * e, m = d * k, h = d * e, b[0] = a + h * c, b[4] = m * c - l, b[8] = f * d, b[1] = f * e, b[5] = f * k, b[9] = -c, b[2] = l * c - m, b[6] = h + a * c, b[10] = f * g) : a.order === 'ZXY' ? (a = g * k, l = g * e, m = d * k, h = d * e, b[0] = a - h * c, b[4] = -f * e, b[8] = m + l * c, b[1] = l + m * c, b[5] = f * k, b[9] = h - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : a.order === 'ZYX' ? (a = f * k, l = f * e, m = c * k, h = c * e, b[0] = g * k,
          b[4] = m * d - l, b[8] = a * d + h, b[1] = g * e, b[5] = h * d + a, b[9] = l * d - m, b[2] = -d, b[6] = c * g, b[10] = f * g) : a.order === 'YZX' ? (a = f * g, l = f * d, m = c * g, h = c * d, b[0] = g * k, b[4] = h - a * e, b[8] = m * e + l, b[1] = e, b[5] = f * k, b[9] = -c * k, b[2] = -d * k, b[6] = l * e + m, b[10] = a - h * e) : a.order === 'XZY' && (a = f * g, l = f * d, m = c * g, h = c * d, b[0] = g * k, b[4] = -e, b[8] = d * k, b[1] = a * e + h, b[5] = f * k, b[9] = l * e - m, b[2] = m * e - l, b[6] = c * k, b[10] = h * e + a);
        } b[3] = 0; b[7] = 0; b[11] = 0; b[12] = 0; b[13] = 0; b[14] = 0; b[15] = 1; return this;
      },
      makeRotationFromQuaternion(a) { return this.compose(Ok, a, Pk); },
      lookAt(
        a,
        b,
        c,
      ) { const d = this.elements; ka.subVectors(a, b); ka.lengthSq() === 0 && (ka.z = 1); ka.normalize(); Nb.crossVectors(c, ka); Nb.lengthSq() === 0 && (Math.abs(c.z) === 1 ? ka.x += 1E-4 : ka.z += 1E-4, ka.normalize(), Nb.crossVectors(c, ka)); Nb.normalize(); Cf.crossVectors(ka, Nb); d[0] = Nb.x; d[4] = Cf.x; d[8] = ka.x; d[1] = Nb.y; d[5] = Cf.y; d[9] = ka.y; d[2] = Nb.z; d[6] = Cf.z; d[10] = ka.z; return this; },
      multiply(a, b) {
        return void 0 !== b ? (console.warn('THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'),
        this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a);
      },
      premultiply(a) { return this.multiplyMatrices(a, this); },
      multiplyMatrices(a, b) {
        let c = a.elements; let d = b.elements; b = this.elements; a = c[0]; const e = c[4]; const f = c[8]; const g = c[12]; const k = c[1]; const l = c[5]; const m = c[9]; const h = c[13]; const p = c[2]; const q = c[6]; const n = c[10]; const r = c[14]; const u = c[3]; const z = c[7]; const w = c[11]; c = c[15]; const B = d[0]; const x = d[4]; const y = d[8]; const A = d[12]; const C = d[1]; const G = d[5]; const D = d[9]; const E = d[13]; const F = d[2]; const I = d[6]; const K = d[10]; const L = d[14]; const M = d[3]; const N = d[7]; const O = d[11]; d = d[15]; b[0] = a * B + e * C + f * F + g * M; b[4] = a * x + e * G + f * I + g * N; b[8] = a * y + e * D + f * K
+ g * O; b[12] = a * A + e * E + f * L + g * d; b[1] = k * B + l * C + m * F + h * M; b[5] = k * x + l * G + m * I + h * N; b[9] = k * y + l * D + m * K + h * O; b[13] = k * A + l * E + m * L + h * d; b[2] = p * B + q * C + n * F + r * M; b[6] = p * x + q * G + n * I + r * N; b[10] = p * y + q * D + n * K + r * O; b[14] = p * A + q * E + n * L + r * d; b[3] = u * B + z * C + w * F + c * M; b[7] = u * x + z * G + w * I + c * N; b[11] = u * y + z * D + w * K + c * O; b[15] = u * A + z * E + w * L + c * d; return this;
      },
      multiplyScalar(a) { const b = this.elements; b[0] *= a; b[4] *= a; b[8] *= a; b[12] *= a; b[1] *= a; b[5] *= a; b[9] *= a; b[13] *= a; b[2] *= a; b[6] *= a; b[10] *= a; b[14] *= a; b[3] *= a; b[7] *= a; b[11] *= a; b[15] *= a; return this; },
      applyToBufferAttribute(a) {
        for (let b = 0, c = a.count; b < c; b++)Ma.x = a.getX(b), Ma.y = a.getY(b), Ma.z = a.getZ(b), Ma.applyMatrix4(this), a.setXYZ(b, Ma.x, Ma.y, Ma.z); return a;
      },
      determinant() { const a = this.elements; const b = a[0]; const c = a[4]; const d = a[8]; const e = a[12]; const f = a[1]; const g = a[5]; const k = a[9]; const l = a[13]; const m = a[2]; const h = a[6]; const p = a[10]; const q = a[14]; return a[3] * (+e * k * h - d * l * h - e * g * p + c * l * p + d * g * q - c * k * q) + a[7] * (+b * k * q - b * l * p + e * f * p - d * f * q + d * l * m - e * k * m) + a[11] * (+b * l * h - b * g * q - e * f * h + c * f * q + e * g * m - c * l * m) + a[15] * (-d * g * m - b * k * h + b * g * p + d * f * h - c * f * p + c * k * m); },
      transpose() {
        const a = this.elements; let b = a[1]; a[1] = a[4];
        a[4] = b; b = a[2]; a[2] = a[8]; a[8] = b; b = a[6]; a[6] = a[9]; a[9] = b; b = a[3]; a[3] = a[12]; a[12] = b; b = a[7]; a[7] = a[13]; a[13] = b; b = a[11]; a[11] = a[14]; a[14] = b; return this;
      },
      setPosition(a, b, c) { const d = this.elements; a.isVector3 ? (d[12] = a.x, d[13] = a.y, d[14] = a.z) : (d[12] = a, d[13] = b, d[14] = c); return this; },
      getInverse(a, b) {
        const c = this.elements; let d = a.elements; a = d[0]; const e = d[1]; const f = d[2]; const g = d[3]; const k = d[4]; const l = d[5]; const m = d[6]; const h = d[7]; const p = d[8]; const q = d[9]; const n = d[10]; const r = d[11]; const u = d[12]; const z = d[13]; const w = d[14]; d = d[15]; const B = q * w * h - z * n * h + z * m * r - l * w * r - q * m * d + l * n * d;
        const x = u * n * h - p * w * h - u * m * r + k * w * r + p * m * d - k * n * d; const y = p * z * h - u * q * h + u * l * r - k * z * r - p * l * d + k * q * d; const A = u * q * m - p * z * m - u * l * n + k * z * n + p * l * w - k * q * w; const C = a * B + e * x + f * y + g * A; if (C === 0) { if (!0 === b) throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"); console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"); return this.identity(); }b = 1 / C; c[0] = B * b; c[1] = (z * n * g - q * w * g - z * f * r + e * w * r + q * f * d - e * n * d) * b; c[2] = (l * w * g - z * m * g + z * f * h - e * w * h - l * f * d + e * m * d) * b; c[3] = (q * m * g - l * n * g - q * f * h + e * n * h + l * f * r - e * m * r) * b; c[4] = x * b; c[5] = (p * w * g - u * n * g + u * f * r - a * w * r - p * f * d + a * n * d) * b; c[6] = (u * m * g - k * w * g - u * f * h + a * w * h + k * f * d - a * m * d) * b; c[7] = (k * n * g - p * m * g + p * f * h - a * n * h - k * f * r + a * m * r) * b; c[8] = y * b; c[9] = (u * q * g - p * z * g - u * e * r + a * z * r + p * e * d - a * q * d) * b; c[10] = (k * z * g - u * l * g + u * e * h - a * z * h - k * e * d + a * l * d) * b; c[11] = (p * l * g - k * q * g - p * e * h + a * q * h + k * e * r - a * l * r) * b; c[12] = A * b; c[13] = (p * z * f - u * q * f + u * e * n - a * z * n - p * e * w + a * q * w) * b; c[14] = (u * l * f - k * z * f - u * e * m + a * z * m + k * e * w - a * l * w) * b; c[15] = (k * q * f - p * l * f + p * e * m - a * q * m - k * e * n + a * l * n) * b; return this;
      },
      scale(a) {
        const b = this.elements; const c = a.x; const d = a.y; a = a.z; b[0] *= c;
        b[4] *= d; b[8] *= a; b[1] *= c; b[5] *= d; b[9] *= a; b[2] *= c; b[6] *= d; b[10] *= a; b[3] *= c; b[7] *= d; b[11] *= a; return this;
      },
      getMaxScaleOnAxis() { const a = this.elements; return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])); },
      makeTranslation(a, b, c) { this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1); return this; },
      makeRotationX(a) { const b = Math.cos(a); a = Math.sin(a); this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1); return this; },
      makeRotationY(a) {
        const b = Math.cos(a); a = Math.sin(a); this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1); return this;
      },
      makeRotationZ(a) { const b = Math.cos(a); a = Math.sin(a); this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); return this; },
      makeRotationAxis(a, b) { const c = Math.cos(b); b = Math.sin(b); const d = 1 - c; const e = a.x; const f = a.y; a = a.z; const g = d * e; const k = d * f; this.set(g * e + c, g * f - b * a, g * a + b * f, 0, g * f + b * a, k * f + c, k * a - b * e, 0, g * a - b * f, k * a + b * e, d * a * a + c, 0, 0, 0, 0, 1); return this; },
      makeScale(a, b, c) { this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1); return this; },
      makeShear(
        a,
        b,
        c,
      ) { this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1); return this; },
      compose(a, b, c) { const d = this.elements; let e = b._x; let f = b._y; let g = b._z; let k = b._w; let l = e + e; let m = f + f; let h = g + g; b = e * l; const p = e * m; e *= h; const q = f * m; f *= h; g *= h; l *= k; m *= k; k *= h; h = c.x; const n = c.y; c = c.z; d[0] = (1 - (q + g)) * h; d[1] = (p + k) * h; d[2] = (e - m) * h; d[3] = 0; d[4] = (p - k) * n; d[5] = (1 - (b + g)) * n; d[6] = (f + l) * n; d[7] = 0; d[8] = (e + m) * c; d[9] = (f - l) * c; d[10] = (1 - (b + q)) * c; d[11] = 0; d[12] = a.x; d[13] = a.y; d[14] = a.z; d[15] = 1; return this; },
      decompose(a, b, c) {
        let d = this.elements; let e = Ma.set(d[0], d[1], d[2]).length();
        const f = Ma.set(d[4], d[5], d[6]).length(); const g = Ma.set(d[8], d[9], d[10]).length(); this.determinant() < 0 && (e = -e); a.x = d[12]; a.y = d[13]; a.z = d[14]; W.copy(this); a = 1 / e; d = 1 / f; const k = 1 / g; W.elements[0] *= a; W.elements[1] *= a; W.elements[2] *= a; W.elements[4] *= d; W.elements[5] *= d; W.elements[6] *= d; W.elements[8] *= k; W.elements[9] *= k; W.elements[10] *= k; b.setFromRotationMatrix(W); c.x = e; c.y = f; c.z = g; return this;
      },
      makePerspective(a, b, c, d, e, f) {
        void 0 === f && console.warn('THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.');
        const g = this.elements; g[0] = 2 * e / (b - a); g[4] = 0; g[8] = (b + a) / (b - a); g[12] = 0; g[1] = 0; g[5] = 2 * e / (c - d); g[9] = (c + d) / (c - d); g[13] = 0; g[2] = 0; g[6] = 0; g[10] = -(f + e) / (f - e); g[14] = -2 * f * e / (f - e); g[3] = 0; g[7] = 0; g[11] = -1; g[15] = 0; return this;
      },
      makeOrthographic(a, b, c, d, e, f) { const g = this.elements; const k = 1 / (b - a); const l = 1 / (c - d); const m = 1 / (f - e); g[0] = 2 * k; g[4] = 0; g[8] = 0; g[12] = -((b + a) * k); g[1] = 0; g[5] = 2 * l; g[9] = 0; g[13] = -((c + d) * l); g[2] = 0; g[6] = 0; g[10] = -2 * m; g[14] = -((f + e) * m); g[3] = 0; g[7] = 0; g[11] = 0; g[15] = 1; return this; },
      equals(a) {
        const b = this.elements;
        a = a.elements; for (let c = 0; c < 16; c++) if (b[c] !== a[c]) return !1; return !0;
      },
      fromArray(a, b) { void 0 === b && (b = 0); for (let c = 0; c < 16; c++) this.elements[c] = a[c + b]; return this; },
      toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); const c = this.elements; a[b] = c[0]; a[b + 1] = c[1]; a[b + 2] = c[2]; a[b + 3] = c[3]; a[b + 4] = c[4]; a[b + 5] = c[5]; a[b + 6] = c[6]; a[b + 7] = c[7]; a[b + 8] = c[8]; a[b + 9] = c[9]; a[b + 10] = c[10]; a[b + 11] = c[11]; a[b + 12] = c[12]; a[b + 13] = c[13]; a[b + 14] = c[14]; a[b + 15] = c[15]; return a; },
    }); const Fi = new P(); const
      Gi = new Da(); Ub.RotationOrders = 'XYZ YZX ZXY XZY YXZ ZYX'.split(' '); Ub.DefaultOrder = 'XYZ'; Object.defineProperties(Ub.prototype, {
      x: { get() { return this._x; }, set(a) { this._x = a; this._onChangeCallback(); } }, y: { get() { return this._y; }, set(a) { this._y = a; this._onChangeCallback(); } }, z: { get() { return this._z; }, set(a) { this._z = a; this._onChangeCallback(); } }, order: { get() { return this._order; }, set(a) { this._order = a; this._onChangeCallback(); } },
    }); Object.assign(Ub.prototype, {
      isEuler: !0,
      set(
        a,
        b,
        c,
        d,
      ) { this._x = a; this._y = b; this._z = c; this._order = d || this._order; this._onChangeCallback(); return this; },
      clone() { return new this.constructor(this._x, this._y, this._z, this._order); },
      copy(a) { this._x = a._x; this._y = a._y; this._z = a._z; this._order = a._order; this._onChangeCallback(); return this; },
      setFromRotationMatrix(a, b, c) {
        const d = O.clamp; let e = a.elements; a = e[0]; const f = e[4]; const g = e[8]; const k = e[1]; const l = e[5]; const m = e[9]; const h = e[2]; const p = e[6]; e = e[10]; b = b || this._order; b === 'XYZ' ? (this._y = Math.asin(d(g, -1, 1)), Math.abs(g) < 0.9999999
          ? (this._x = Math.atan2(-m, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(p, l), this._z = 0)) : b === 'YXZ' ? (this._x = Math.asin(-d(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._y = Math.atan2(g, e), this._z = Math.atan2(k, l)) : (this._y = Math.atan2(-h, a), this._z = 0)) : b === 'ZXY' ? (this._x = Math.asin(d(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._y = Math.atan2(-h, e), this._z = Math.atan2(-f, l)) : (this._y = 0, this._z = Math.atan2(k, a))) : b === 'ZYX' ? (this._y = Math.asin(-d(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(p, e), this._z = Math.atan2(k, a))
          : (this._x = 0, this._z = Math.atan2(-f, l))) : b === 'YZX' ? (this._z = Math.asin(d(k, -1, 1)), Math.abs(k) < 0.9999999 ? (this._x = Math.atan2(-m, l), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(g, e))) : b === 'XZY' ? (this._z = Math.asin(-d(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-m, e), this._y = 0)) : console.warn(`THREE.Euler: .setFromRotationMatrix() given unsupported order: ${b}`); this._order = b; !1 !== c && this._onChangeCallback(); return this;
      },
      setFromQuaternion(
        a,
        b,
        c,
      ) { Fi.makeRotationFromQuaternion(a); return this.setFromRotationMatrix(Fi, b, c); },
      setFromVector3(a, b) { return this.set(a.x, a.y, a.z, b || this._order); },
      reorder(a) { Gi.setFromEuler(this); return this.setFromQuaternion(Gi, a); },
      equals(a) { return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order; },
      fromArray(a) { this._x = a[0]; this._y = a[1]; this._z = a[2]; void 0 !== a[3] && (this._order = a[3]); this._onChangeCallback(); return this; },
      toArray(a, b) {
        void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this._x; a[b + 1] = this._y; a[b + 2] = this._z; a[b + 3] = this._order; return a;
      },
      toVector3(a) { return a ? a.set(this._x, this._y, this._z) : new n(this._x, this._y, this._z); },
      _onChange(a) { this._onChangeCallback = a; return this; },
      _onChangeCallback() {},
    }); Object.assign($f.prototype, {
      set(a) { this.mask = 1 << a | 0; },
      enable(a) { this.mask = this.mask | 1 << a | 0; },
      enableAll() { this.mask = -1; },
      toggle(a) { this.mask ^= 1 << a | 0; },
      disable(a) {
        this.mask &= ~(1 << a
| 0);
      },
      disableAll() { this.mask = 0; },
      test(a) { return (this.mask & a.mask) !== 0; },
    }); var nj = 0; const Hi = new n(); const od = new Da(); const zb = new P(); const Df = new n(); const Ae = new n(); const Qk = new n(); const Rk = new Da(); const Ii = new n(1, 0, 0); const Ji = new n(0, 1, 0); const Ki = new n(0, 0, 1); const Sk = { type: 'added' }; const Tk = { type: 'removed' }; D.DefaultUp = new n(0, 1, 0); D.DefaultMatrixAutoUpdate = !0; D.prototype = Object.assign(Object.create(Fa.prototype), {
      constructor: D,
      isObject3D: !0,
      onBeforeRender() {},
      onAfterRender() {},
      applyMatrix(a) {
        this.matrixAutoUpdate && this.updateMatrix();
        this.matrix.premultiply(a); this.matrix.decompose(this.position, this.quaternion, this.scale);
      },
      applyQuaternion(a) { this.quaternion.premultiply(a); return this; },
      setRotationFromAxisAngle(a, b) { this.quaternion.setFromAxisAngle(a, b); },
      setRotationFromEuler(a) { this.quaternion.setFromEuler(a, !0); },
      setRotationFromMatrix(a) { this.quaternion.setFromRotationMatrix(a); },
      setRotationFromQuaternion(a) { this.quaternion.copy(a); },
      rotateOnAxis(a, b) {
        od.setFromAxisAngle(a, b);
        this.quaternion.multiply(od); return this;
      },
      rotateOnWorldAxis(a, b) { od.setFromAxisAngle(a, b); this.quaternion.premultiply(od); return this; },
      rotateX(a) { return this.rotateOnAxis(Ii, a); },
      rotateY(a) { return this.rotateOnAxis(Ji, a); },
      rotateZ(a) { return this.rotateOnAxis(Ki, a); },
      translateOnAxis(a, b) { Hi.copy(a).applyQuaternion(this.quaternion); this.position.add(Hi.multiplyScalar(b)); return this; },
      translateX(a) { return this.translateOnAxis(Ii, a); },
      translateY(a) {
        return this.translateOnAxis(
          Ji,
          a,
        );
      },
      translateZ(a) { return this.translateOnAxis(Ki, a); },
      localToWorld(a) { return a.applyMatrix4(this.matrixWorld); },
      worldToLocal(a) { return a.applyMatrix4(zb.getInverse(this.matrixWorld)); },
      lookAt(a, b, c) {
        a.isVector3 ? Df.copy(a) : Df.set(a, b, c); a = this.parent; this.updateWorldMatrix(!0, !1); Ae.setFromMatrixPosition(this.matrixWorld); this.isCamera || this.isLight ? zb.lookAt(Ae, Df, this.up) : zb.lookAt(Df, Ae, this.up); this.quaternion.setFromRotationMatrix(zb); a && (zb.extractRotation(a.matrixWorld),
        od.setFromRotationMatrix(zb), this.quaternion.premultiply(od.inverse()));
      },
      add(a) { if (arguments.length > 1) { for (let b = 0; b < arguments.length; b++) this.add(arguments[b]); return this; } if (a === this) return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this; a && a.isObject3D ? (a.parent !== null && a.parent.remove(a), a.parent = this, this.children.push(a), a.dispatchEvent(Sk)) : console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', a); return this; },
      remove(a) {
        if (arguments.length
> 1) { for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]); return this; }b = this.children.indexOf(a); b !== -1 && (a.parent = null, this.children.splice(b, 1), a.dispatchEvent(Tk)); return this;
      },
      attach(a) { this.updateWorldMatrix(!0, !1); zb.getInverse(this.matrixWorld); a.parent !== null && (a.parent.updateWorldMatrix(!0, !1), zb.multiply(a.parent.matrixWorld)); a.applyMatrix(zb); a.updateWorldMatrix(!1, !1); this.add(a); return this; },
      getObjectById(a) {
        return this.getObjectByProperty(
          'id',
          a,
        );
      },
      getObjectByName(a) { return this.getObjectByProperty('name', a); },
      getObjectByProperty(a, b) { if (this[a] === b) return this; for (let c = 0, d = this.children.length; c < d; c++) { const e = this.children[c].getObjectByProperty(a, b); if (void 0 !== e) return e; } },
      getWorldPosition(a) { void 0 === a && (console.warn('THREE.Object3D: .getWorldPosition() target is now required'), a = new n()); this.updateMatrixWorld(!0); return a.setFromMatrixPosition(this.matrixWorld); },
      getWorldQuaternion(a) {
        void 0 === a && (console.warn('THREE.Object3D: .getWorldQuaternion() target is now required'),
        a = new Da()); this.updateMatrixWorld(!0); this.matrixWorld.decompose(Ae, a, Qk); return a;
      },
      getWorldScale(a) { void 0 === a && (console.warn('THREE.Object3D: .getWorldScale() target is now required'), a = new n()); this.updateMatrixWorld(!0); this.matrixWorld.decompose(Ae, Rk, a); return a; },
      getWorldDirection(a) { void 0 === a && (console.warn('THREE.Object3D: .getWorldDirection() target is now required'), a = new n()); this.updateMatrixWorld(!0); const b = this.matrixWorld.elements; return a.set(b[8], b[9], b[10]).normalize(); },
      raycast() {},
      traverse(a) { a(this); for (let b = this.children, c = 0, d = b.length; c < d; c++)b[c].traverse(a); },
      traverseVisible(a) { if (!1 !== this.visible) { a(this); for (let b = this.children, c = 0, d = b.length; c < d; c++)b[c].traverseVisible(a); } },
      traverseAncestors(a) { const b = this.parent; b !== null && (a(b), b.traverseAncestors(a)); },
      updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale); this.matrixWorldNeedsUpdate = !0; },
      updateMatrixWorld(a) {
        this.matrixAutoUpdate
&& this.updateMatrix(); if (this.matrixWorldNeedsUpdate || a) this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0; for (let b = this.children, c = 0, d = b.length; c < d; c++)b[c].updateMatrixWorld(a);
      },
      updateWorldMatrix(a, b) {
        let c = this.parent; !0 === a && c !== null && c.updateWorldMatrix(!0, !1); this.matrixAutoUpdate && this.updateMatrix(); this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(
          this.parent.matrixWorld,
          this.matrix,
        ); if (!0 === b) for (a = this.children, b = 0, c = a.length; b < c; b++)a[b].updateWorldMatrix(!1, !0);
      },
      toJSON(a) {
        function b(b, c) { void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a)); return c.uuid; } function c(a) { const b = []; let c; for (c in a) { const d = a[c]; delete d.metadata; b.push(d); } return b; } let d = void 0 === a || typeof a === 'string'; const e = {}; d && (a = {
          geometries: {}, materials: {}, textures: {}, images: {}, shapes: {},
        }, e.metadata = { version: 4.5, type: 'Object', generator: 'Object3D.toJSON' }); const f = {}; f.uuid = this.uuid; f.type = this.type; this.name
!== '' && (f.name = this.name); !0 === this.castShadow && (f.castShadow = !0); !0 === this.receiveShadow && (f.receiveShadow = !0); !1 === this.visible && (f.visible = !1); !1 === this.frustumCulled && (f.frustumCulled = !1); this.renderOrder !== 0 && (f.renderOrder = this.renderOrder); JSON.stringify(this.userData) !== '{}' && (f.userData = this.userData); f.layers = this.layers.mask; f.matrix = this.matrix.toArray(); !1 === this.matrixAutoUpdate && (f.matrixAutoUpdate = !1); this.isInstancedMesh && (f.type = 'InstancedMesh', f.count = this.count, f.instanceMatrix = this.instanceMatrix.toJSON()); if (this.isMesh || this.isLine || this.isPoints) { f.geometry = b(a.geometries, this.geometry); var g = this.geometry.parameters; if (void 0 !== g && void 0 !== g.shapes) if (g = g.shapes, Array.isArray(g)) for (var k = 0, l = g.length; k < l; k++)b(a.shapes, g[k]); else b(a.shapes, g); } if (void 0 !== this.material) if (Array.isArray(this.material)) { g = []; k = 0; for (l = this.material.length; k < l; k++)g.push(b(a.materials, this.material[k])); f.material = g; } else f.material = b(a.materials, this.material); if (this.children.length > 0) {
          for (f.children = [], k = 0; k < this.children.length; k++)f.children.push(this.children[k].toJSON(a).object);
        } if (d) { d = c(a.geometries); k = c(a.materials); l = c(a.textures); const m = c(a.images); g = c(a.shapes); d.length > 0 && (e.geometries = d); k.length > 0 && (e.materials = k); l.length > 0 && (e.textures = l); m.length > 0 && (e.images = m); g.length > 0 && (e.shapes = g); }e.object = f; return e;
      },
      clone(a) { return (new this.constructor()).copy(this, a); },
      copy(a, b) {
        void 0 === b && (b = !0); this.name = a.name; this.up.copy(a.up); this.position.copy(a.position); this.quaternion.copy(a.quaternion);
        this.scale.copy(a.scale); this.matrix.copy(a.matrix); this.matrixWorld.copy(a.matrixWorld); this.matrixAutoUpdate = a.matrixAutoUpdate; this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate; this.layers.mask = a.layers.mask; this.visible = a.visible; this.castShadow = a.castShadow; this.receiveShadow = a.receiveShadow; this.frustumCulled = a.frustumCulled; this.renderOrder = a.renderOrder; this.userData = JSON.parse(JSON.stringify(a.userData)); if (!0 === b) for (b = 0; b < a.children.length; b++) this.add(a.children[b].clone()); return this;
      },
    });
    pb.prototype = Object.assign(Object.create(D.prototype), {
      constructor: pb,
      isScene: !0,
      copy(a, b) { D.prototype.copy.call(this, a, b); a.background !== null && (this.background = a.background.clone()); a.environment !== null && (this.environment = a.environment.clone()); a.fog !== null && (this.fog = a.fog.clone()); a.overrideMaterial !== null && (this.overrideMaterial = a.overrideMaterial.clone()); this.autoUpdate = a.autoUpdate; this.matrixAutoUpdate = a.matrixAutoUpdate; return this; },
      toJSON(a) {
        const b = D.prototype.toJSON.call(
          this,
          a,
        ); this.background !== null && (b.object.background = this.background.toJSON(a)); this.environment !== null && (b.object.environment = this.environment.toJSON(a)); this.fog !== null && (b.object.fog = this.fog.toJSON()); return b;
      },
      dispose() { this.dispatchEvent({ type: 'dispose' }); },
    }); const Ab = [new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n()]; const Be = new n(); const Ef = new Sa(); const pd = new n(); const qd = new n(); const rd = new n(); const Ob = new n(); const Pb = new n(); const uc = new n(); const Ce = new n(); const Ff = new n(); const Gf = new n(); var Vb = new n(); Object.assign(Sa.prototype, {
      isBox3: !0,
      set(a, b) {
        this.min.copy(a);
        this.max.copy(b); return this;
      },
      setFromArray(a) { for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, k = 0, l = a.length; k < l; k += 3) { const m = a[k]; const h = a[k + 1]; const p = a[k + 2]; m < b && (b = m); h < c && (c = h); p < d && (d = p); m > e && (e = m); h > f && (f = h); p > g && (g = p); } this.min.set(b, c, d); this.max.set(e, f, g); return this; },
      setFromBufferAttribute(a) {
        for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, k = 0, l = a.count; k < l; k++) {
          const h = a.getX(k); const n = a.getY(k); const p = a.getZ(k); h < b && (b = h); n < c && (c = n);
          p < d && (d = p); h > e && (e = h); n > f && (f = n); p > g && (g = p);
        } this.min.set(b, c, d); this.max.set(e, f, g); return this;
      },
      setFromPoints(a) { this.makeEmpty(); for (let b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]); return this; },
      setFromCenterAndSize(a, b) { b = Be.copy(b).multiplyScalar(0.5); this.min.copy(a).sub(b); this.max.copy(a).add(b); return this; },
      setFromObject(a) { this.makeEmpty(); return this.expandByObject(a); },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) {
        this.min.copy(a.min);
        this.max.copy(a.max); return this;
      },
      makeEmpty() { this.min.x = this.min.y = this.min.z = Infinity; this.max.x = this.max.y = this.max.z = -Infinity; return this; },
      isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z; },
      getCenter(a) { void 0 === a && (console.warn('THREE.Box3: .getCenter() target is now required'), a = new n()); return this.isEmpty() ? a.set(0, 0, 0) : a.addVectors(this.min, this.max).multiplyScalar(0.5); },
      getSize(a) {
        void 0 === a && (console.warn('THREE.Box3: .getSize() target is now required'),
        a = new n()); return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min);
      },
      expandByPoint(a) { this.min.min(a); this.max.max(a); return this; },
      expandByVector(a) { this.min.sub(a); this.max.add(a); return this; },
      expandByScalar(a) { this.min.addScalar(-a); this.max.addScalar(a); return this; },
      expandByObject(a) {
        a.updateWorldMatrix(!1, !1); let b = a.geometry; void 0 !== b && (b.boundingBox === null && b.computeBoundingBox(), Ef.copy(b.boundingBox), Ef.applyMatrix4(a.matrixWorld), this.expandByPoint(Ef.min),
        this.expandByPoint(Ef.max)); a = a.children; b = 0; for (let c = a.length; b < c; b++) this.expandByObject(a[b]); return this;
      },
      containsPoint(a) { return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0; },
      containsBox(a) { return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z; },
      getParameter(a, b) {
        void 0 === b && (console.warn('THREE.Box3: .getParameter() target is now required'),
        b = new n()); return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z));
      },
      intersectsBox(a) { return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0; },
      intersectsSphere(a) { this.clampPoint(a.center, Be); return Be.distanceToSquared(a.center) <= a.radius * a.radius; },
      intersectsPlane(a) {
        if (a.normal.x > 0) {
          var b = a.normal.x * this.min.x; var c = a.normal.x * this.max.x;
        } else b = a.normal.x * this.max.x, c = a.normal.x * this.min.x; a.normal.y > 0 ? (b += a.normal.y * this.min.y, c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y); a.normal.z > 0 ? (b += a.normal.z * this.min.z, c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z); return b <= -a.constant && c >= -a.constant;
      },
      intersectsTriangle(a) {
        if (this.isEmpty()) return !1; this.getCenter(Ce); Ff.subVectors(this.max, Ce); pd.subVectors(a.a, Ce); qd.subVectors(a.b, Ce); rd.subVectors(
          a.c,
          Ce,
        ); Ob.subVectors(qd, pd); Pb.subVectors(rd, qd); uc.subVectors(pd, rd); a = [0, -Ob.z, Ob.y, 0, -Pb.z, Pb.y, 0, -uc.z, uc.y, Ob.z, 0, -Ob.x, Pb.z, 0, -Pb.x, uc.z, 0, -uc.x, -Ob.y, Ob.x, 0, -Pb.y, Pb.x, 0, -uc.y, uc.x, 0]; if (!ag(a, pd, qd, rd, Ff)) return !1; a = [1, 0, 0, 0, 1, 0, 0, 0, 1]; if (!ag(a, pd, qd, rd, Ff)) return !1; Gf.crossVectors(Ob, Pb); a = [Gf.x, Gf.y, Gf.z]; return ag(a, pd, qd, rd, Ff);
      },
      clampPoint(a, b) { void 0 === b && (console.warn('THREE.Box3: .clampPoint() target is now required'), b = new n()); return b.copy(a).clamp(this.min, this.max); },
      distanceToPoint(a) {
        return Be.copy(a).clamp(
          this.min,
          this.max,
        ).sub(a).length();
      },
      getBoundingSphere(a) { void 0 === a && console.error('THREE.Box3: .getBoundingSphere() target is now required'); this.getCenter(a.center); a.radius = 0.5 * this.getSize(Be).length(); return a; },
      intersect(a) { this.min.max(a.min); this.max.min(a.max); this.isEmpty() && this.makeEmpty(); return this; },
      union(a) { this.min.min(a.min); this.max.max(a.max); return this; },
      applyMatrix4(a) {
        if (this.isEmpty()) return this; Ab[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(a);
        Ab[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(a); Ab[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(a); Ab[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(a); Ab[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(a); Ab[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(a); Ab[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(a); Ab[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(a); this.setFromPoints(Ab); return this;
      },
      translate(a) {
        this.min.add(a); this.max.add(a);
        return this;
      },
      equals(a) { return a.min.equals(this.min) && a.max.equals(this.max); },
    }); const Uk = new Sa(); Object.assign(qb.prototype, {
      set(a, b) { this.center.copy(a); this.radius = b; return this; },
      setFromPoints(a, b) { const c = this.center; void 0 !== b ? c.copy(b) : Uk.setFromPoints(a).getCenter(c); for (let d = b = 0, e = a.length; d < e; d++)b = Math.max(b, c.distanceToSquared(a[d])); this.radius = Math.sqrt(b); return this; },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) {
        this.center.copy(a.center);
        this.radius = a.radius; return this;
      },
      empty() { return this.radius <= 0; },
      containsPoint(a) { return a.distanceToSquared(this.center) <= this.radius * this.radius; },
      distanceToPoint(a) { return a.distanceTo(this.center) - this.radius; },
      intersectsSphere(a) { const b = this.radius + a.radius; return a.center.distanceToSquared(this.center) <= b * b; },
      intersectsBox(a) { return a.intersectsSphere(this); },
      intersectsPlane(a) { return Math.abs(a.distanceToPoint(this.center)) <= this.radius; },
      clampPoint(
        a,
        b,
      ) { const c = this.center.distanceToSquared(a); void 0 === b && (console.warn('THREE.Sphere: .clampPoint() target is now required'), b = new n()); b.copy(a); c > this.radius * this.radius && (b.sub(this.center).normalize(), b.multiplyScalar(this.radius).add(this.center)); return b; },
      getBoundingBox(a) { void 0 === a && (console.warn('THREE.Sphere: .getBoundingBox() target is now required'), a = new Sa()); a.set(this.center, this.center); a.expandByScalar(this.radius); return a; },
      applyMatrix4(a) {
        this.center.applyMatrix4(a);
        this.radius *= a.getMaxScaleOnAxis(); return this;
      },
      translate(a) { this.center.add(a); return this; },
      equals(a) { return a.center.equals(this.center) && a.radius === this.radius; },
    }); const Bb = new n(); const ah = new n(); const Hf = new n(); const Qb = new n(); const bh = new n(); const If = new n(); const
      ch = new n(); Object.assign(Wb.prototype, {
      set(a, b) { this.origin.copy(a); this.direction.copy(b); return this; },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) { this.origin.copy(a.origin); this.direction.copy(a.direction); return this; },
      at(a, b) { void 0 === b && (console.warn('THREE.Ray: .at() target is now required'), b = new n()); return b.copy(this.direction).multiplyScalar(a).add(this.origin); },
      lookAt(a) { this.direction.copy(a).sub(this.origin).normalize(); return this; },
      recast(a) { this.origin.copy(this.at(a, Bb)); return this; },
      closestPointToPoint(a, b) {
        void 0 === b && (console.warn('THREE.Ray: .closestPointToPoint() target is now required'), b = new n()); b.subVectors(a, this.origin); a = b.dot(this.direction); return a < 0
          ? b.copy(this.origin) : b.copy(this.direction).multiplyScalar(a).add(this.origin);
      },
      distanceToPoint(a) { return Math.sqrt(this.distanceSqToPoint(a)); },
      distanceSqToPoint(a) { const b = Bb.subVectors(a, this.origin).dot(this.direction); if (b < 0) return this.origin.distanceToSquared(a); Bb.copy(this.direction).multiplyScalar(b).add(this.origin); return Bb.distanceToSquared(a); },
      distanceSqToSegment(a, b, c, d) {
        ah.copy(a).add(b).multiplyScalar(0.5); Hf.copy(b).sub(a).normalize(); Qb.copy(this.origin).sub(ah);
        let e = 0.5 * a.distanceTo(b); let f = -this.direction.dot(Hf); const g = Qb.dot(this.direction); const k = -Qb.dot(Hf); const l = Qb.lengthSq(); const h = Math.abs(1 - f * f); if (h > 0) {
          a = f * k - g; b = f * g - k; const n = e * h; a >= 0 ? b >= -n ? b <= n ? (e = 1 / h, a *= e, b *= e, f = a * (a + f * b + 2 * g) + b * (f * a + b + 2 * k) + l) : (b = e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * k) + l) : (b = -e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * k) + l) : b <= -n ? (a = Math.max(0, -(-f * e + g)), b = a > 0 ? -e : Math.min(Math.max(-e, -k), e), f = -a * a + b * (b + 2 * k) + l) : b <= n ? (a = 0, b = Math.min(Math.max(-e, -k), e), f = b * (b + 2 * k) + l) : (a = Math.max(0, -(f * e + g)), b = a > 0 ? e : Math.min(Math.max(
            -e,
            -k,
          ), e), f = -a * a + b * (b + 2 * k) + l);
        } else b = f > 0 ? -e : e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * k) + l; c && c.copy(this.direction).multiplyScalar(a).add(this.origin); d && d.copy(Hf).multiplyScalar(b).add(ah); return f;
      },
      intersectSphere(a, b) { Bb.subVectors(a.center, this.origin); let c = Bb.dot(this.direction); let d = Bb.dot(Bb) - c * c; a = a.radius * a.radius; if (d > a) return null; a = Math.sqrt(a - d); d = c - a; c += a; return d < 0 && c < 0 ? null : d < 0 ? this.at(c, b) : this.at(d, b); },
      intersectsSphere(a) {
        return this.distanceSqToPoint(a.center) <= a.radius
* a.radius;
      },
      distanceToPlane(a) { const b = a.normal.dot(this.direction); if (b === 0) return a.distanceToPoint(this.origin) === 0 ? 0 : null; a = -(this.origin.dot(a.normal) + a.constant) / b; return a >= 0 ? a : null; },
      intersectPlane(a, b) { a = this.distanceToPlane(a); return a === null ? null : this.at(a, b); },
      intersectsPlane(a) { const b = a.distanceToPoint(this.origin); return b === 0 || a.normal.dot(this.direction) * b < 0 ? !0 : !1; },
      intersectBox(a, b) {
        let c = 1 / this.direction.x; let d = 1 / this.direction.y; const e = 1 / this.direction.z;
        const f = this.origin; if (c >= 0) { var g = (a.min.x - f.x) * c; c *= a.max.x - f.x; } else g = (a.max.x - f.x) * c, c *= a.min.x - f.x; if (d >= 0) { var k = (a.min.y - f.y) * d; d *= a.max.y - f.y; } else k = (a.max.y - f.y) * d, d *= a.min.y - f.y; if (g > d || k > c) return null; if (k > g || g !== g)g = k; if (d < c || c !== c)c = d; e >= 0 ? (k = (a.min.z - f.z) * e, a = (a.max.z - f.z) * e) : (k = (a.max.z - f.z) * e, a = (a.min.z - f.z) * e); if (g > a || k > c) return null; if (k > g || g !== g)g = k; if (a < c || c !== c)c = a; return c < 0 ? null : this.at(g >= 0 ? g : c, b);
      },
      intersectsBox(a) { return this.intersectBox(a, Bb) !== null; },
      intersectTriangle(
        a,
        b,
        c,
        d,
        e,
      ) { bh.subVectors(b, a); If.subVectors(c, a); ch.crossVectors(bh, If); b = this.direction.dot(ch); if (b > 0) { if (d) return null; d = 1; } else if (b < 0)d = -1, b = -b; else return null; Qb.subVectors(this.origin, a); a = d * this.direction.dot(If.crossVectors(Qb, If)); if (a < 0) return null; c = d * this.direction.dot(bh.cross(Qb)); if (c < 0 || a + c > b) return null; a = -d * Qb.dot(ch); return a < 0 ? null : this.at(a / b, e); },
      applyMatrix4(a) { this.origin.applyMatrix4(a); this.direction.transformDirection(a); return this; },
      equals(a) {
        return a.origin.equals(this.origin)
&& a.direction.equals(this.direction);
      },
    }); const dh = new n(); const Vk = new n(); const
      Wk = new za(); Object.assign(Ta.prototype, {
      isPlane: !0,
      set(a, b) { this.normal.copy(a); this.constant = b; return this; },
      setComponents(a, b, c, d) { this.normal.set(a, b, c); this.constant = d; return this; },
      setFromNormalAndCoplanarPoint(a, b) { this.normal.copy(a); this.constant = -b.dot(this.normal); return this; },
      setFromCoplanarPoints(a, b, c) {
        b = dh.subVectors(c, b).cross(Vk.subVectors(a, b)).normalize(); this.setFromNormalAndCoplanarPoint(
          b,
          a,
        ); return this;
      },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) { this.normal.copy(a.normal); this.constant = a.constant; return this; },
      normalize() { const a = 1 / this.normal.length(); this.normal.multiplyScalar(a); this.constant *= a; return this; },
      negate() { this.constant *= -1; this.normal.negate(); return this; },
      distanceToPoint(a) { return this.normal.dot(a) + this.constant; },
      distanceToSphere(a) { return this.distanceToPoint(a.center) - a.radius; },
      projectPoint(
        a,
        b,
      ) { void 0 === b && (console.warn('THREE.Plane: .projectPoint() target is now required'), b = new n()); return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a); },
      intersectLine(a, b) { void 0 === b && (console.warn('THREE.Plane: .intersectLine() target is now required'), b = new n()); const c = a.delta(dh); let d = this.normal.dot(c); if (d === 0) { if (this.distanceToPoint(a.start) === 0) return b.copy(a.start); } else if (d = -(a.start.dot(this.normal) + this.constant) / d, !(d < 0 || d > 1)) return b.copy(c).multiplyScalar(d).add(a.start); },
      intersectsLine(a) { const b = this.distanceToPoint(a.start); a = this.distanceToPoint(a.end); return b < 0 && a > 0 || a < 0 && b > 0; },
      intersectsBox(a) { return a.intersectsPlane(this); },
      intersectsSphere(a) { return a.intersectsPlane(this); },
      coplanarPoint(a) { void 0 === a && (console.warn('THREE.Plane: .coplanarPoint() target is now required'), a = new n()); return a.copy(this.normal).multiplyScalar(-this.constant); },
      applyMatrix4(a, b) {
        b = b || Wk.getNormalMatrix(a); a = this.coplanarPoint(dh).applyMatrix4(a);
        b = this.normal.applyMatrix3(b).normalize(); this.constant = -a.dot(b); return this;
      },
      translate(a) { this.constant -= a.dot(this.normal); return this; },
      equals(a) { return a.normal.equals(this.normal) && a.constant === this.constant; },
    }); const bb = new n(); const Cb = new n(); const eh = new n(); const Db = new n(); const sd = new n(); const td = new n(); const Li = new n(); const fh = new n(); const gh = new n(); const
      hh = new n(); Object.assign(ma, {
      getNormal(a, b, c, d) {
        void 0 === d && (console.warn('THREE.Triangle: .getNormal() target is now required'), d = new n()); d.subVectors(c, b); bb.subVectors(a, b);
        d.cross(bb); a = d.lengthSq(); return a > 0 ? d.multiplyScalar(1 / Math.sqrt(a)) : d.set(0, 0, 0);
      },
      getBarycoord(a, b, c, d, e) { bb.subVectors(d, b); Cb.subVectors(c, b); eh.subVectors(a, b); a = bb.dot(bb); b = bb.dot(Cb); c = bb.dot(eh); let f = Cb.dot(Cb); d = Cb.dot(eh); let g = a * f - b * b; void 0 === e && (console.warn('THREE.Triangle: .getBarycoord() target is now required'), e = new n()); if (g === 0) return e.set(-2, -1, -1); g = 1 / g; f = (f * c - b * d) * g; a = (a * d - b * c) * g; return e.set(1 - f - a, a, f); },
      containsPoint(a, b, c, d) {
        ma.getBarycoord(a, b, c, d, Db);
        return Db.x >= 0 && Db.y >= 0 && Db.x + Db.y <= 1;
      },
      getUV(a, b, c, d, e, f, g, k) { this.getBarycoord(a, b, c, d, Db); k.set(0, 0); k.addScaledVector(e, Db.x); k.addScaledVector(f, Db.y); k.addScaledVector(g, Db.z); return k; },
      isFrontFacing(a, b, c, d) { bb.subVectors(c, b); Cb.subVectors(a, b); return bb.cross(Cb).dot(d) < 0 ? !0 : !1; },
    }); Object.assign(ma.prototype, {
      set(a, b, c) { this.a.copy(a); this.b.copy(b); this.c.copy(c); return this; },
      setFromPointsAndIndices(a, b, c, d) {
        this.a.copy(a[b]); this.b.copy(a[c]); this.c.copy(a[d]);
        return this;
      },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) { this.a.copy(a.a); this.b.copy(a.b); this.c.copy(a.c); return this; },
      getArea() { bb.subVectors(this.c, this.b); Cb.subVectors(this.a, this.b); return 0.5 * bb.cross(Cb).length(); },
      getMidpoint(a) { void 0 === a && (console.warn('THREE.Triangle: .getMidpoint() target is now required'), a = new n()); return a.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3); },
      getNormal(a) {
        return ma.getNormal(
          this.a,
          this.b,
          this.c,
          a,
        );
      },
      getPlane(a) { void 0 === a && (console.warn('THREE.Triangle: .getPlane() target is now required'), a = new Ta()); return a.setFromCoplanarPoints(this.a, this.b, this.c); },
      getBarycoord(a, b) { return ma.getBarycoord(a, this.a, this.b, this.c, b); },
      getUV(a, b, c, d, e) { return ma.getUV(a, this.a, this.b, this.c, b, c, d, e); },
      containsPoint(a) { return ma.containsPoint(a, this.a, this.b, this.c); },
      isFrontFacing(a) { return ma.isFrontFacing(this.a, this.b, this.c, a); },
      intersectsBox(a) { return a.intersectsTriangle(this); },
      closestPointToPoint(a, b) {
        void 0 === b && (console.warn('THREE.Triangle: .closestPointToPoint() target is now required'), b = new n()); const c = this.a; let d = this.b; let e = this.c; sd.subVectors(d, c); td.subVectors(e, c); fh.subVectors(a, c); let f = sd.dot(fh); let g = td.dot(fh); if (f <= 0 && g <= 0) return b.copy(c); gh.subVectors(a, d); const k = sd.dot(gh); const l = td.dot(gh); if (k >= 0 && l <= k) return b.copy(d); let h = f * l - k * g; if (h <= 0 && f >= 0 && k <= 0) return d = f / (f - k), b.copy(c).addScaledVector(sd, d); hh.subVectors(a, e); a = sd.dot(hh); const v = td.dot(hh); if (v
>= 0 && a <= v) return b.copy(e); f = a * g - f * v; if (f <= 0 && g >= 0 && v <= 0) return h = g / (g - v), b.copy(c).addScaledVector(td, h); g = k * v - a * l; if (g <= 0 && l - k >= 0 && a - v >= 0) return Li.subVectors(e, d), h = (l - k) / (l - k + (a - v)), b.copy(d).addScaledVector(Li, h); e = 1 / (g + f + h); d = f * e; h *= e; return b.copy(c).addScaledVector(sd, d).addScaledVector(td, h);
      },
      equals(a) { return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c); },
    }); const Mi = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
    const Ca = { h: 0, s: 0, l: 0 }; const Jf = { h: 0, s: 0, l: 0 }; Object.assign(y.prototype, {
      isColor: !0,
      r: 1,
      g: 1,
      b: 1,
      set(a) { a && a.isColor ? this.copy(a) : typeof a === 'number' ? this.setHex(a) : typeof a === 'string' && this.setStyle(a); return this; },
      setScalar(a) { this.b = this.g = this.r = a; return this; },
      setHex(a) { a = Math.floor(a); this.r = (a >> 16 & 255) / 255; this.g = (a >> 8 & 255) / 255; this.b = (a & 255) / 255; return this; },
      setRGB(a, b, c) { this.r = a; this.g = b; this.b = c; return this; },
      setHSL(a, b, c) {
        a = O.euclideanModulo(a, 1); b = O.clamp(
          b,
          0,
          1,
        ); c = O.clamp(c, 0, 1); b === 0 ? this.r = this.g = this.b = c : (b = c <= 0.5 ? c * (1 + b) : c + b - c * b, c = 2 * c - b, this.r = bg(c, b, a + 1 / 3), this.g = bg(c, b, a), this.b = bg(c, b, a - 1 / 3)); return this;
      },
      setStyle(a) {
        function b(b) { void 0 !== b && parseFloat(b) < 1 && console.warn(`THREE.Color: Alpha component of ${a} will be ignored.`); } let c; if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
          var d = c[2]; switch (c[1]) {
            case 'rgb': case 'rgba': if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
              return this.r = Math.min(255, parseInt(
                c[1],
                10,
              )) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b(c[5]), this;
            } if (c = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, b(c[5]), this; break; case 'hsl': case 'hsla': if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
              d = parseFloat(c[1]) / 360; const e = parseInt(
                c[2],
                10,
              ) / 100; const f = parseInt(c[3], 10) / 100; b(c[5]); return this.setHSL(d, e, f);
            }
          }
        } else if (c = /^#([A-Fa-f0-9]+)$/.exec(a)) { c = c[1]; d = c.length; if (d === 3) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this; if (d === 6) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this; } return a && a.length > 0 ? this.setColorName(a) : this;
      },
      setColorName(a) { const b = Mi[a]; void 0 !== b ? this.setHex(b) : console.warn(`THREE.Color: Unknown color ${a}`); return this; },
      clone() { return new this.constructor(this.r, this.g, this.b); },
      copy(a) { this.r = a.r; this.g = a.g; this.b = a.b; return this; },
      copyGammaToLinear(a, b) { void 0 === b && (b = 2); this.r = a.r ** b; this.g = a.g ** b; this.b = a.b ** b; return this; },
      copyLinearToGamma(a, b) {
        void 0 === b && (b = 2); b = b > 0 ? 1 / b : 1; this.r = a.r ** b; this.g = a.g ** b; this.b = a.b ** b; return this;
      },
      convertGammaToLinear(a) { this.copyGammaToLinear(this, a); return this; },
      convertLinearToGamma(a) { this.copyLinearToGamma(this, a); return this; },
      copySRGBToLinear(a) { this.r = cg(a.r); this.g = cg(a.g); this.b = cg(a.b); return this; },
      copyLinearToSRGB(a) { this.r = dg(a.r); this.g = dg(a.g); this.b = dg(a.b); return this; },
      convertSRGBToLinear() { this.copySRGBToLinear(this); return this; },
      convertLinearToSRGB() { this.copyLinearToSRGB(this); return this; },
      getHex() {
        return 255
* this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
      },
      getHexString() { return (`000000${this.getHex().toString(16)}`).slice(-6); },
      getHSL(a) { void 0 === a && (console.warn('THREE.Color: .getHSL() target is now required'), a = { h: 0, s: 0, l: 0 }); const b = this.r; const c = this.g; const d = this.b; const e = Math.max(b, c, d); let f = Math.min(b, c, d); let g; const k = (f + e) / 2; if (f === e)f = g = 0; else { const l = e - f; f = k <= 0.5 ? l / (e + f) : l / (2 - e - f); switch (e) { case b: g = (c - d) / l + (c < d ? 6 : 0); break; case c: g = (d - b) / l + 2; break; case d: g = (b - c) / l + 4; }g /= 6; }a.h = g; a.s = f; a.l = k; return a; },
      getStyle() {
        return `rgb(${
          255 * this.r | 0},${255 * this.g | 0},${255 * this.b | 0})`;
      },
      offsetHSL(a, b, c) { this.getHSL(Ca); Ca.h += a; Ca.s += b; Ca.l += c; this.setHSL(Ca.h, Ca.s, Ca.l); return this; },
      add(a) { this.r += a.r; this.g += a.g; this.b += a.b; return this; },
      addColors(a, b) { this.r = a.r + b.r; this.g = a.g + b.g; this.b = a.b + b.b; return this; },
      addScalar(a) { this.r += a; this.g += a; this.b += a; return this; },
      sub(a) { this.r = Math.max(0, this.r - a.r); this.g = Math.max(0, this.g - a.g); this.b = Math.max(0, this.b - a.b); return this; },
      multiply(a) {
        this.r
*= a.r; this.g *= a.g; this.b *= a.b; return this;
      },
      multiplyScalar(a) { this.r *= a; this.g *= a; this.b *= a; return this; },
      lerp(a, b) { this.r += (a.r - this.r) * b; this.g += (a.g - this.g) * b; this.b += (a.b - this.b) * b; return this; },
      lerpHSL(a, b) { this.getHSL(Ca); a.getHSL(Jf); a = O.lerp(Ca.h, Jf.h, b); const c = O.lerp(Ca.s, Jf.s, b); b = O.lerp(Ca.l, Jf.l, b); this.setHSL(a, c, b); return this; },
      equals(a) { return a.r === this.r && a.g === this.g && a.b === this.b; },
      fromArray(a, b) {
        void 0 === b && (b = 0); this.r = a[b]; this.g = a[b + 1];
        this.b = a[b + 2]; return this;
      },
      toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this.r; a[b + 1] = this.g; a[b + 2] = this.b; return a; },
      toJSON() { return this.getHex(); },
    }); y.NAMES = Mi; Object.assign(Dc.prototype, {
      clone() { return (new this.constructor()).copy(this); },
      copy(a) {
        this.a = a.a; this.b = a.b; this.c = a.c; this.normal.copy(a.normal); this.color.copy(a.color); this.materialIndex = a.materialIndex; for (var b = 0, c = a.vertexNormals.length; b < c; b++) this.vertexNormals[b] = a.vertexNormals[b].clone();
        b = 0; for (c = a.vertexColors.length; b < c; b++) this.vertexColors[b] = a.vertexColors[b].clone(); return this;
      },
    }); var oj = 0; L.prototype = Object.assign(Object.create(Fa.prototype), {
      constructor: L,
      isMaterial: !0,
      onBeforeCompile() {},
      setValues(a) {
        if (void 0 !== a) {
          for (const b in a) {
            const c = a[b]; if (void 0 === c)console.warn(`THREE.Material: '${b}' parameter is undefined.`); else if (b === 'shading') {
              console.warn(`THREE.${this.type}: .shading has been removed. Use the boolean .flatShading instead.`), this.flatShading = c === 1 ? !0 : !1;
            } else { const d = this[b]; void 0 === d ? console.warn(`THREE.${this.type}: '${b}' is not a property of this material.`) : d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] = c; }
          }
        }
      },
      toJSON(a) {
        function b(a) { const b = []; let c; for (c in a) { const d = a[c]; delete d.metadata; b.push(d); } return b; } let c = void 0 === a || typeof a === 'string'; c && (a = { textures: {}, images: {} }); const d = { metadata: { version: 4.5, type: 'Material', generator: 'Material.toJSON' } }; d.uuid = this.uuid; d.type = this.type; this.name !== '' && (d.name = this.name); this.color && this.color.isColor && (d.color = this.color.getHex()); void 0 !== this.roughness && (d.roughness = this.roughness); void 0 !== this.metalness && (d.metalness = this.metalness); this.sheen && this.sheen.isColor && (d.sheen = this.sheen.getHex()); this.emissive && this.emissive.isColor && (d.emissive = this.emissive.getHex()); this.emissiveIntensity && this.emissiveIntensity !== 1 && (d.emissiveIntensity = this.emissiveIntensity); this.specular && this.specular.isColor && (d.specular = this.specular.getHex()); void 0 !== this.shininess
&& (d.shininess = this.shininess); void 0 !== this.clearcoat && (d.clearcoat = this.clearcoat); void 0 !== this.clearcoatRoughness && (d.clearcoatRoughness = this.clearcoatRoughness); this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (d.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(a).uuid, d.clearcoatNormalScale = this.clearcoatNormalScale.toArray()); this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid); this.matcap && this.matcap.isTexture && (d.matcap = this.matcap.toJSON(a).uuid); this.alphaMap && this.alphaMap.isTexture
&& (d.alphaMap = this.alphaMap.toJSON(a).uuid); this.lightMap && this.lightMap.isTexture && (d.lightMap = this.lightMap.toJSON(a).uuid); this.aoMap && this.aoMap.isTexture && (d.aoMap = this.aoMap.toJSON(a).uuid, d.aoMapIntensity = this.aoMapIntensity); this.bumpMap && this.bumpMap.isTexture && (d.bumpMap = this.bumpMap.toJSON(a).uuid, d.bumpScale = this.bumpScale); this.normalMap && this.normalMap.isTexture && (d.normalMap = this.normalMap.toJSON(a).uuid, d.normalMapType = this.normalMapType, d.normalScale = this.normalScale.toArray()); this.displacementMap
&& this.displacementMap.isTexture && (d.displacementMap = this.displacementMap.toJSON(a).uuid, d.displacementScale = this.displacementScale, d.displacementBias = this.displacementBias); this.roughnessMap && this.roughnessMap.isTexture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid); this.metalnessMap && this.metalnessMap.isTexture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid); this.emissiveMap && this.emissiveMap.isTexture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid); this.specularMap && this.specularMap.isTexture
&& (d.specularMap = this.specularMap.toJSON(a).uuid); this.envMap && this.envMap.isTexture && (d.envMap = this.envMap.toJSON(a).uuid, d.reflectivity = this.reflectivity, d.refractionRatio = this.refractionRatio, void 0 !== this.combine && (d.combine = this.combine), void 0 !== this.envMapIntensity && (d.envMapIntensity = this.envMapIntensity)); this.gradientMap && this.gradientMap.isTexture && (d.gradientMap = this.gradientMap.toJSON(a).uuid); void 0 !== this.size && (d.size = this.size); void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation);
        this.blending !== 1 && (d.blending = this.blending); !0 === this.flatShading && (d.flatShading = this.flatShading); this.side !== 0 && (d.side = this.side); this.vertexColors !== 0 && (d.vertexColors = this.vertexColors); this.opacity < 1 && (d.opacity = this.opacity); !0 === this.transparent && (d.transparent = this.transparent); d.depthFunc = this.depthFunc; d.depthTest = this.depthTest; d.depthWrite = this.depthWrite; d.stencilWrite = this.stencilWrite; d.stencilWriteMask = this.stencilWriteMask; d.stencilFunc = this.stencilFunc; d.stencilRef = this.stencilRef;
        d.stencilFuncMask = this.stencilFuncMask; d.stencilFail = this.stencilFail; d.stencilZFail = this.stencilZFail; d.stencilZPass = this.stencilZPass; this.rotation && this.rotation !== 0 && (d.rotation = this.rotation); !0 === this.polygonOffset && (d.polygonOffset = !0); this.polygonOffsetFactor !== 0 && (d.polygonOffsetFactor = this.polygonOffsetFactor); this.polygonOffsetUnits !== 0 && (d.polygonOffsetUnits = this.polygonOffsetUnits); this.linewidth && this.linewidth !== 1 && (d.linewidth = this.linewidth); void 0 !== this.dashSize && (d.dashSize = this.dashSize);
        void 0 !== this.gapSize && (d.gapSize = this.gapSize); void 0 !== this.scale && (d.scale = this.scale); !0 === this.dithering && (d.dithering = !0); this.alphaTest > 0 && (d.alphaTest = this.alphaTest); !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha); !0 === this.wireframe && (d.wireframe = this.wireframe); this.wireframeLinewidth > 1 && (d.wireframeLinewidth = this.wireframeLinewidth); this.wireframeLinecap !== 'round' && (d.wireframeLinecap = this.wireframeLinecap); this.wireframeLinejoin !== 'round' && (d.wireframeLinejoin = this.wireframeLinejoin); !0 === this.morphTargets && (d.morphTargets = !0); !0 === this.morphNormals && (d.morphNormals = !0); !0 === this.skinning && (d.skinning = !0); !1 === this.visible && (d.visible = !1); !1 === this.toneMapped && (d.toneMapped = !1); JSON.stringify(this.userData) !== '{}' && (d.userData = this.userData); c && (c = b(a.textures), a = b(a.images), c.length > 0 && (d.textures = c), a.length > 0 && (d.images = a)); return d;
      },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) {
        this.name = a.name; this.fog = a.fog; this.blending = a.blending; this.side = a.side; this.flatShading = a.flatShading; this.vertexTangents = a.vertexTangents; this.vertexColors = a.vertexColors; this.opacity = a.opacity; this.transparent = a.transparent; this.blendSrc = a.blendSrc; this.blendDst = a.blendDst; this.blendEquation = a.blendEquation; this.blendSrcAlpha = a.blendSrcAlpha; this.blendDstAlpha = a.blendDstAlpha; this.blendEquationAlpha = a.blendEquationAlpha; this.depthFunc = a.depthFunc; this.depthTest = a.depthTest; this.depthWrite = a.depthWrite; this.stencilWriteMask = a.stencilWriteMask;
        this.stencilFunc = a.stencilFunc; this.stencilRef = a.stencilRef; this.stencilFuncMask = a.stencilFuncMask; this.stencilFail = a.stencilFail; this.stencilZFail = a.stencilZFail; this.stencilZPass = a.stencilZPass; this.stencilWrite = a.stencilWrite; const b = a.clippingPlanes; let c = null; if (b !== null) { const d = b.length; c = Array(d); for (let e = 0; e !== d; ++e)c[e] = b[e].clone(); } this.clippingPlanes = c; this.clipIntersection = a.clipIntersection; this.clipShadows = a.clipShadows; this.shadowSide = a.shadowSide; this.colorWrite = a.colorWrite; this.precision = a.precision; this.polygonOffset = a.polygonOffset; this.polygonOffsetFactor = a.polygonOffsetFactor; this.polygonOffsetUnits = a.polygonOffsetUnits; this.dithering = a.dithering; this.alphaTest = a.alphaTest; this.premultipliedAlpha = a.premultipliedAlpha; this.visible = a.visible; this.toneMapped = a.toneMapped; this.userData = JSON.parse(JSON.stringify(a.userData)); return this;
      },
      dispose() { this.dispatchEvent({ type: 'dispose' }); },
    }); Object.defineProperty(L.prototype, 'needsUpdate', { set(a) { !0 === a && this.version++; } });
    Oa.prototype = Object.create(L.prototype); Oa.prototype.constructor = Oa; Oa.prototype.isMeshBasicMaterial = !0; Oa.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.color.copy(a.color); this.map = a.map; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.specularMap = a.specularMap; this.alphaMap = a.alphaMap; this.envMap = a.envMap; this.combine = a.combine; this.reflectivity = a.reflectivity; this.refractionRatio = a.refractionRatio; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap; this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning; this.morphTargets = a.morphTargets; return this;
    }; const X = new n(); Object.defineProperty(K.prototype, 'needsUpdate', { set(a) { !0 === a && this.version++; } }); Object.assign(K.prototype, {
      isBufferAttribute: !0,
      onUploadCallback() {},
      setUsage(a) { this.usage = a; return this; },
      copy(a) {
        this.name = a.name; this.array = new a.array.constructor(a.array);
        this.itemSize = a.itemSize; this.count = a.count; this.normalized = a.normalized; this.usage = a.usage; return this;
      },
      copyAt(a, b, c) { a *= this.itemSize; c *= b.itemSize; for (let d = 0, e = this.itemSize; d < e; d++) this.array[a + d] = b.array[c + d]; return this; },
      copyArray(a) { this.array.set(a); return this; },
      copyColorsArray(a) {
        for (let b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
          let f = a[d]; void 0 === f && (console.warn('THREE.BufferAttribute.copyColorsArray(): color is undefined', d), f = new y()); b[c++] = f.r; b[c++] = f.g; b[c++] = f.b;
        } return this;
      },
      copyVector2sArray(a) { for (let b = this.array, c = 0, d = 0, e = a.length; d < e; d++) { let f = a[d]; void 0 === f && (console.warn('THREE.BufferAttribute.copyVector2sArray(): vector is undefined', d), f = new x()); b[c++] = f.x; b[c++] = f.y; } return this; },
      copyVector3sArray(a) { for (let b = this.array, c = 0, d = 0, e = a.length; d < e; d++) { let f = a[d]; void 0 === f && (console.warn('THREE.BufferAttribute.copyVector3sArray(): vector is undefined', d), f = new n()); b[c++] = f.x; b[c++] = f.y; b[c++] = f.z; } return this; },
      copyVector4sArray(a) {
        for (let b = this.array, c = 0, d = 0, e = a.length; d < e; d++) { let f = a[d]; void 0 === f && (console.warn('THREE.BufferAttribute.copyVector4sArray(): vector is undefined', d), f = new S()); b[c++] = f.x; b[c++] = f.y; b[c++] = f.z; b[c++] = f.w; } return this;
      },
      applyMatrix3(a) { for (let b = 0, c = this.count; b < c; b++)X.x = this.getX(b), X.y = this.getY(b), X.z = this.getZ(b), X.applyMatrix3(a), this.setXYZ(b, X.x, X.y, X.z); return this; },
      applyMatrix4(a) {
        for (let b = 0, c = this.count; b < c; b++) {
          X.x = this.getX(b), X.y = this.getY(b), X.z = this.getZ(b), X.applyMatrix4(a),
          this.setXYZ(b, X.x, X.y, X.z);
        } return this;
      },
      applyNormalMatrix(a) { for (let b = 0, c = this.count; b < c; b++)X.x = this.getX(b), X.y = this.getY(b), X.z = this.getZ(b), X.applyNormalMatrix(a), this.setXYZ(b, X.x, X.y, X.z); return this; },
      transformDirection(a) { for (let b = 0, c = this.count; b < c; b++)X.x = this.getX(b), X.y = this.getY(b), X.z = this.getZ(b), X.transformDirection(a), this.setXYZ(b, X.x, X.y, X.z); return this; },
      set(a, b) { void 0 === b && (b = 0); this.array.set(a, b); return this; },
      getX(a) {
        return this.array[a
* this.itemSize];
      },
      setX(a, b) { this.array[a * this.itemSize] = b; return this; },
      getY(a) { return this.array[a * this.itemSize + 1]; },
      setY(a, b) { this.array[a * this.itemSize + 1] = b; return this; },
      getZ(a) { return this.array[a * this.itemSize + 2]; },
      setZ(a, b) { this.array[a * this.itemSize + 2] = b; return this; },
      getW(a) { return this.array[a * this.itemSize + 3]; },
      setW(a, b) { this.array[a * this.itemSize + 3] = b; return this; },
      setXY(a, b, c) {
        a *= this.itemSize; this.array[a + 0] = b; this.array[a
+ 1] = c; return this;
      },
      setXYZ(a, b, c, d) { a *= this.itemSize; this.array[a + 0] = b; this.array[a + 1] = c; this.array[a + 2] = d; return this; },
      setXYZW(a, b, c, d, e) { a *= this.itemSize; this.array[a + 0] = b; this.array[a + 1] = c; this.array[a + 2] = d; this.array[a + 3] = e; return this; },
      onUpload(a) { this.onUploadCallback = a; return this; },
      clone() { return (new this.constructor(this.array, this.itemSize)).copy(this); },
      toJSON() {
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: Array.prototype.slice.call(this.array),
          normalized: this.normalized,
        };
      },
    }); Ad.prototype = Object.create(K.prototype); Ad.prototype.constructor = Ad; Bd.prototype = Object.create(K.prototype); Bd.prototype.constructor = Bd; Cd.prototype = Object.create(K.prototype); Cd.prototype.constructor = Cd; Dd.prototype = Object.create(K.prototype); Dd.prototype.constructor = Dd; Xb.prototype = Object.create(K.prototype); Xb.prototype.constructor = Xb; Ed.prototype = Object.create(K.prototype); Ed.prototype.constructor = Ed; Yb.prototype = Object.create(K.prototype); Yb.prototype.constructor = Yb; C.prototype = Object.create(K.prototype); C.prototype.constructor = C; Fd.prototype = Object.create(K.prototype); Fd.prototype.constructor = Fd; Object.assign(vh.prototype, {
      computeGroups(a) { const b = []; let c = void 0; a = a.faces; for (var d = 0; d < a.length; d++) { const e = a[d]; if (e.materialIndex !== c) { c = e.materialIndex; void 0 !== f && (f.count = 3 * d - f.start, b.push(f)); var f = { start: 3 * d, materialIndex: c }; } } void 0 !== f && (f.count = 3 * d - f.start, b.push(f)); this.groups = b; },
      fromGeometry(a) {
        const b = a.faces; const c = a.vertices; const d = a.faceVertexUvs;
        const e = d[0] && d[0].length > 0; const f = d[1] && d[1].length > 0; const g = a.morphTargets; const k = g.length; if (k > 0) { var l = []; for (var h = 0; h < k; h++)l[h] = { name: g[h].name, data: [] }; this.morphTargets.position = l; } const n = a.morphNormals; const p = n.length; if (p > 0) { var q = []; for (h = 0; h < p; h++)q[h] = { name: n[h].name, data: [] }; this.morphTargets.normal = q; } const t = a.skinIndices; const r = a.skinWeights; const u = t.length === c.length; const z = r.length === c.length; c.length > 0 && b.length === 0 && console.error('THREE.DirectGeometry: Faceless geometries are not supported.'); for (h = 0; h < b.length; h++) {
          const w = b[h]; this.vertices.push(c[w.a], c[w.b], c[w.c]); let B = w.vertexNormals; B.length === 3 ? this.normals.push(B[0], B[1], B[2]) : (B = w.normal, this.normals.push(B, B, B)); B = w.vertexColors; B.length === 3 ? this.colors.push(B[0], B[1], B[2]) : (B = w.color, this.colors.push(B, B, B)); !0 === e && (B = d[0][h], void 0 !== B ? this.uvs.push(B[0], B[1], B[2]) : (console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ', h), this.uvs.push(new x(), new x(), new x()))); !0 === f && (B = d[1][h], void 0 !== B ? this.uvs2.push(B[0], B[1], B[2]) : (console.warn(
            'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ',
            h,
          ), this.uvs2.push(new x(), new x(), new x()))); for (B = 0; B < k; B++) { var y = g[B].vertices; l[B].data.push(y[w.a], y[w.b], y[w.c]); } for (B = 0; B < p; B++)y = n[B].vertexNormals[h], q[B].data.push(y.a, y.b, y.c); u && this.skinIndices.push(t[w.a], t[w.b], t[w.c]); z && this.skinWeights.push(r[w.a], r[w.b], r[w.c]);
        } this.computeGroups(a); this.verticesNeedUpdate = a.verticesNeedUpdate; this.normalsNeedUpdate = a.normalsNeedUpdate; this.colorsNeedUpdate = a.colorsNeedUpdate; this.uvsNeedUpdate = a.uvsNeedUpdate; this.groupsNeedUpdate = a.groupsNeedUpdate;
        a.boundingSphere !== null && (this.boundingSphere = a.boundingSphere.clone()); a.boundingBox !== null && (this.boundingBox = a.boundingBox.clone()); return this;
      },
    }); var pj = 1; const nb = new P(); const ih = new D(); const ud = new n(); const Na = new Sa(); const De = new Sa(); const V = new n(); G.prototype = Object.assign(Object.create(Fa.prototype), {
      constructor: G,
      isBufferGeometry: !0,
      getIndex() { return this.index; },
      setIndex(a) { Array.isArray(a) ? this.index = new (wh(a) > 65535 ? Yb : Xb)(a, 1) : this.index = a; },
      getAttribute(a) { return this.attributes[a]; },
      setAttribute(
        a,
        b,
      ) { this.attributes[a] = b; return this; },
      deleteAttribute(a) { delete this.attributes[a]; return this; },
      addGroup(a, b, c) { this.groups.push({ start: a, count: b, materialIndex: void 0 !== c ? c : 0 }); },
      clearGroups() { this.groups = []; },
      setDrawRange(a, b) { this.drawRange.start = a; this.drawRange.count = b; },
      applyMatrix(a) {
        let b = this.attributes.position; void 0 !== b && (b.applyMatrix4(a), b.needsUpdate = !0); b = this.attributes.normal; if (void 0 !== b) {
          const c = (new za()).getNormalMatrix(a); b.applyNormalMatrix(c);
          b.needsUpdate = !0;
        }b = this.attributes.tangent; void 0 !== b && (b.transformDirection(a), b.needsUpdate = !0); this.boundingBox !== null && this.computeBoundingBox(); this.boundingSphere !== null && this.computeBoundingSphere(); return this;
      },
      rotateX(a) { nb.makeRotationX(a); this.applyMatrix(nb); return this; },
      rotateY(a) { nb.makeRotationY(a); this.applyMatrix(nb); return this; },
      rotateZ(a) { nb.makeRotationZ(a); this.applyMatrix(nb); return this; },
      translate(a, b, c) {
        nb.makeTranslation(a, b, c); this.applyMatrix(nb);
        return this;
      },
      scale(a, b, c) { nb.makeScale(a, b, c); this.applyMatrix(nb); return this; },
      lookAt(a) { ih.lookAt(a); ih.updateMatrix(); this.applyMatrix(ih.matrix); return this; },
      center() { this.computeBoundingBox(); this.boundingBox.getCenter(ud).negate(); this.translate(ud.x, ud.y, ud.z); return this; },
      setFromObject(a) {
        const b = a.geometry; if (a.isPoints || a.isLine) {
          a = new C(3 * b.vertices.length, 3); const c = new C(3 * b.colors.length, 3); this.setAttribute('position', a.copyVector3sArray(b.vertices));
          this.setAttribute('color', c.copyColorsArray(b.colors)); b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new C(b.lineDistances.length, 1), this.setAttribute('lineDistance', a.copyArray(b.lineDistances))); b.boundingSphere !== null && (this.boundingSphere = b.boundingSphere.clone()); b.boundingBox !== null && (this.boundingBox = b.boundingBox.clone());
        } else a.isMesh && b && b.isGeometry && this.fromGeometry(b); return this;
      },
      setFromPoints(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) {
          const e = a[c]; b.push(
            e.x,
            e.y,
            e.z || 0,
          );
        } this.setAttribute('position', new C(b, 3)); return this;
      },
      updateFromObject(a) {
        let b = a.geometry; if (a.isMesh) {
          var c = b.__directGeometry; !0 === b.elementsNeedUpdate && (c = void 0, b.elementsNeedUpdate = !1); if (void 0 === c) return this.fromGeometry(b); c.verticesNeedUpdate = b.verticesNeedUpdate; c.normalsNeedUpdate = b.normalsNeedUpdate; c.colorsNeedUpdate = b.colorsNeedUpdate; c.uvsNeedUpdate = b.uvsNeedUpdate; c.groupsNeedUpdate = b.groupsNeedUpdate; b.verticesNeedUpdate = !1; b.normalsNeedUpdate = !1; b.colorsNeedUpdate = !1; b.uvsNeedUpdate = !1; b.groupsNeedUpdate = !1; b = c;
        }!0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1); !0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals), c.needsUpdate = !0), b.normalsNeedUpdate = !1); !0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors), c.needsUpdate = !0), b.colorsNeedUpdate = !1); b.uvsNeedUpdate && (c = this.attributes.uv, void 0
!== c && (c.copyVector2sArray(b.uvs), c.needsUpdate = !0), b.uvsNeedUpdate = !1); b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1); b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1); return this;
      },
      fromGeometry(a) { a.__directGeometry = (new vh()).fromGeometry(a); return this.fromDirectGeometry(a.__directGeometry); },
      fromDirectGeometry(a) {
        let b = new Float32Array(3
* a.vertices.length); this.setAttribute('position', (new K(b, 3)).copyVector3sArray(a.vertices)); a.normals.length > 0 && (b = new Float32Array(3 * a.normals.length), this.setAttribute('normal', (new K(b, 3)).copyVector3sArray(a.normals))); a.colors.length > 0 && (b = new Float32Array(3 * a.colors.length), this.setAttribute('color', (new K(b, 3)).copyColorsArray(a.colors))); a.uvs.length > 0 && (b = new Float32Array(2 * a.uvs.length), this.setAttribute('uv', (new K(b, 2)).copyVector2sArray(a.uvs))); a.uvs2.length > 0 && (b = new Float32Array(2
* a.uvs2.length), this.setAttribute('uv2', (new K(b, 2)).copyVector2sArray(a.uvs2))); this.groups = a.groups; for (var c in a.morphTargets) { b = []; for (let d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) { const g = d[e]; const k = new C(3 * g.data.length, 3); k.name = g.name; b.push(k.copyVector3sArray(g.data)); } this.morphAttributes[c] = b; }a.skinIndices.length > 0 && (c = new C(4 * a.skinIndices.length, 4), this.setAttribute('skinIndex', c.copyVector4sArray(a.skinIndices))); a.skinWeights.length > 0 && (c = new C(4 * a.skinWeights.length, 4), this.setAttribute(
          'skinWeight',
          c.copyVector4sArray(a.skinWeights),
        )); a.boundingSphere !== null && (this.boundingSphere = a.boundingSphere.clone()); a.boundingBox !== null && (this.boundingBox = a.boundingBox.clone()); return this;
      },
      computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new Sa()); let a = this.attributes.position; const b = this.morphAttributes.position; if (void 0 !== a) {
          if (this.boundingBox.setFromBufferAttribute(a), b) {
            a = 0; for (let c = b.length; a < c; a++) {
              Na.setFromBufferAttribute(b[a]), this.morphTargetsRelative ? (V.addVectors(
                this.boundingBox.min,
                Na.min,
              ), this.boundingBox.expandByPoint(V), V.addVectors(this.boundingBox.max, Na.max), this.boundingBox.expandByPoint(V)) : (this.boundingBox.expandByPoint(Na.min), this.boundingBox.expandByPoint(Na.max));
            }
          }
        } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
      },
      computeBoundingSphere() {
        this.boundingSphere
=== null && (this.boundingSphere = new qb()); const a = this.attributes.position; const b = this.morphAttributes.position; if (a) {
          const c = this.boundingSphere.center; Na.setFromBufferAttribute(a); if (b) for (var d = 0, e = b.length; d < e; d++) { var f = b[d]; De.setFromBufferAttribute(f); this.morphTargetsRelative ? (V.addVectors(Na.min, De.min), Na.expandByPoint(V), V.addVectors(Na.max, De.max), Na.expandByPoint(V)) : (Na.expandByPoint(De.min), Na.expandByPoint(De.max)); }Na.getCenter(c); let g = 0; d = 0; for (e = a.count; d < e; d++) {
            V.fromBufferAttribute(
              a,
              d,
            ), g = Math.max(g, c.distanceToSquared(V));
          } if (b) for (d = 0, e = b.length; d < e; d++) { f = b[d]; for (let k = this.morphTargetsRelative, l = 0, h = f.count; l < h; l++)V.fromBufferAttribute(f, l), k && (ud.fromBufferAttribute(a, l), V.add(ud)), g = Math.max(g, c.distanceToSquared(V)); } this.boundingSphere.radius = Math.sqrt(g); isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
      },
      computeFaceNormals() {},
      computeVertexNormals() {
        let a = this.index; const b = this.attributes; if (b.position) {
          const c = b.position.array; if (void 0 === b.normal) this.setAttribute('normal', new K(new Float32Array(c.length), 3)); else for (var d = b.normal.array, e = 0, f = d.length; e < f; e++)d[e] = 0; d = b.normal.array; const g = new n(); const k = new n(); const l = new n(); const h = new n(); const
            v = new n(); if (a) {
            const p = a.array; e = 0; for (f = a.count; e < f; e += 3) {
              a = 3 * p[e + 0]; const q = 3 * p[e + 1]; const t = 3 * p[e + 2]; g.fromArray(c, a); k.fromArray(c, q); l.fromArray(c, t); h.subVectors(l, k); v.subVectors(g, k); h.cross(v); d[a]
+= h.x; d[a + 1] += h.y; d[a + 2] += h.z; d[q] += h.x; d[q + 1] += h.y; d[q + 2] += h.z; d[t] += h.x; d[t + 1] += h.y; d[t + 2] += h.z;
            }
          } else for (e = 0, f = c.length; e < f; e += 9)g.fromArray(c, e), k.fromArray(c, e + 3), l.fromArray(c, e + 6), h.subVectors(l, k), v.subVectors(g, k), h.cross(v), d[e] = h.x, d[e + 1] = h.y, d[e + 2] = h.z, d[e + 3] = h.x, d[e + 4] = h.y, d[e + 5] = h.z, d[e + 6] = h.x, d[e + 7] = h.y, d[e + 8] = h.z; this.normalizeNormals(); b.normal.needsUpdate = !0;
        }
      },
      merge(a, b) {
        if (a && a.isBufferGeometry) {
          void 0 === b && (b = 0, console.warn('THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'));
          const c = this.attributes; let d; for (d in c) if (void 0 !== a.attributes[d]) { const e = c[d].array; let f = a.attributes[d]; const g = f.array; let k = f.itemSize * b; f = Math.min(g.length, e.length - k); for (let l = 0; l < f; l++, k++)e[k] = g[l]; } return this;
        }console.error('THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.', a);
      },
      normalizeNormals() { for (let a = this.attributes.normal, b = 0, c = a.count; b < c; b++)V.x = a.getX(b), V.y = a.getY(b), V.z = a.getZ(b), V.normalize(), a.setXYZ(b, V.x, V.y, V.z); },
      toNonIndexed() {
        function a(
          a,
          b,
        ) { const c = a.array; a = a.itemSize; for (var d = new c.constructor(b.length * a), e, f = 0, g = 0, k = b.length; g < k; g++) { e = b[g] * a; for (let l = 0; l < a; l++)d[f++] = c[e++]; } return new K(d, a); } if (this.index === null) return console.warn('THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.'), this; const b = new G(); let c = this.index.array; let d = this.attributes; let
          e; for (e in d) { var f = d[e]; f = a(f, c); b.setAttribute(e, f); } const g = this.morphAttributes; for (e in g) {
          const k = []; const l = g[e]; d = 0; for (let h = l.length; d < h; d++)f = l[d], f = a(f, c), k.push(f); b.morphAttributes[e] = k;
        }b.morphTargetsRelative = this.morphTargetsRelative; c = this.groups; d = 0; for (e = c.length; d < e; d++)f = c[d], b.addGroup(f.start, f.count, f.materialIndex); return b;
      },
      toJSON() {
        const a = { metadata: { version: 4.5, type: 'BufferGeometry', generator: 'BufferGeometry.toJSON' } }; a.uuid = this.uuid; a.type = this.type; this.name !== '' && (a.name = this.name); Object.keys(this.userData).length > 0 && (a.userData = this.userData); if (void 0 !== this.parameters) { var b = this.parameters; for (h in b) void 0 !== b[h] && (a[h] = b[h]); return a; }a.data = { attributes: {} };
        b = this.index; b !== null && (a.data.index = { type: b.array.constructor.name, array: Array.prototype.slice.call(b.array) }); let c = this.attributes; for (h in c) { b = c[h]; var d = b.toJSON(); b.name !== '' && (d.name = b.name); a.data.attributes[h] = d; }c = {}; let e = !1; for (h in this.morphAttributes) { for (var f = this.morphAttributes[h], g = [], k = 0, l = f.length; k < l; k++)b = f[k], d = b.toJSON(), b.name !== '' && (d.name = b.name), g.push(d); g.length > 0 && (c[h] = g, e = !0); }e && (a.data.morphAttributes = c, a.data.morphTargetsRelative = this.morphTargetsRelative); var h = this.groups; h.length > 0 && (a.data.groups = JSON.parse(JSON.stringify(h))); h = this.boundingSphere; h !== null && (a.data.boundingSphere = { center: h.center.toArray(), radius: h.radius }); return a;
      },
      clone() { return (new G()).copy(this); },
      copy(a) {
        let b; this.index = null; this.attributes = {}; this.morphAttributes = {}; this.groups = []; this.boundingSphere = this.boundingBox = null; this.name = a.name; let c = a.index; c !== null && this.setIndex(c.clone()); c = a.attributes; for (g in c) this.setAttribute(g, c[g].clone()); let d = a.morphAttributes;
        for (g in d) { const e = []; const f = d[g]; c = 0; for (b = f.length; c < b; c++)e.push(f[c].clone()); this.morphAttributes[g] = e; } this.morphTargetsRelative = a.morphTargetsRelative; var g = a.groups; c = 0; for (b = g.length; c < b; c++)d = g[c], this.addGroup(d.start, d.count, d.materialIndex); g = a.boundingBox; g !== null && (this.boundingBox = g.clone()); g = a.boundingSphere; g !== null && (this.boundingSphere = g.clone()); this.drawRange.start = a.drawRange.start; this.drawRange.count = a.drawRange.count; this.userData = a.userData; return this;
      },
      dispose() { this.dispatchEvent({ type: 'dispose' }); },
    });
    const Ni = new P(); const vc = new Wb(); const jh = new qb(); var Zb = new n(); var $b = new n(); var ac = new n(); var eg = new n(); var fg = new n(); var gg = new n(); var Le = new n(); var Me = new n(); var Ne = new n(); var Ec = new x(); var Fc = new x(); var Gc = new x(); var Gd = new n(); var
      Je = new n(); ca.prototype = Object.assign(Object.create(D.prototype), {
      constructor: ca,
      isMesh: !0,
      copy(a) { D.prototype.copy.call(this, a); void 0 !== a.morphTargetInfluences && (this.morphTargetInfluences = a.morphTargetInfluences.slice()); void 0 !== a.morphTargetDictionary && (this.morphTargetDictionary = { ...a.morphTargetDictionary }); return this; },
      updateMorphTargets() {
        let a = this.geometry; if (a.isBufferGeometry) { a = a.morphAttributes; let b = Object.keys(a); if (b.length > 0) { const c = a[b[0]]; if (void 0 !== c) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) { const d = c[a].name || String(a); this.morphTargetInfluences.push(0); this.morphTargetDictionary[d] = a; } } } else a = a.morphTargets, void 0 !== a && a.length > 0 && console.error('THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.');
      },
      raycast(a, b) {
        let c = this.geometry;
        const d = this.material; let e = this.matrixWorld; if (void 0 !== d && (c.boundingSphere === null && c.computeBoundingSphere(), jh.copy(c.boundingSphere), jh.applyMatrix4(e), !1 !== a.ray.intersectsSphere(jh) && (Ni.getInverse(e), vc.copy(a.ray).applyMatrix4(Ni), c.boundingBox === null || !1 !== vc.intersectsBox(c.boundingBox)))) {
          if (c.isBufferGeometry) {
            var f = c.index; e = c.attributes.position; var g = c.morphAttributes.position; var k = c.morphTargetsRelative; var l = c.attributes.uv; var h = c.attributes.uv2; var n = c.groups; var p = c.drawRange; var q; let t; if (f !== null) {
              if (Array.isArray(d)) {
                var r = 0; for (q = n.length; r < q; r++) { var u = n[r]; var z = d[u.materialIndex]; var w = Math.max(u.start, p.start); for (t = c = Math.min(u.start + u.count, p.start + p.count); w < t; w += 3) { c = f.getX(w); var B = f.getX(w + 1); var y = f.getX(w + 2); if (c = Ke(this, z, a, vc, e, g, k, l, h, c, B, y))c.faceIndex = Math.floor(w / 3), c.face.materialIndex = u.materialIndex, b.push(c); } }
              } else {
                for (w = Math.max(0, p.start), c = Math.min(f.count, p.start + p.count), r = w, q = c; r < q; r += 3) {
                  if (c = f.getX(r), B = f.getX(r + 1), y = f.getX(r + 2), c = Ke(this, d, a, vc, e, g, k, l, h, c, B, y)) {
                    c.faceIndex = Math.floor(r
/ 3), b.push(c);
                  }
                }
              }
            } else if (void 0 !== e) if (Array.isArray(d)) for (r = 0, q = n.length; r < q; r++) for (u = n[r], z = d[u.materialIndex], w = Math.max(u.start, p.start), t = c = Math.min(u.start + u.count, p.start + p.count); w < t; w += 3) { if (c = w, B = w + 1, y = w + 2, c = Ke(this, z, a, vc, e, g, k, l, h, c, B, y))c.faceIndex = Math.floor(w / 3), c.face.materialIndex = u.materialIndex, b.push(c); } else for (w = Math.max(0, p.start), c = Math.min(e.count, p.start + p.count), r = w, q = c; r < q; r += 3) if (c = r, B = r + 1, y = r + 2, c = Ke(this, d, a, vc, e, g, k, l, h, c, B, y))c.faceIndex = Math.floor(r / 3), b.push(c);
          } else if (c.isGeometry) {
            for (e = Array.isArray(d), g = c.vertices, k = c.faces, c = c.faceVertexUvs[0], c.length > 0 && (f = c), p = 0, r = k.length; p < r; p++) if (q = k[p], c = e ? d[q.materialIndex] : d, void 0 !== c && (l = g[q.a], h = g[q.b], n = g[q.c], c = xh(this, c, a, vc, l, h, n, Gd)))f && f[p] && (u = f[p], Ec.copy(u[0]), Fc.copy(u[1]), Gc.copy(u[2]), c.uv = ma.getUV(Gd, l, h, n, Ec, Fc, Gc, new x())), c.face = q, c.faceIndex = p, b.push(c);
          }
        }
      },
      clone() { return (new this.constructor(this.geometry, this.material)).copy(this); },
    }); var qj = 0; const ob = new P(); const kh = new D(); const Kf = new n(); M.prototype = Object.assign(
      Object.create(Fa.prototype),
      {
        constructor: M,
        isGeometry: !0,
        applyMatrix(a) { for (var b = (new za()).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a); c = 0; for (d = this.faces.length; c < d; c++) { a = this.faces[c]; a.normal.applyMatrix3(b).normalize(); for (let e = 0, f = a.vertexNormals.length; e < f; e++)a.vertexNormals[e].applyMatrix3(b).normalize(); } this.boundingBox !== null && this.computeBoundingBox(); this.boundingSphere !== null && this.computeBoundingSphere(); this.normalsNeedUpdate = this.verticesNeedUpdate = !0; return this; },
        rotateX(a) { ob.makeRotationX(a); this.applyMatrix(ob); return this; },
        rotateY(a) { ob.makeRotationY(a); this.applyMatrix(ob); return this; },
        rotateZ(a) { ob.makeRotationZ(a); this.applyMatrix(ob); return this; },
        translate(a, b, c) { ob.makeTranslation(a, b, c); this.applyMatrix(ob); return this; },
        scale(a, b, c) { ob.makeScale(a, b, c); this.applyMatrix(ob); return this; },
        lookAt(a) { kh.lookAt(a); kh.updateMatrix(); this.applyMatrix(kh.matrix); return this; },
        fromBufferGeometry(a) {
          function b(
            a,
            b,
            d,
            e,
          ) { const f = void 0 === k ? [] : [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()]; const m = void 0 === g ? [] : [(new n()).fromArray(g, 3 * a), (new n()).fromArray(g, 3 * b), (new n()).fromArray(g, 3 * d)]; e = new Dc(a, b, d, m, f, e); c.faces.push(e); void 0 !== l && c.faceVertexUvs[0].push([(new x()).fromArray(l, 2 * a), (new x()).fromArray(l, 2 * b), (new x()).fromArray(l, 2 * d)]); void 0 !== h && c.faceVertexUvs[1].push([(new x()).fromArray(h, 2 * a), (new x()).fromArray(h, 2 * b), (new x()).fromArray(h, 2 * d)]); } var c = this; const d = a.index !== null ? a.index.array : void 0; let e = a.attributes;
          if (void 0 === e.position) return console.error('THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.'), this; let f = e.position.array; var g = void 0 !== e.normal ? e.normal.array : void 0; var k = void 0 !== e.color ? e.color.array : void 0; var l = void 0 !== e.uv ? e.uv.array : void 0; var h = void 0 !== e.uv2 ? e.uv2.array : void 0; void 0 !== h && (this.faceVertexUvs[1] = []); for (e = 0; e < f.length; e += 3)c.vertices.push((new n()).fromArray(f, e)), void 0 !== k && c.colors.push((new y()).fromArray(k, e)); const v = a.groups; if (v.length > 0) {
            for (e = 0; e < v.length; e++) {
              f = v[e]; let p = f.start; let q = p; for (p += f.count; q < p; q += 3) void 0 !== d ? b(d[q], d[q + 1], d[q + 2], f.materialIndex) : b(q, q + 1, q + 2, f.materialIndex);
            }
          } else if (void 0 !== d) for (e = 0; e < d.length; e += 3)b(d[e], d[e + 1], d[e + 2]); else for (e = 0; e < f.length / 3; e += 3)b(e, e + 1, e + 2); this.computeFaceNormals(); a.boundingBox !== null && (this.boundingBox = a.boundingBox.clone()); a.boundingSphere !== null && (this.boundingSphere = a.boundingSphere.clone()); return this;
        },
        center() {
          this.computeBoundingBox(); this.boundingBox.getCenter(Kf).negate(); this.translate(
            Kf.x,
            Kf.y,
            Kf.z,
          ); return this;
        },
        normalize() { this.computeBoundingSphere(); const a = this.boundingSphere.center; let b = this.boundingSphere.radius; b = b === 0 ? 1 : 1 / b; const c = new P(); c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1); this.applyMatrix(c); return this; },
        computeFaceNormals() { for (let a = new n(), b = new n(), c = 0, d = this.faces.length; c < d; c++) { const e = this.faces[c]; const f = this.vertices[e.a]; const g = this.vertices[e.b]; a.subVectors(this.vertices[e.c], g); b.subVectors(f, g); a.cross(b); a.normalize(); e.normal.copy(a); } },
        computeVertexNormals(a) {
          void 0
=== a && (a = !0); let b; const c = Array(this.vertices.length); let d = 0; for (b = this.vertices.length; d < b; d++)c[d] = new n(); if (a) {
            const e = new n(); const
              f = new n(); a = 0; for (d = this.faces.length; a < d; a++) { b = this.faces[a]; var g = this.vertices[b.a]; const k = this.vertices[b.b]; const l = this.vertices[b.c]; e.subVectors(l, k); f.subVectors(g, k); e.cross(f); c[b.a].add(e); c[b.b].add(e); c[b.c].add(e); }
          } else for (this.computeFaceNormals(), a = 0, d = this.faces.length; a < d; a++)b = this.faces[a], c[b.a].add(b.normal), c[b.b].add(b.normal), c[b.c].add(b.normal); d = 0; for (b = this.vertices.length; d < b; d++)c[d].normalize(); a = 0; for (d = this.faces.length; a < d; a++)b = this.faces[a], g = b.vertexNormals, g.length === 3 ? (g[0].copy(c[b.a]), g[1].copy(c[b.b]), g[2].copy(c[b.c])) : (g[0] = c[b.a].clone(), g[1] = c[b.b].clone(), g[2] = c[b.c].clone()); this.faces.length > 0 && (this.normalsNeedUpdate = !0);
        },
        computeFlatVertexNormals() {
          let a; this.computeFaceNormals(); let b = 0; for (a = this.faces.length; b < a; b++) {
            const c = this.faces[b]; const d = c.vertexNormals; d.length === 3 ? (d[0].copy(c.normal), d[1].copy(c.normal),
            d[2].copy(c.normal)) : (d[0] = c.normal.clone(), d[1] = c.normal.clone(), d[2] = c.normal.clone());
          } this.faces.length > 0 && (this.normalsNeedUpdate = !0);
        },
        computeMorphNormals() {
          let a; let b; let c = 0; for (b = this.faces.length; c < b; c++) {
            var d = this.faces[c]; d.__originalFaceNormal ? d.__originalFaceNormal.copy(d.normal) : d.__originalFaceNormal = d.normal.clone(); d.__originalVertexNormals || (d.__originalVertexNormals = []); var e = 0; for (a = d.vertexNormals.length; e < a; e++) {
              d.__originalVertexNormals[e] ? d.__originalVertexNormals[e].copy(d.vertexNormals[e])
                : d.__originalVertexNormals[e] = d.vertexNormals[e].clone();
            }
          } const f = new M(); f.faces = this.faces; e = 0; for (a = this.morphTargets.length; e < a; e++) {
            if (!this.morphNormals[e]) { this.morphNormals[e] = {}; this.morphNormals[e].faceNormals = []; this.morphNormals[e].vertexNormals = []; d = this.morphNormals[e].faceNormals; var g = this.morphNormals[e].vertexNormals; c = 0; for (b = this.faces.length; c < b; c++) { var k = new n(); var l = { a: new n(), b: new n(), c: new n() }; d.push(k); g.push(l); } }g = this.morphNormals[e]; f.vertices = this.morphTargets[e].vertices; f.computeFaceNormals();
            f.computeVertexNormals(); c = 0; for (b = this.faces.length; c < b; c++)d = this.faces[c], k = g.faceNormals[c], l = g.vertexNormals[c], k.copy(d.normal), l.a.copy(d.vertexNormals[0]), l.b.copy(d.vertexNormals[1]), l.c.copy(d.vertexNormals[2]);
          }c = 0; for (b = this.faces.length; c < b; c++)d = this.faces[c], d.normal = d.__originalFaceNormal, d.vertexNormals = d.__originalVertexNormals;
        },
        computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Sa()); this.boundingBox.setFromPoints(this.vertices); },
        computeBoundingSphere() {
          this.boundingSphere
=== null && (this.boundingSphere = new qb()); this.boundingSphere.setFromPoints(this.vertices);
        },
        merge(a, b, c) {
          if (a && a.isGeometry) {
            let d; let e = this.vertices.length; let f = this.vertices; let g = a.vertices; let k = this.faces; let l = a.faces; let h = this.colors; let n = a.colors; void 0 === c && (c = 0); void 0 !== b && (d = (new za()).getNormalMatrix(b)); for (var p = 0, q = g.length; p < q; p++) { var t = g[p].clone(); void 0 !== b && t.applyMatrix4(b); f.push(t); }p = 0; for (q = n.length; p < q; p++)h.push(n[p].clone()); p = 0; for (q = l.length; p < q; p++) {
              g = l[p]; const r = g.vertexNormals;
              n = g.vertexColors; h = new Dc(g.a + e, g.b + e, g.c + e); h.normal.copy(g.normal); void 0 !== d && h.normal.applyMatrix3(d).normalize(); b = 0; for (f = r.length; b < f; b++)t = r[b].clone(), void 0 !== d && t.applyMatrix3(d).normalize(), h.vertexNormals.push(t); h.color.copy(g.color); b = 0; for (f = n.length; b < f; b++)t = n[b], h.vertexColors.push(t.clone()); h.materialIndex = g.materialIndex + c; k.push(h);
            }p = 0; for (q = a.faceVertexUvs.length; p < q; p++) {
              for (c = a.faceVertexUvs[p], void 0 === this.faceVertexUvs[p] && (this.faceVertexUvs[p] = []), b = 0, f = c.length; b < f; b++) {
                d = c[b]; e = []; k = 0; for (l = d.length; k < l; k++)e.push(d[k].clone()); this.faceVertexUvs[p].push(e);
              }
            }
          } else console.error('THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.', a);
        },
        mergeMesh(a) { a && a.isMesh ? (a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix)) : console.error('THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.', a); },
        mergeVertices() {
          let a = {}; const b = []; let c = []; let d = 10 ** 4; let e; let f = 0; for (e = this.vertices.length; f < e; f++) {
            var g = this.vertices[f];
            g = `${Math.round(g.x * d)}_${Math.round(g.y * d)}_${Math.round(g.z * d)}`; void 0 === a[g] ? (a[g] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[g]];
          }a = []; f = 0; for (e = this.faces.length; f < e; f++) for (d = this.faces[f], d.a = c[d.a], d.b = c[d.b], d.c = c[d.c], d = [d.a, d.b, d.c], g = 0; g < 3; g++) if (d[g] === d[(g + 1) % 3]) { a.push(f); break; } for (f = a.length - 1; f >= 0; f--) for (d = a[f], this.faces.splice(d, 1), c = 0, e = this.faceVertexUvs.length; c < e; c++) this.faceVertexUvs[c].splice(d, 1); f = this.vertices.length - b.length; this.vertices = b; return f;
        },
        setFromPoints(a) {
          this.vertices = []; for (let b = 0, c = a.length; b < c; b++) { const d = a[b]; this.vertices.push(new n(d.x, d.y, d.z || 0)); } return this;
        },
        sortFacesByMaterialIndex() { for (var a = this.faces, b = a.length, c = 0; c < b; c++)a[c]._id = c; a.sort((a, b) => a.materialIndex - b.materialIndex); const d = this.faceVertexUvs[0]; const e = this.faceVertexUvs[1]; let f; let g; d && d.length === b && (f = []); e && e.length === b && (g = []); for (c = 0; c < b; c++) { const k = a[c]._id; f && f.push(d[k]); g && g.push(e[k]); }f && (this.faceVertexUvs[0] = f); g && (this.faceVertexUvs[1] = g); },
        toJSON() {
          function a(
            a,
            b,
            c,
          ) { return c ? a | 1 << b : a & ~(1 << b); } function b(a) { const b = a.x.toString() + a.y.toString() + a.z.toString(); if (void 0 !== h[b]) return h[b]; h[b] = l.length / 3; l.push(a.x, a.y, a.z); return h[b]; } function c(a) { const b = a.r.toString() + a.g.toString() + a.b.toString(); if (void 0 !== p[b]) return p[b]; p[b] = n.length; n.push(a.getHex()); return p[b]; } function d(a) { const b = a.x.toString() + a.y.toString(); if (void 0 !== t[b]) return t[b]; t[b] = q.length / 2; q.push(a.x, a.y); return t[b]; } const e = { metadata: { version: 4.5, type: 'Geometry', generator: 'Geometry.toJSON' } };
          e.uuid = this.uuid; e.type = this.type; this.name !== '' && (e.name = this.name); if (void 0 !== this.parameters) { var f = this.parameters; var g; for (g in f) void 0 !== f[g] && (e[g] = f[g]); return e; }f = []; for (g = 0; g < this.vertices.length; g++) { var k = this.vertices[g]; f.push(k.x, k.y, k.z); }k = []; var l = []; var h = {}; var n = []; var p = {}; var q = []; var t = {}; for (g = 0; g < this.faces.length; g++) {
            let r = this.faces[g]; let u = void 0 !== this.faceVertexUvs[0][g]; let z = r.normal.length() > 0; const w = r.vertexNormals.length > 0; const B = r.color.r !== 1 || r.color.g !== 1 || r.color.b !== 1; const x = r.vertexColors.length > 0;
            let y = 0; y = a(y, 0, 0); y = a(y, 1, !0); y = a(y, 2, !1); y = a(y, 3, u); y = a(y, 4, z); y = a(y, 5, w); y = a(y, 6, B); y = a(y, 7, x); k.push(y); k.push(r.a, r.b, r.c); k.push(r.materialIndex); u && (u = this.faceVertexUvs[0][g], k.push(d(u[0]), d(u[1]), d(u[2]))); z && k.push(b(r.normal)); w && (z = r.vertexNormals, k.push(b(z[0]), b(z[1]), b(z[2]))); B && k.push(c(r.color)); x && (r = r.vertexColors, k.push(c(r[0]), c(r[1]), c(r[2])));
          }e.data = {}; e.data.vertices = f; e.data.normals = l; n.length > 0 && (e.data.colors = n); q.length > 0 && (e.data.uvs = [q]); e.data.faces = k; return e;
        },
        clone() { return (new M()).copy(this); },
        copy(a) {
          let b; let c; let d; this.vertices = []; this.colors = []; this.faces = []; this.faceVertexUvs = [[]]; this.morphTargets = []; this.morphNormals = []; this.skinWeights = []; this.skinIndices = []; this.lineDistances = []; this.boundingSphere = this.boundingBox = null; this.name = a.name; let e = a.vertices; let f = 0; for (b = e.length; f < b; f++) this.vertices.push(e[f].clone()); e = a.colors; f = 0; for (b = e.length; f < b; f++) this.colors.push(e[f].clone()); e = a.faces; f = 0; for (b = e.length; f < b; f++) this.faces.push(e[f].clone()); f = 0; for (b = a.faceVertexUvs.length; f
< b; f++) { var g = a.faceVertexUvs[f]; void 0 === this.faceVertexUvs[f] && (this.faceVertexUvs[f] = []); e = 0; for (c = g.length; e < c; e++) { var k = g[e]; const l = []; var h = 0; for (d = k.length; h < d; h++)l.push(k[h].clone()); this.faceVertexUvs[f].push(l); } }h = a.morphTargets; f = 0; for (b = h.length; f < b; f++) {
            d = {}; d.name = h[f].name; if (void 0 !== h[f].vertices) for (d.vertices = [], e = 0, c = h[f].vertices.length; e < c; e++)d.vertices.push(h[f].vertices[e].clone()); if (void 0 !== h[f].normals) for (d.normals = [], e = 0, c = h[f].normals.length; e < c; e++)d.normals.push(h[f].normals[e].clone());
            this.morphTargets.push(d);
          }h = a.morphNormals; f = 0; for (b = h.length; f < b; f++) { d = {}; if (void 0 !== h[f].vertexNormals) for (d.vertexNormals = [], e = 0, c = h[f].vertexNormals.length; e < c; e++)g = h[f].vertexNormals[e], k = {}, k.a = g.a.clone(), k.b = g.b.clone(), k.c = g.c.clone(), d.vertexNormals.push(k); if (void 0 !== h[f].faceNormals) for (d.faceNormals = [], e = 0, c = h[f].faceNormals.length; e < c; e++)d.faceNormals.push(h[f].faceNormals[e].clone()); this.morphNormals.push(d); }e = a.skinWeights; f = 0; for (b = e.length; f < b; f++) this.skinWeights.push(e[f].clone());
          e = a.skinIndices; f = 0; for (b = e.length; f < b; f++) this.skinIndices.push(e[f].clone()); e = a.lineDistances; f = 0; for (b = e.length; f < b; f++) this.lineDistances.push(e[f]); f = a.boundingBox; f !== null && (this.boundingBox = f.clone()); f = a.boundingSphere; f !== null && (this.boundingSphere = f.clone()); this.elementsNeedUpdate = a.elementsNeedUpdate; this.verticesNeedUpdate = a.verticesNeedUpdate; this.uvsNeedUpdate = a.uvsNeedUpdate; this.normalsNeedUpdate = a.normalsNeedUpdate; this.colorsNeedUpdate = a.colorsNeedUpdate; this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate; this.groupsNeedUpdate = a.groupsNeedUpdate; return this;
        },
        dispose() { this.dispatchEvent({ type: 'dispose' }); },
      },
    ); const lh = (function (a) {
      function b(b, d, e, f, g, k) {
        a.call(this); this.type = 'BoxGeometry'; this.parameters = {
          width: b, height: d, depth: e, widthSegments: f, heightSegments: g, depthSegments: k,
        }; this.fromBufferGeometry(new Jd(b, d, e, f, g, k)); this.mergeVertices();
      }a && (b.__proto__ = a); b.prototype = Object.create(a && a.prototype); return b.prototype.constructor = b;
    }(M)); var Jd = (function (a) {
      function b(
        b,
        d,
        e,
        f,
        g,
        k,
      ) {
        function c(a, b, c, d, e, f, g, k, l, m, x) { const w = f / l; const z = g / m; const A = f / 2; const B = g / 2; const y = k / 2; g = l + 1; const C = m + 1; let G = f = 0; let F; let D; const E = new n(); for (D = 0; D < C; D++) { const I = D * z - B; for (F = 0; F < g; F++)E[a] = (F * w - A) * d, E[b] = I * e, E[c] = y, p.push(E.x, E.y, E.z), E[a] = 0, E[b] = 0, E[c] = k > 0 ? 1 : -1, q.push(E.x, E.y, E.z), t.push(F / l), t.push(1 - D / m), f += 1; } for (D = 0; D < m; D++) for (F = 0; F < l; F++)a = r + F + g * (D + 1), b = r + (F + 1) + g * (D + 1), c = r + (F + 1) + g * D, v.push(r + F + g * D, a, c), v.push(a, b, c), G += 6; h.addGroup(u, G, x); u += G; r += f; }a.call(this); this.type = 'BoxBufferGeometry'; this.parameters = {
          width: b,
          height: d,
          depth: e,
          widthSegments: f,
          heightSegments: g,
          depthSegments: k,
        }; var h = this; b = b || 1; d = d || 1; e = e || 1; f = Math.floor(f) || 1; g = Math.floor(g) || 1; k = Math.floor(k) || 1; var v = []; var p = []; var q = []; var t = []; var r = 0; var u = 0; c('z', 'y', 'x', -1, -1, e, d, b, k, g, 0); c('z', 'y', 'x', 1, -1, e, d, -b, k, g, 1); c('x', 'z', 'y', 1, 1, b, e, d, f, k, 2); c('x', 'z', 'y', 1, -1, b, e, -d, f, k, 3); c('x', 'y', 'z', 1, -1, b, d, e, f, g, 4); c('x', 'y', 'z', -1, -1, b, d, -e, f, g, 5); this.setIndex(v); this.setAttribute('position', new C(p, 3)); this.setAttribute('normal', new C(q, 3)); this.setAttribute(
          'uv',
          new C(t, 2),
        );
      }a && (b.__proto__ = a); b.prototype = Object.create(a && a.prototype); return b.prototype.constructor = b;
    }(G)); const Xk = { clone: bc, merge: na }; oa.prototype = Object.create(L.prototype); oa.prototype.constructor = oa; oa.prototype.isShaderMaterial = !0; oa.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.fragmentShader = a.fragmentShader; this.vertexShader = a.vertexShader; this.uniforms = bc(a.uniforms); this.defines = { ...a.defines }; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth;
      this.lights = a.lights; this.clipping = a.clipping; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; this.extensions = a.extensions; return this;
    }; oa.prototype.toJSON = function (a) {
      const b = L.prototype.toJSON.call(this, a); b.uniforms = {}; for (const c in this.uniforms) {
        const d = this.uniforms[c].value; b.uniforms[c] = d && d.isTexture ? { type: 't', value: d.toJSON(a).uuid } : d && d.isColor ? { type: 'c', value: d.getHex() } : d && d.isVector2 ? { type: 'v2', value: d.toArray() } : d && d.isVector3 ? { type: 'v3', value: d.toArray() }
          : d && d.isVector4 ? { type: 'v4', value: d.toArray() } : d && d.isMatrix3 ? { type: 'm3', value: d.toArray() } : d && d.isMatrix4 ? { type: 'm4', value: d.toArray() } : { value: d };
      }Object.keys(this.defines).length > 0 && (b.defines = this.defines); b.vertexShader = this.vertexShader; b.fragmentShader = this.fragmentShader; a = {}; for (const e in this.extensions)!0 === this.extensions[e] && (a[e] = !0); Object.keys(a).length > 0 && (b.extensions = a); return b;
    }; db.prototype = Object.assign(Object.create(D.prototype), {
      constructor: db,
      isCamera: !0,
      copy(a, b) {
        D.prototype.copy.call(
          this,
          a,
          b,
        ); this.matrixWorldInverse.copy(a.matrixWorldInverse); this.projectionMatrix.copy(a.projectionMatrix); this.projectionMatrixInverse.copy(a.projectionMatrixInverse); return this;
      },
      getWorldDirection(a) { void 0 === a && (console.warn('THREE.Camera: .getWorldDirection() target is now required'), a = new n()); this.updateMatrixWorld(!0); const b = this.matrixWorld.elements; return a.set(-b[8], -b[9], -b[10]).normalize(); },
      updateMatrixWorld(a) { D.prototype.updateMatrixWorld.call(this, a); this.matrixWorldInverse.getInverse(this.matrixWorld); },
      clone() { return (new this.constructor()).copy(this); },
    }); pa.prototype = Object.assign(Object.create(db.prototype), {
      constructor: pa,
      isPerspectiveCamera: !0,
      copy(a, b) { db.prototype.copy.call(this, a, b); this.fov = a.fov; this.zoom = a.zoom; this.near = a.near; this.far = a.far; this.focus = a.focus; this.aspect = a.aspect; this.view = a.view === null ? null : ({ ...a.view }); this.filmGauge = a.filmGauge; this.filmOffset = a.filmOffset; return this; },
      setFocalLength(a) {
        a = 0.5 * this.getFilmHeight() / a; this.fov = 2 * O.RAD2DEG
* Math.atan(a); this.updateProjectionMatrix();
      },
      getFocalLength() { const a = Math.tan(0.5 * O.DEG2RAD * this.fov); return 0.5 * this.getFilmHeight() / a; },
      getEffectiveFOV() { return 2 * O.RAD2DEG * Math.atan(Math.tan(0.5 * O.DEG2RAD * this.fov) / this.zoom); },
      getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1); },
      getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1); },
      setViewOffset(a, b, c, d, e, f) {
        this.aspect = a / b; this.view === null && (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }); this.view.enabled = !0; this.view.fullWidth = a; this.view.fullHeight = b; this.view.offsetX = c; this.view.offsetY = d; this.view.width = e; this.view.height = f; this.updateProjectionMatrix();
      },
      clearViewOffset() { this.view !== null && (this.view.enabled = !1); this.updateProjectionMatrix(); },
      updateProjectionMatrix() {
        const a = this.near; let b = a * Math.tan(0.5 * O.DEG2RAD * this.fov) / this.zoom; let c = 2 * b; let d = this.aspect * c; let e = -0.5 * d; let f = this.view; if (this.view !== null && this.view.enabled) {
          const g = f.fullWidth;
          const k = f.fullHeight; e += f.offsetX * d / g; b -= f.offsetY * c / k; d *= f.width / g; c *= f.height / k;
        }f = this.filmOffset; f !== 0 && (e += a * f / this.getFilmWidth()); this.projectionMatrix.makePerspective(e, e + d, b, b - c, a, this.far); this.projectionMatrixInverse.getInverse(this.projectionMatrix);
      },
      toJSON(a) {
        a = D.prototype.toJSON.call(this, a); a.object.fov = this.fov; a.object.zoom = this.zoom; a.object.near = this.near; a.object.far = this.far; a.object.focus = this.focus; a.object.aspect = this.aspect; this.view !== null && (a.object.view = {

          ...this.view,
        }); a.object.filmGauge = this.filmGauge; a.object.filmOffset = this.filmOffset; return a;
      },
    }); Hc.prototype = Object.create(D.prototype); Hc.prototype.constructor = Hc; Eb.prototype = Object.create(va.prototype); Eb.prototype.constructor = Eb; Eb.prototype.isWebGLRenderTargetCube = !0; Eb.prototype.fromEquirectangularTexture = function (a, b) {
      this.texture.type = b.type; this.texture.format = b.format; this.texture.encoding = b.encoding; const c = new pb(); let
        d = new oa({
          type: 'CubemapFromEquirect',
          uniforms: bc({ tEquirect: { value: null } }),
          vertexShader: 'varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}',
          fragmentShader: 'uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}',
          side: 1,
          blending: 0,
        }); d.uniforms.tEquirect.value = b; b = new ca(new Jd(
        5,
        5,
        5,
      ), d); c.add(b); d = new Hc(1, 10, 1); d.renderTarget = this; d.renderTarget.texture.name = 'CubeCameraTexture'; d.update(a, c); b.geometry.dispose(); b.material.dispose(); return this;
    }; cc.prototype = Object.create(T.prototype); cc.prototype.constructor = cc; cc.prototype.isDataTexture = !0; const vd = new qb(); const
      Lf = new n(); Object.assign(Hd.prototype, {
      set(a, b, c, d, e, f) { const g = this.planes; g[0].copy(a); g[1].copy(b); g[2].copy(c); g[3].copy(d); g[4].copy(e); g[5].copy(f); return this; },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) { for (let b = this.planes, c = 0; c < 6; c++)b[c].copy(a.planes[c]); return this; },
      setFromMatrix(a) {
        const b = this.planes; let c = a.elements; a = c[0]; const d = c[1]; const e = c[2]; const f = c[3]; const g = c[4]; const k = c[5]; const h = c[6]; const m = c[7]; const n = c[8]; const p = c[9]; const q = c[10]; const t = c[11]; const r = c[12]; const u = c[13]; const z = c[14]; c = c[15]; b[0].setComponents(f - a, m - g, t - n, c - r).normalize(); b[1].setComponents(f + a, m + g, t + n, c + r).normalize(); b[2].setComponents(f + d, m + k, t + p, c + u).normalize(); b[3].setComponents(f - d, m - k, t - p, c - u).normalize(); b[4].setComponents(f - e, m - h, t - q, c - z).normalize();
        b[5].setComponents(f + e, m + h, t + q, c + z).normalize(); return this;
      },
      intersectsObject(a) { const b = a.geometry; b.boundingSphere === null && b.computeBoundingSphere(); vd.copy(b.boundingSphere).applyMatrix4(a.matrixWorld); return this.intersectsSphere(vd); },
      intersectsSprite(a) { vd.center.set(0, 0, 0); vd.radius = 0.7071067811865476; vd.applyMatrix4(a.matrixWorld); return this.intersectsSphere(vd); },
      intersectsSphere(a) {
        const b = this.planes; const c = a.center; a = -a.radius; for (let d = 0; d < 6; d++) {
          if (b[d].distanceToPoint(c)
< a) return !1;
        } return !0;
      },
      intersectsBox(a) { for (let b = this.planes, c = 0; c < 6; c++) { const d = b[c]; Lf.x = d.normal.x > 0 ? a.max.x : a.min.x; Lf.y = d.normal.y > 0 ? a.max.y : a.min.y; Lf.z = d.normal.z > 0 ? a.max.z : a.min.z; if (d.distanceToPoint(Lf) < 0) return !1; } return !0; },
      containsPoint(a) { for (let b = this.planes, c = 0; c < 6; c++) if (b[c].distanceToPoint(a) < 0) return !1; return !0; },
    }); var N = {
      alphamap_fragment: '#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif',
      alphamap_pars_fragment: '#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
      alphatest_fragment: '#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif',
      aomap_fragment: '#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif',
      aomap_pars_fragment: '#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif',
      begin_vertex: 'vec3 transformed = vec3( position );',
      beginnormal_vertex: 'vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif',
      bsdfs: 'vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif',
      bumpmap_pars_fragment: '#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif',
      clipping_planes_fragment: '#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif',
      clipping_planes_pars_fragment: '#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif',
      clipping_planes_pars_vertex: '#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif',
      clipping_planes_vertex: '#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif',
      color_fragment: '#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif',
      color_pars_fragment: '#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif',
      color_pars_vertex: '#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif',
      color_vertex: '#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif',
      common: '#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}',
      cube_uv_reflection_fragment: '#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif',
      defaultnormal_vertex: 'vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif',
      displacementmap_pars_vertex: '#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif',
      displacementmap_vertex: '#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif',
      emissivemap_fragment: '#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif',
      emissivemap_pars_fragment: '#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif',
      encodings_fragment: 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
      encodings_pars_fragment: '\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}',
      envmap_fragment: '#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ), 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif',
      envmap_common_pars_fragment: '#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif',
      envmap_pars_fragment: '#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif',
      envmap_pars_vertex: '#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif',
      envmap_physical_pars_fragment: '#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif',
      envmap_vertex: '#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif',
      fog_vertex: '#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif',
      fog_pars_vertex: '#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif',
      fog_fragment: '#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif',
      fog_pars_fragment: '#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif',
      gradientmap_pars_fragment: '#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}',
      lightmap_fragment: '#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif',
      lightmap_pars_fragment: '#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif',
      lights_lambert_vertex: 'vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif',
      lights_pars_begin: 'uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif',
      lights_toon_fragment: 'ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;',
      lights_toon_pars_fragment: 'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)',
      lights_phong_fragment: 'BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;',
      lights_phong_pars_fragment: 'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)',
      lights_physical_fragment: 'PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif',
      lights_physical_pars_fragment: 'struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}',
      lights_fragment_begin: '\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif',
      lights_fragment_maps: '#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif',
      lights_fragment_end: '#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif',
      logdepthbuf_fragment: '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif',
      logdepthbuf_pars_fragment: '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif',
      logdepthbuf_pars_vertex: '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif',
      logdepthbuf_vertex: '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif',
      map_fragment: '#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif',
      map_pars_fragment: '#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif',
      map_particle_fragment: '#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif',
      map_particle_pars_fragment: '#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
      metalnessmap_fragment: 'float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif',
      metalnessmap_pars_fragment: '#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif',
      morphnormal_vertex: '#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif',
      morphtarget_pars_vertex: '#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif',
      morphtarget_vertex: '#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif',
      normal_fragment_begin: '#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;',
      normal_fragment_maps: '#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif',
      normalmap_pars_fragment: '#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif',
      clearcoat_normal_fragment_begin: '#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif',
      clearcoat_normal_fragment_maps: '#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif',
      clearcoat_normalmap_pars_fragment: '#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif',
      packing: 'vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}',
      premultiplied_alpha_fragment: '#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif',
      project_vertex: 'vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;',
      dithering_fragment: '#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif',
      dithering_pars_fragment: '#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif',
      roughnessmap_fragment: 'float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif',
      roughnessmap_pars_fragment: '#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif',
      shadowmap_pars_fragment: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif',
      shadowmap_pars_vertex: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif',
      shadowmap_vertex: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif',
      shadowmask_pars_fragment: 'float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}',
      skinbase_vertex: '#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif',
      skinning_pars_vertex: '#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif',
      skinning_vertex: '#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif',
      skinnormal_vertex: '#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif',
      specularmap_fragment: 'float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif',
      specularmap_pars_fragment: '#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif',
      tonemapping_fragment: '#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif',
      tonemapping_pars_fragment: '#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}',
      uv_pars_fragment: '#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif',
      uv_pars_vertex: '#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif',
      uv_vertex: '#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif',
      uv2_pars_fragment: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif',
      uv2_pars_vertex: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif',
      uv2_vertex: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif',
      worldpos_vertex: '#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif',
      background_frag: 'uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
      background_vert: 'varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}',
      cube_frag: '#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
      cube_vert: 'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}',
      depth_frag: '#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}',
      depth_vert: '#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}',
      distanceRGBA_frag: '#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}',
      distanceRGBA_vert: '#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}',
      equirect_frag: 'uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
      equirect_vert: 'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}',
      linedashed_frag: 'uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
      linedashed_vert: 'uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
      meshbasic_frag: 'uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
      meshbasic_vert: '#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}',
      meshlambert_frag: 'uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshlambert_vert: '#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      meshmatcap_frag: '#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
      meshmatcap_vert: '#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}',
      meshtoon_frag: '#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshtoon_vert: '#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      meshphong_frag: '#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshphong_vert: '#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      meshphysical_frag: '#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
      meshphysical_vert: '#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      normal_frag: '#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}',
      normal_vert: '#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}',
      points_frag: 'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
      points_vert: 'uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}',
      shadow_frag: 'uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}',
      shadow_vert: '#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
      sprite_frag: 'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
      sprite_vert: 'uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
    };
    var E = {
      common: {
        diffuse: { value: new y(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new za() }, uv2Transform: { value: new za() }, alphaMap: { value: null },
      },
      specularmap: { specularMap: { value: null } },
      envmap: {
        envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: 0.98 }, maxMipLevel: { value: 0 },
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
      emissivemap: { emissiveMap: { value: null } },
      bumpmap: {
        bumpMap: { value: null },
        bumpScale: { value: 1 },
      },
      normalmap: { normalMap: { value: null }, normalScale: { value: new x(1, 1) } },
      displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } },
      roughnessmap: { roughnessMap: { value: null } },
      metalnessmap: { metalnessMap: { value: null } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 2.5E-4 }, fogNear: { value: 1 }, fogFar: { value: 2E3 }, fogColor: { value: new y(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {},
          },
        },
        spotShadowMap: { value: [] },
        spotShadowMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
        rectAreaLights: {
          value: [],
          properties: {
            color: {}, position: {}, width: {}, height: {},
          },
        },
      },
      points: {
        diffuse: { value: new y(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new za() },
      },
      sprite: {
        diffuse: { value: new y(15658734) },
        opacity: { value: 1 },
        center: { value: new x(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        alphaMap: { value: null },
        uvTransform: { value: new za() },
      },
    }; var eb = {
      basic: { uniforms: na([E.common, E.specularmap, E.envmap, E.aomap, E.lightmap, E.fog]), vertexShader: N.meshbasic_vert, fragmentShader: N.meshbasic_frag },
      lambert: { uniforms: na([E.common, E.specularmap, E.envmap, E.aomap, E.lightmap, E.emissivemap, E.fog, E.lights, { emissive: { value: new y(0) } }]), vertexShader: N.meshlambert_vert, fragmentShader: N.meshlambert_frag },
      phong: {
        uniforms: na([E.common, E.specularmap, E.envmap, E.aomap, E.lightmap, E.emissivemap, E.bumpmap, E.normalmap,
          E.displacementmap, E.fog, E.lights, { emissive: { value: new y(0) }, specular: { value: new y(1118481) }, shininess: { value: 30 } }]),
        vertexShader: N.meshphong_vert,
        fragmentShader: N.meshphong_frag,
      },
      standard: {
        uniforms: na([E.common, E.envmap, E.aomap, E.lightmap, E.emissivemap, E.bumpmap, E.normalmap, E.displacementmap, E.roughnessmap, E.metalnessmap, E.fog, E.lights, {
          emissive: { value: new y(0) }, roughness: { value: 0.5 }, metalness: { value: 0.5 }, envMapIntensity: { value: 1 },
        }]),
        vertexShader: N.meshphysical_vert,
        fragmentShader: N.meshphysical_frag,
      },
      toon: { uniforms: na([E.common, E.specularmap, E.aomap, E.lightmap, E.emissivemap, E.bumpmap, E.normalmap, E.displacementmap, E.gradientmap, E.fog, E.lights, { emissive: { value: new y(0) }, specular: { value: new y(1118481) }, shininess: { value: 30 } }]), vertexShader: N.meshtoon_vert, fragmentShader: N.meshtoon_frag },
      matcap: { uniforms: na([E.common, E.bumpmap, E.normalmap, E.displacementmap, E.fog, { matcap: { value: null } }]), vertexShader: N.meshmatcap_vert, fragmentShader: N.meshmatcap_frag },
      points: {
        uniforms: na([E.points, E.fog]),
        vertexShader: N.points_vert,
        fragmentShader: N.points_frag,
      },
      dashed: { uniforms: na([E.common, E.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: N.linedashed_vert, fragmentShader: N.linedashed_frag },
      depth: { uniforms: na([E.common, E.displacementmap]), vertexShader: N.depth_vert, fragmentShader: N.depth_frag },
      normal: { uniforms: na([E.common, E.bumpmap, E.normalmap, E.displacementmap, { opacity: { value: 1 } }]), vertexShader: N.normal_vert, fragmentShader: N.normal_frag },
      sprite: {
        uniforms: na([E.sprite, E.fog]),
        vertexShader: N.sprite_vert,
        fragmentShader: N.sprite_frag,
      },
      background: { uniforms: { uvTransform: { value: new za() }, t2D: { value: null } }, vertexShader: N.background_vert, fragmentShader: N.background_frag },
      cube: { uniforms: na([E.envmap, { opacity: { value: 1 } }]), vertexShader: N.cube_vert, fragmentShader: N.cube_frag },
      equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: N.equirect_vert, fragmentShader: N.equirect_frag },
      distanceRGBA: {
        uniforms: na([E.common, E.displacementmap, { referencePosition: { value: new n() }, nearDistance: { value: 1 }, farDistance: { value: 1E3 } }]),
        vertexShader: N.distanceRGBA_vert,
        fragmentShader: N.distanceRGBA_frag,
      },
      shadow: { uniforms: na([E.lights, E.fog, { color: { value: new y(0) }, opacity: { value: 1 } }]), vertexShader: N.shadow_vert, fragmentShader: N.shadow_frag },
    }; eb.physical = {
      uniforms: na([eb.standard.uniforms, {
        transparency: { value: 0 }, clearcoat: { value: 0 }, clearcoatRoughness: { value: 0 }, sheen: { value: new y(0) }, clearcoatNormalScale: { value: new x(1, 1) }, clearcoatNormalMap: { value: null },
      }]),
      vertexShader: N.meshphysical_vert,
      fragmentShader: N.meshphysical_frag,
    }; Id.prototype = Object.create(M.prototype); Id.prototype.constructor = Id; dc.prototype = Object.create(G.prototype); dc.prototype.constructor = dc; rb.prototype = Object.create(T.prototype); rb.prototype.constructor = rb; rb.prototype.isCubeTexture = !0; Object.defineProperty(rb.prototype, 'images', { get() { return this.image; }, set(a) { this.image = a; } }); Ic.prototype = Object.create(T.prototype); Ic.prototype.constructor = Ic; Ic.prototype.isDataTexture2DArray = !0; Jc.prototype = Object.create(T.prototype); Jc.prototype.constructor = Jc; Jc.prototype.isDataTexture3D = !0; var Fh = new T(); var Mj = new Ic(); var Oj = new Jc(); var Gh = new rb(); var zh = []; var Bh = []; var Eh = new Float32Array(16); var Dh = new Float32Array(9); var
      Ch = new Float32Array(4); Hh.prototype.updateCache = function (a) { const b = this.cache; a instanceof Float32Array && b.length !== a.length && (this.cache = new Float32Array(a.length)); Ia(b, a); }; Ih.prototype.setValue = function (a, b, c) { for (let d = this.seq, e = 0, f = d.length; e !== f; ++e) { const g = d[e]; g.setValue(a, b[g.id], c); } }; var hg = /([\w\d_]+)(\])?(\[|\.)?/g; Fb.prototype.setValue = function (
      a,
      b,
      c,
      d,
    ) { b = this.map[b]; void 0 !== b && b.setValue(a, c, d); }; Fb.prototype.setOptional = function (a, b, c) { b = b[c]; void 0 !== b && this.setValue(a, c, b); }; Fb.upload = function (a, b, c, d) { for (let e = 0, f = b.length; e !== f; ++e) { const g = b[e]; const k = c[g.id]; !1 !== k.needsUpdate && g.setValue(a, k.value, d); } }; Fb.seqWithValue = function (a, b) { for (var c = [], d = 0, e = a.length; d !== e; ++d) { const f = a[d]; f.id in b && c.push(f); } return c; }; var tk = 0; var jg = /^[ \t]*#include +<([\w\d./]+)>/gm; var Qh = /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
    var Ck = 0; Gb.prototype = Object.create(L.prototype); Gb.prototype.constructor = Gb; Gb.prototype.isMeshDepthMaterial = !0; Gb.prototype.copy = function (a) { L.prototype.copy.call(this, a); this.depthPacking = a.depthPacking; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.map = a.map; this.alphaMap = a.alphaMap; this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; return this; };
    Hb.prototype = Object.create(L.prototype); Hb.prototype.constructor = Hb; Hb.prototype.isMeshDistanceMaterial = !0; Hb.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.referencePosition.copy(a.referencePosition); this.nearDistance = a.nearDistance; this.farDistance = a.farDistance; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.map = a.map; this.alphaMap = a.alphaMap; this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias;
      return this;
    }; og.prototype = Object.assign(Object.create(va.prototype), {
      constructor: og, isWebGLMultiviewRenderTarget: !0, copy(a) { va.prototype.copy.call(this, a); this.numViews = a.numViews; return this; }, setNumViews(a) { this.numViews !== a && (this.numViews = a, this.dispose()); return this; },
    }); Pe.prototype = Object.assign(Object.create(pa.prototype), { constructor: Pe, isArrayCamera: !0 }); Od.prototype = Object.assign(Object.create(D.prototype), { constructor: Od, isGroup: !0 }); Object.assign(Wh.prototype, Fa.prototype);
    Object.assign(Qe.prototype, { isFogExp2: !0, clone() { return new Qe(this.color, this.density); }, toJSON() { return { type: 'FogExp2', color: this.color.getHex(), density: this.density }; } }); Object.assign(Re.prototype, {
      isFog: !0,
      clone() { return new Re(this.color, this.near, this.far); },
      toJSON() {
        return {
          type: 'Fog', color: this.color.getHex(), near: this.near, far: this.far,
        };
      },
    }); Object.defineProperty(sb.prototype, 'needsUpdate', { set(a) { !0 === a && this.version++; } }); Object.assign(
      sb.prototype,
      {
        isInterleavedBuffer: !0,
        onUploadCallback() {},
        setUsage(a) { this.usage = a; return this; },
        copy(a) { this.array = new a.array.constructor(a.array); this.count = a.count; this.stride = a.stride; this.usage = a.usage; return this; },
        copyAt(a, b, c) { a *= this.stride; c *= b.stride; for (let d = 0, e = this.stride; d < e; d++) this.array[a + d] = b.array[c + d]; return this; },
        set(a, b) { void 0 === b && (b = 0); this.array.set(a, b); return this; },
        clone() { return (new this.constructor()).copy(this); },
        onUpload(a) {
          this.onUploadCallback = a; return this;
        },
      },
    ); const wc = new n(); Object.defineProperties(Pd.prototype, { count: { get() { return this.data.count; } }, array: { get() { return this.data.array; } } }); Object.assign(Pd.prototype, {
      isInterleavedBufferAttribute: !0,
      applyMatrix4(a) { for (let b = 0, c = this.data.count; b < c; b++)wc.x = this.getX(b), wc.y = this.getY(b), wc.z = this.getZ(b), wc.applyMatrix4(a), this.setXYZ(b, wc.x, wc.y, wc.z); return this; },
      setX(a, b) { this.data.array[a * this.data.stride + this.offset] = b; return this; },
      setY(
        a,
        b,
      ) { this.data.array[a * this.data.stride + this.offset + 1] = b; return this; },
      setZ(a, b) { this.data.array[a * this.data.stride + this.offset + 2] = b; return this; },
      setW(a, b) { this.data.array[a * this.data.stride + this.offset + 3] = b; return this; },
      getX(a) { return this.data.array[a * this.data.stride + this.offset]; },
      getY(a) { return this.data.array[a * this.data.stride + this.offset + 1]; },
      getZ(a) { return this.data.array[a * this.data.stride + this.offset + 2]; },
      getW(a) {
        return this.data.array[a
* this.data.stride + this.offset + 3];
      },
      setXY(a, b, c) { a = a * this.data.stride + this.offset; this.data.array[a + 0] = b; this.data.array[a + 1] = c; return this; },
      setXYZ(a, b, c, d) { a = a * this.data.stride + this.offset; this.data.array[a + 0] = b; this.data.array[a + 1] = c; this.data.array[a + 2] = d; return this; },
      setXYZW(a, b, c, d, e) { a = a * this.data.stride + this.offset; this.data.array[a + 0] = b; this.data.array[a + 1] = c; this.data.array[a + 2] = d; this.data.array[a + 3] = e; return this; },
    }); Jb.prototype = Object.create(L.prototype); Jb.prototype.constructor = Jb; Jb.prototype.isSpriteMaterial = !0; Jb.prototype.copy = function (a) { L.prototype.copy.call(this, a); this.color.copy(a.color); this.map = a.map; this.alphaMap = a.alphaMap; this.rotation = a.rotation; this.sizeAttenuation = a.sizeAttenuation; return this; }; let Mc; const Ee = new n(); const wd = new n(); const xd = new n(); var Nc = new x(); var Rd = new x(); var Yh = new P(); const Mf = new n(); const Fe = new n(); const Nf = new n(); const Oi = new x(); const mh = new x(); const Pi = new x(); Qd.prototype = Object.assign(Object.create(D.prototype), {
      constructor: Qd,
      isSprite: !0,
      raycast(a, b) {
        a.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
        wd.setFromMatrixScale(this.matrixWorld); Yh.copy(a.camera.matrixWorld); this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse, this.matrixWorld); xd.setFromMatrixPosition(this.modelViewMatrix); a.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && wd.multiplyScalar(-xd.z); let c = this.material.rotation; if (c !== 0) { var d = Math.cos(c); var e = Math.sin(c); }c = this.center; Se(Mf.set(-0.5, -0.5, 0), xd, c, wd, e, d); Se(Fe.set(0.5, -0.5, 0), xd, c, wd, e, d); Se(Nf.set(0.5, 0.5, 0), xd, c, wd, e, d); Oi.set(0, 0); mh.set(
          1,
          0,
        ); Pi.set(1, 1); let f = a.ray.intersectTriangle(Mf, Fe, Nf, !1, Ee); if (f === null && (Se(Fe.set(-0.5, 0.5, 0), xd, c, wd, e, d), mh.set(0, 1), f = a.ray.intersectTriangle(Mf, Nf, Fe, !1, Ee), f === null)) return; e = a.ray.origin.distanceTo(Ee); e < a.near || e > a.far || b.push({
          distance: e, point: Ee.clone(), uv: ma.getUV(Ee, Mf, Fe, Nf, Oi, mh, Pi, new x()), face: null, object: this,
        });
      },
      clone() { return (new this.constructor(this.material)).copy(this); },
      copy(a) { D.prototype.copy.call(this, a); void 0 !== a.center && this.center.copy(a.center); return this; },
    });
    const Of = new n(); const
      Qi = new n(); Sd.prototype = Object.assign(Object.create(D.prototype), {
      constructor: Sd,
      isLOD: !0,
      copy(a) { D.prototype.copy.call(this, a, !1); for (let b = a.levels, c = 0, d = b.length; c < d; c++) { const e = b[c]; this.addLevel(e.object.clone(), e.distance); } this.autoUpdate = a.autoUpdate; return this; },
      addLevel(a, b) { void 0 === b && (b = 0); b = Math.abs(b); for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++);c.splice(d, 0, { distance: b, object: a }); this.add(a); return this; },
      getObjectForDistance(a) {
        const b = this.levels; if (b.length > 0) { for (var c = 1, d = b.length; c < d && !(a < b[c].distance); c++);return b[c - 1].object; } return null;
      },
      raycast(a, b) { if (this.levels.length > 0) { Of.setFromMatrixPosition(this.matrixWorld); const c = a.ray.origin.distanceTo(Of); this.getObjectForDistance(c).raycast(a, b); } },
      update(a) {
        const b = this.levels; if (b.length > 1) {
          Of.setFromMatrixPosition(a.matrixWorld); Qi.setFromMatrixPosition(this.matrixWorld); a = Of.distanceTo(Qi); b[0].object.visible = !0; for (var c = 1, d = b.length; c < d; c++) {
            if (a >= b[c].distance) {
              b[c
- 1].object.visible = !1, b[c].object.visible = !0;
            } else break;
          } for (;c < d; c++)b[c].object.visible = !1;
        }
      },
      toJSON(a) { a = D.prototype.toJSON.call(this, a); !1 === this.autoUpdate && (a.object.autoUpdate = !1); a.object.levels = []; for (let b = this.levels, c = 0, d = b.length; c < d; c++) { const e = b[c]; a.object.levels.push({ object: e.object.uuid, distance: e.distance }); } return a; },
    }); Td.prototype = Object.assign(Object.create(ca.prototype), {
      constructor: Td,
      isSkinnedMesh: !0,
      bind(a, b) {
        this.skeleton = a; void 0 === b && (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(), b = this.matrixWorld); this.bindMatrix.copy(b); this.bindMatrixInverse.getInverse(b);
      },
      pose() { this.skeleton.pose(); },
      normalizeSkinWeights() { for (let a = new S(), b = this.geometry.attributes.skinWeight, c = 0, d = b.count; c < d; c++) { a.x = b.getX(c); a.y = b.getY(c); a.z = b.getZ(c); a.w = b.getW(c); const e = 1 / a.manhattanLength(); Infinity !== e ? a.multiplyScalar(e) : a.set(1, 0, 0, 0); b.setXYZW(c, a.x, a.y, a.z, a.w); } },
      updateMatrixWorld(a) {
        ca.prototype.updateMatrixWorld.call(this, a); this.bindMode
=== 'attached' ? this.bindMatrixInverse.getInverse(this.matrixWorld) : this.bindMode === 'detached' ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: ${this.bindMode}`);
      },
      clone() { return (new this.constructor(this.geometry, this.material)).copy(this); },
    }); const Ri = new P(); const
      Yk = new P(); Object.assign(Te.prototype, {
      calculateInverses() {
        this.boneInverses = []; for (let a = 0, b = this.bones.length; a < b; a++) {
          const c = new P(); this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
          this.boneInverses.push(c);
        }
      },
      pose() { let a; let b; let c = 0; for (b = this.bones.length; c < b; c++)(a = this.bones[c]) && a.matrixWorld.getInverse(this.boneInverses[c]); c = 0; for (b = this.bones.length; c < b; c++) if (a = this.bones[c])a.parent && a.parent.isBone ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale); },
      update() {
        for (var a = this.bones, b = this.boneInverses, c = this.boneMatrices, d = this.boneTexture, e = 0, f = a.length; e < f; e++)Ri.multiplyMatrices(a[e] ? a[e].matrixWorld : Yk, b[e]), Ri.toArray(c, 16 * e); void 0 !== d && (d.needsUpdate = !0);
      },
      clone() { return new Te(this.bones, this.boneInverses); },
      getBoneByName(a) { for (let b = 0, c = this.bones.length; b < c; b++) { const d = this.bones[b]; if (d.name === a) return d; } },
    }); qg.prototype = Object.assign(Object.create(D.prototype), { constructor: qg, isBone: !0 }); const Si = new P(); const Ti = new P(); const yd = []; const
      Ge = new ca(); Ue.prototype = Object.assign(Object.create(ca.prototype), {
      constructor: Ue,
      isInstancedMesh: !0,
      getMatrixAt(a, b) { b.fromArray(this.instanceMatrix.array, 16 * a); },
      raycast(a, b) { const c = this.matrixWorld; const d = this.count; Ge.geometry = this.geometry; Ge.material = this.material; if (void 0 !== Ge.material) for (let e = 0; e < d; e++) this.getMatrixAt(e, Si), Ti.multiplyMatrices(c, Si), Ge.matrixWorld = Ti, Ge.raycast(a, yd), yd.length > 0 && (yd[0].instanceId = e, yd[0].object = this, b.push(yd[0]), yd.length = 0); },
      setMatrixAt(a, b) { b.toArray(this.instanceMatrix.array, 16 * a); },
      updateMorphTargets() {},
    }); ja.prototype = Object.create(L.prototype); ja.prototype.constructor = ja; ja.prototype.isLineBasicMaterial = !0; ja.prototype.copy = function (a) { L.prototype.copy.call(this, a); this.color.copy(a.color); this.linewidth = a.linewidth; this.linecap = a.linecap; this.linejoin = a.linejoin; return this; }; const Ui = new n(); const Vi = new n(); const Wi = new P(); const Pf = new Wb(); const
      He = new qb(); Ja.prototype = Object.assign(Object.create(D.prototype), {
      constructor: Ja,
      isLine: !0,
      computeLineDistances() {
        const a = this.geometry; if (a.isBufferGeometry) {
          if (a.index === null) {
            for (var b = a.attributes.position,
              c = [0], d = 1, e = b.count; d < e; d++)Ui.fromBufferAttribute(b, d - 1), Vi.fromBufferAttribute(b, d), c[d] = c[d - 1], c[d] += Ui.distanceTo(Vi); a.setAttribute('lineDistance', new C(c, 1));
          } else console.warn('THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.');
        } else if (a.isGeometry) for (b = a.vertices, c = a.lineDistances, c[0] = 0, d = 1, e = b.length; d < e; d++)c[d] = c[d - 1], c[d] += b[d - 1].distanceTo(b[d]); return this;
      },
      raycast(a, b) {
        let c = a.linePrecision; let d = this.geometry; let e = this.matrixWorld; d.boundingSphere
=== null && d.computeBoundingSphere(); He.copy(d.boundingSphere); He.applyMatrix4(e); He.radius += c; if (!1 !== a.ray.intersectsSphere(He)) {
          Wi.getInverse(e); Pf.copy(a.ray).applyMatrix4(Wi); c /= (this.scale.x + this.scale.y + this.scale.z) / 3; c *= c; let f = new n(); let
            g = new n(); e = new n(); const k = new n(); const
            h = this && this.isLineSegments ? 2 : 1; if (d.isBufferGeometry) {
            let m = d.index; const v = d.attributes.position.array; if (m !== null) {
              m = m.array; d = 0; for (var p = m.length - 1; d < p; d += h) {
                var q = m[d + 1]; f.fromArray(v, 3 * m[d]); g.fromArray(v, 3 * q); q = Pf.distanceSqToSegment(
                  f,
                  g,
                  k,
                  e,
                ); q > c || (k.applyMatrix4(this.matrixWorld), q = a.ray.origin.distanceTo(k), q < a.near || q > a.far || b.push({
                  distance: q, point: e.clone().applyMatrix4(this.matrixWorld), index: d, face: null, faceIndex: null, object: this,
                }));
              }
            } else {
              for (d = 0, p = v.length / 3 - 1; d < p; d += h) {
                f.fromArray(v, 3 * d), g.fromArray(v, 3 * d + 3), q = Pf.distanceSqToSegment(f, g, k, e), q > c || (k.applyMatrix4(this.matrixWorld), q = a.ray.origin.distanceTo(k), q < a.near || q > a.far || b.push({
                  distance: q,
                  point: e.clone().applyMatrix4(this.matrixWorld),
                  index: d,
                  face: null,
                  faceIndex: null,
                  object: this,
                }));
              }
            }
          } else if (d.isGeometry) {
            for (f = d.vertices, g = f.length, d = 0; d < g - 1; d += h) {
              q = Pf.distanceSqToSegment(f[d], f[d + 1], k, e), q > c || (k.applyMatrix4(this.matrixWorld), q = a.ray.origin.distanceTo(k), q < a.near || q > a.far || b.push({
                distance: q, point: e.clone().applyMatrix4(this.matrixWorld), index: d, face: null, faceIndex: null, object: this,
              }));
            }
          }
        }
      },
      clone() { return (new this.constructor(this.geometry, this.material)).copy(this); },
    }); const Qf = new n(); const
      Rf = new n(); la.prototype = Object.assign(Object.create(Ja.prototype), {
      constructor: la,
      isLineSegments: !0,
      computeLineDistances() {
        const a = this.geometry; if (a.isBufferGeometry) if (a.index === null) { for (var b = a.attributes.position, c = [], d = 0, e = b.count; d < e; d += 2)Qf.fromBufferAttribute(b, d), Rf.fromBufferAttribute(b, d + 1), c[d] = d === 0 ? 0 : c[d - 1], c[d + 1] = c[d] + Qf.distanceTo(Rf); a.setAttribute('lineDistance', new C(c, 1)); } else console.warn('THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'); else if (a.isGeometry) {
          for (b = a.vertices, c = a.lineDistances, d = 0, e = b.length; d < e; d += 2)Qf.copy(b[d]), Rf.copy(b[d + 1]), c[d] = d === 0 ? 0 : c[d - 1], c[d + 1] = c[d] + Qf.distanceTo(Rf);
        } return this;
      },
    }); Ve.prototype = Object.assign(Object.create(Ja.prototype), { constructor: Ve, isLineLoop: !0 }); Va.prototype = Object.create(L.prototype); Va.prototype.constructor = Va; Va.prototype.isPointsMaterial = !0; Va.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.color.copy(a.color); this.map = a.map; this.alphaMap = a.alphaMap; this.size = a.size; this.sizeAttenuation = a.sizeAttenuation; this.morphTargets = a.morphTargets; return this;
    }; const Xi = new P(); var sg = new Wb(); const Ie = new qb(); const
      Sf = new n(); Oc.prototype = Object.assign(Object.create(D.prototype), {
      constructor: Oc,
      isPoints: !0,
      raycast(a, b) {
        let c = this.geometry; const d = this.matrixWorld; let e = a.params.Points.threshold; c.boundingSphere === null && c.computeBoundingSphere(); Ie.copy(c.boundingSphere); Ie.applyMatrix4(d); Ie.radius += e; if (!1 !== a.ray.intersectsSphere(Ie)) {
          if (Xi.getInverse(d), sg.copy(a.ray).applyMatrix4(Xi), e /= (this.scale.x + this.scale.y + this.scale.z) / 3, e *= e, c.isBufferGeometry) {
            var f = c.index; c = c.attributes.position.array; if (f !== null) { var g = f.array; f = 0; for (let k = g.length; f < k; f++) { const h = g[f]; Sf.fromArray(c, 3 * h); rg(Sf, h, e, d, a, b, this); } } else for (f = 0, g = c.length / 3; f < g; f++)Sf.fromArray(c, 3 * f), rg(Sf, f, e, d, a, b, this);
          } else for (c = c.vertices, f = 0, g = c.length; f < g; f++)rg(c[f], f, e, d, a, b, this);
        }
      },
      updateMorphTargets() {
        let a = this.geometry; if (a.isBufferGeometry) {
          a = a.morphAttributes; let b = Object.keys(a); if (b.length > 0) {
            const c = a[b[0]]; if (void 0 !== c) {
              for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) { const d = c[a].name || String(a); this.morphTargetInfluences.push(0); this.morphTargetDictionary[d] = a; }
            }
          }
        } else a = a.morphTargets, void 0 !== a && a.length > 0 && console.error('THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.');
      },
      clone() { return (new this.constructor(this.geometry, this.material)).copy(this); },
    }); tg.prototype = Object.assign(Object.create(T.prototype), {
      constructor: tg,
      isVideoTexture: !0,
      update() {
        const a = this.image; a.readyState
>= a.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
      },
    }); Pc.prototype = Object.create(T.prototype); Pc.prototype.constructor = Pc; Pc.prototype.isCompressedTexture = !0; Ud.prototype = Object.create(T.prototype); Ud.prototype.constructor = Ud; Ud.prototype.isCanvasTexture = !0; Vd.prototype = Object.create(T.prototype); Vd.prototype.constructor = Vd; Vd.prototype.isDepthTexture = !0; Qc.prototype = Object.create(G.prototype); Qc.prototype.constructor = Qc; Wd.prototype = Object.create(M.prototype); Wd.prototype.constructor = Wd; Rc.prototype = Object.create(G.prototype);
    Rc.prototype.constructor = Rc; Xd.prototype = Object.create(M.prototype); Xd.prototype.constructor = Xd; Ga.prototype = Object.create(G.prototype); Ga.prototype.constructor = Ga; Yd.prototype = Object.create(M.prototype); Yd.prototype.constructor = Yd; Sc.prototype = Object.create(Ga.prototype); Sc.prototype.constructor = Sc; Zd.prototype = Object.create(M.prototype); Zd.prototype.constructor = Zd; ec.prototype = Object.create(Ga.prototype); ec.prototype.constructor = ec; $d.prototype = Object.create(M.prototype); $d.prototype.constructor = $d; Tc.prototype = Object.create(Ga.prototype); Tc.prototype.constructor = Tc; ae.prototype = Object.create(M.prototype); ae.prototype.constructor = ae; Uc.prototype = Object.create(Ga.prototype); Uc.prototype.constructor = Uc; be.prototype = Object.create(M.prototype); be.prototype.constructor = be; fc.prototype = Object.create(G.prototype); fc.prototype.constructor = fc; fc.prototype.toJSON = function () { const a = G.prototype.toJSON.call(this); a.path = this.parameters.path.toJSON(); return a; }; ce.prototype = Object.create(M.prototype); ce.prototype.constructor = ce; Vc.prototype = Object.create(G.prototype); Vc.prototype.constructor = Vc; de.prototype = Object.create(M.prototype); de.prototype.constructor = de; Wc.prototype = Object.create(G.prototype); Wc.prototype.constructor = Wc; const Zk = {
      triangulate(a, b, c) {
        c = c || 2; let d = b && b.length; const e = d ? b[0] * c : a.length; let f = Zh(a, 0, e, c, !0); const g = []; if (!f || f.next === f.prev) return g; let k; if (d) {
          var h = c; d = []; let m; var n = 0; for (m = b.length; n < m; n++) { let p = b[n] * h; const q = n < m - 1 ? b[n + 1] * h : a.length; p = Zh(a, p, q, h, !1); p === p.next && (p.steiner = !0); d.push(Kk(p)); }d.sort(Ik);
          for (n = 0; n < d.length; n++) { b = d[n]; h = f; if (h = Jk(b, h))b = bi(h, b), fe(b, b.next); f = fe(f, f.next); }
        } if (a.length > 80 * c) { var t = k = a[0]; var r = d = a[1]; for (h = c; h < e; h += c)n = a[h], b = a[h + 1], n < t && (t = n), b < r && (r = b), n > k && (k = n), b > d && (d = b); k = Math.max(k - t, d - r); k = k !== 0 ? 1 / k : 0; }ge(f, g, c, t, r, k); return g;
      },
    }; var tb = {
      area(a) { for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++)c += a[d].x * a[e].y - a[e].x * a[d].y; return 0.5 * c; },
      isClockWise(a) { return tb.area(a) < 0; },
      triangulateShape(a, b) {
        const c = []; const d = []; const e = []; ci(a); di(c, a); let f = a.length; b.forEach(ci);
        for (a = 0; a < b.length; a++)d.push(f), f += b[a].length, di(c, b[a]); b = Zk.triangulate(c, d); for (a = 0; a < b.length; a += 3)e.push(b.slice(a, a + 3)); return e;
      },
    }; hc.prototype = Object.create(M.prototype); hc.prototype.constructor = hc; hc.prototype.toJSON = function () { const a = M.prototype.toJSON.call(this); return ei(this.parameters.shapes, this.parameters.options, a); }; gb.prototype = Object.create(G.prototype); gb.prototype.constructor = gb; gb.prototype.toJSON = function () {
      const a = G.prototype.toJSON.call(this); return ei(
        this.parameters.shapes,
        this.parameters.options,
        a,
      );
    }; var Lk = { generateTopUV(a, b, c, d, e) { a = b[3 * d]; d = b[3 * d + 1]; const f = b[3 * e]; e = b[3 * e + 1]; return [new x(b[3 * c], b[3 * c + 1]), new x(a, d), new x(f, e)]; }, generateSideWallUV(a, b, c, d, e, f) { a = b[3 * c]; const g = b[3 * c + 1]; c = b[3 * c + 2]; const k = b[3 * d]; const h = b[3 * d + 1]; d = b[3 * d + 2]; const m = b[3 * e]; const n = b[3 * e + 1]; e = b[3 * e + 2]; const p = b[3 * f]; const q = b[3 * f + 1]; b = b[3 * f + 2]; return Math.abs(g - h) < 0.01 ? [new x(a, 1 - c), new x(k, 1 - d), new x(m, 1 - e), new x(p, 1 - b)] : [new x(g, 1 - c), new x(h, 1 - d), new x(n, 1 - e), new x(q, 1 - b)]; } }; ie.prototype = Object.create(M.prototype);
    ie.prototype.constructor = ie; Yc.prototype = Object.create(gb.prototype); Yc.prototype.constructor = Yc; je.prototype = Object.create(M.prototype); je.prototype.constructor = je; ic.prototype = Object.create(G.prototype); ic.prototype.constructor = ic; ke.prototype = Object.create(M.prototype); ke.prototype.constructor = ke; Zc.prototype = Object.create(G.prototype); Zc.prototype.constructor = Zc; le.prototype = Object.create(M.prototype); le.prototype.constructor = le; $c.prototype = Object.create(G.prototype); $c.prototype.constructor = $c; jc.prototype = Object.create(M.prototype); jc.prototype.constructor = jc; jc.prototype.toJSON = function () { const a = M.prototype.toJSON.call(this); return fi(this.parameters.shapes, a); }; kc.prototype = Object.create(G.prototype); kc.prototype.constructor = kc; kc.prototype.toJSON = function () { const a = G.prototype.toJSON.call(this); return fi(this.parameters.shapes, a); }; ad.prototype = Object.create(G.prototype); ad.prototype.constructor = ad; lc.prototype = Object.create(M.prototype); lc.prototype.constructor = lc; ub.prototype = Object.create(G.prototype);
    ub.prototype.constructor = ub; me.prototype = Object.create(lc.prototype); me.prototype.constructor = me; ne.prototype = Object.create(ub.prototype); ne.prototype.constructor = ne; oe.prototype = Object.create(M.prototype); oe.prototype.constructor = oe; bd.prototype = Object.create(G.prototype); bd.prototype.constructor = bd; const ua = Object.freeze({
      __proto__: null,
      WireframeGeometry: Qc,
      ParametricGeometry: Wd,
      ParametricBufferGeometry: Rc,
      TetrahedronGeometry: Yd,
      TetrahedronBufferGeometry: Sc,
      OctahedronGeometry: Zd,
      OctahedronBufferGeometry: ec,
      IcosahedronGeometry: $d,
      IcosahedronBufferGeometry: Tc,
      DodecahedronGeometry: ae,
      DodecahedronBufferGeometry: Uc,
      PolyhedronGeometry: Xd,
      PolyhedronBufferGeometry: Ga,
      TubeGeometry: be,
      TubeBufferGeometry: fc,
      TorusKnotGeometry: ce,
      TorusKnotBufferGeometry: Vc,
      TorusGeometry: de,
      TorusBufferGeometry: Wc,
      TextGeometry: ie,
      TextBufferGeometry: Yc,
      SphereGeometry: je,
      SphereBufferGeometry: ic,
      RingGeometry: ke,
      RingBufferGeometry: Zc,
      PlaneGeometry: Id,
      PlaneBufferGeometry: dc,
      LatheGeometry: le,
      LatheBufferGeometry: $c,
      ShapeGeometry: jc,
      ShapeBufferGeometry: kc,
      ExtrudeGeometry: hc,
      ExtrudeBufferGeometry: gb,
      EdgesGeometry: ad,
      ConeGeometry: me,
      ConeBufferGeometry: ne,
      CylinderGeometry: lc,
      CylinderBufferGeometry: ub,
      CircleGeometry: oe,
      CircleBufferGeometry: bd,
      BoxGeometry: lh,
      BoxBufferGeometry: Jd,
    }); mc.prototype = Object.create(L.prototype); mc.prototype.constructor = mc; mc.prototype.isShadowMaterial = !0; mc.prototype.copy = function (a) { L.prototype.copy.call(this, a); this.color.copy(a.color); return this; }; vb.prototype = Object.create(oa.prototype); vb.prototype.constructor = vb; vb.prototype.isRawShaderMaterial = !0; hb.prototype = Object.create(L.prototype); hb.prototype.constructor = hb; hb.prototype.isMeshStandardMaterial = !0; hb.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.defines = { STANDARD: '' }; this.color.copy(a.color); this.roughness = a.roughness; this.metalness = a.metalness; this.map = a.map; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.emissive.copy(a.emissive); this.emissiveMap = a.emissiveMap; this.emissiveIntensity = a.emissiveIntensity;
      this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.roughnessMap = a.roughnessMap; this.metalnessMap = a.metalnessMap; this.alphaMap = a.alphaMap; this.envMap = a.envMap; this.envMapIntensity = a.envMapIntensity; this.refractionRatio = a.refractionRatio; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap; this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
    }; nc.prototype = Object.create(hb.prototype); nc.prototype.constructor = nc; nc.prototype.isMeshPhysicalMaterial = !0; nc.prototype.copy = function (a) {
      hb.prototype.copy.call(this, a); this.defines = { STANDARD: '', PHYSICAL: '' }; this.reflectivity = a.reflectivity; this.clearcoat = a.clearcoat; this.clearcoatRoughness = a.clearcoatRoughness; this.sheen = a.sheen ? (this.sheen || new y()).copy(a.sheen) : null; this.clearcoatNormalMap = a.clearcoatNormalMap; this.clearcoatNormalScale.copy(a.clearcoatNormalScale); this.transparency = a.transparency; return this;
    }; Kb.prototype = Object.create(L.prototype); Kb.prototype.constructor = Kb; Kb.prototype.isMeshPhongMaterial = !0; Kb.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.color.copy(a.color); this.specular.copy(a.specular); this.shininess = a.shininess; this.map = a.map; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.emissive.copy(a.emissive); this.emissiveMap = a.emissiveMap; this.emissiveIntensity = a.emissiveIntensity; this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.specularMap = a.specularMap; this.alphaMap = a.alphaMap; this.envMap = a.envMap; this.combine = a.combine; this.reflectivity = a.reflectivity; this.refractionRatio = a.refractionRatio; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap; this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
    }; oc.prototype = Object.create(L.prototype); oc.prototype.constructor = oc; oc.prototype.isMeshToonMaterial = !0; oc.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.color.copy(a.color); this.specular.copy(a.specular); this.shininess = a.shininess; this.map = a.map; this.gradientMap = a.gradientMap; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.emissive.copy(a.emissive); this.emissiveMap = a.emissiveMap; this.emissiveIntensity = a.emissiveIntensity; this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.specularMap = a.specularMap; this.alphaMap = a.alphaMap; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap; this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
    }; pc.prototype = Object.create(L.prototype); pc.prototype.constructor = pc; pc.prototype.isMeshNormalMaterial = !0; pc.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
    }; qc.prototype = Object.create(L.prototype); qc.prototype.constructor = qc; qc.prototype.isMeshLambertMaterial = !0; qc.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.color.copy(a.color); this.map = a.map; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.emissive.copy(a.emissive); this.emissiveMap = a.emissiveMap; this.emissiveIntensity = a.emissiveIntensity; this.specularMap = a.specularMap; this.alphaMap = a.alphaMap; this.envMap = a.envMap; this.combine = a.combine; this.reflectivity = a.reflectivity; this.refractionRatio = a.refractionRatio; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap; this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
    }; rc.prototype = Object.create(L.prototype); rc.prototype.constructor = rc; rc.prototype.isMeshMatcapMaterial = !0; rc.prototype.copy = function (a) {
      L.prototype.copy.call(this, a); this.defines = { MATCAP: '' }; this.color.copy(a.color); this.matcap = a.matcap; this.map = a.map; this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.alphaMap = a.alphaMap; this.skinning = a.skinning;
      this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
    }; sc.prototype = Object.create(ja.prototype); sc.prototype.constructor = sc; sc.prototype.isLineDashedMaterial = !0; sc.prototype.copy = function (a) { ja.prototype.copy.call(this, a); this.scale = a.scale; this.dashSize = a.dashSize; this.gapSize = a.gapSize; return this; }; const $k = Object.freeze({
      __proto__: null,
      ShadowMaterial: mc,
      SpriteMaterial: Jb,
      RawShaderMaterial: vb,
      ShaderMaterial: oa,
      PointsMaterial: Va,
      MeshPhysicalMaterial: nc,
      MeshStandardMaterial: hb,
      MeshPhongMaterial: Kb,
      MeshToonMaterial: oc,
      MeshNormalMaterial: pc,
      MeshLambertMaterial: qc,
      MeshDepthMaterial: Gb,
      MeshDistanceMaterial: Hb,
      MeshBasicMaterial: Oa,
      MeshMatcapMaterial: rc,
      LineDashedMaterial: sc,
      LineBasicMaterial: ja,
      Material: L,
    }); var ea = {
      arraySlice(a, b, c) { return ea.isTypedArray(a) ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length)) : a.slice(b, c); },
      convertArray(a, b, c) { return !a || !c && a.constructor === b ? a : typeof b.BYTES_PER_ELEMENT === 'number' ? new b(a) : Array.prototype.slice.call(a); },
      isTypedArray(a) {
        return ArrayBuffer.isView(a)
&& !(a instanceof DataView);
      },
      getKeyframeOrder(a) { for (var b = a.length, c = Array(b), d = 0; d !== b; ++d)c[d] = d; c.sort((b, c) => a[b] - a[c]); return c; },
      sortedArray(a, b, c) { for (var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f) for (let k = c[f] * b, h = 0; h !== b; ++h)e[g++] = a[k + h]; return e; },
      flattenJSON(a, b, c, d) {
        for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d];)f = a[e++]; if (void 0 !== f) {
          let g = f[d]; if (void 0 !== g) {
            if (Array.isArray(g)) {
              do {
                g = f[d], void 0 !== g && (b.push(f.time), c.push.apply(c, g)),
                f = a[e++];
              } while (void 0 !== f);
            } else if (void 0 !== g.toArray) { do g = f[d], void 0 !== g && (b.push(f.time), g.toArray(c, c.length)), f = a[e++]; while (void 0 !== f); } else { do g = f[d], void 0 !== g && (b.push(f.time), c.push(g)), f = a[e++]; while (void 0 !== f); }
          }
        }
      },
      subclip(a, b, c, d, e) {
        e = e || 30; a = a.clone(); a.name = b; const f = []; for (b = 0; b < a.tracks.length; ++b) {
          for (var g = a.tracks[b], k = g.getValueSize(), h = [], m = [], n = 0; n < g.times.length; ++n) { let p = g.times[n] * e; if (!(p < c || p >= d)) for (h.push(g.times[n]), p = 0; p < k; ++p)m.push(g.values[n * k + p]); }h.length !== 0
&& (g.times = ea.convertArray(h, g.times.constructor), g.values = ea.convertArray(m, g.values.constructor), f.push(g));
        }a.tracks = f; c = Infinity; for (b = 0; b < a.tracks.length; ++b)c > a.tracks[b].times[0] && (c = a.tracks[b].times[0]); for (b = 0; b < a.tracks.length; ++b)a.tracks[b].shift(-1 * c); a.resetDuration(); return a;
      },
    }; Object.assign(Ka.prototype, {
      evaluate(a) {
        const b = this.parameterPositions; let c = this._cachedIndex; let d = b[c]; let e = b[c - 1]; a: {
          b: {
            c: {
              d:if (!(a < d)) {
                for (var f = c + 2; ;) {
                  if (void 0 === d) {
                    if (a < e) break d; this._cachedIndex = c = b.length;
                    return this.afterEnd_(c - 1, a, e);
                  } if (c === f) break; e = d; d = b[++c]; if (a < d) break b;
                }d = b.length; break c;
              } if (a >= e) break a; else { f = b[1]; a < f && (c = 2, e = f); for (f = c - 2; ;) { if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d); if (c === f) break; d = e; e = b[--c - 1]; if (a >= e) break b; }d = c; c = 0; }
            } for (;c < d;)e = c + d >>> 1, a < b[e] ? d = e : c = e + 1; d = b[c]; e = b[c - 1]; if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d); if (void 0 === d) return this._cachedIndex = c = b.length, this.afterEnd_(c - 1, e, a);
          } this._cachedIndex = c; this.intervalChanged_(
            c,
            e,
            d,
          );
        } return this.interpolate_(c, e, a, d);
      },
      settings: null,
      DefaultSettings_: {},
      getSettings_() { return this.settings || this.DefaultSettings_; },
      copySampleValue_(a) { const b = this.resultBuffer; const c = this.sampleValues; const d = this.valueSize; a *= d; for (let e = 0; e !== d; ++e)b[e] = c[a + e]; return b; },
      interpolate_() { throw Error('call to abstract method'); },
      intervalChanged_() {},
    }); Object.assign(Ka.prototype, { beforeStart_: Ka.prototype.copySampleValue_, afterEnd_: Ka.prototype.copySampleValue_ }); We.prototype = Object.assign(Object.create(Ka.prototype), {
      constructor: We,
      DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
      intervalChanged_(a, b, c) {
        let d = this.parameterPositions; let e = a - 2; let f = a + 1; let g = d[e]; let k = d[f]; if (void 0 === g) switch (this.getSettings_().endingStart) { case 2401: e = a; g = 2 * b - c; break; case 2402: e = d.length - 2; g = b + d[e] - d[e + 1]; break; default: e = a, g = c; } if (void 0 === k) switch (this.getSettings_().endingEnd) { case 2401: f = a; k = 2 * c - b; break; case 2402: f = 1; k = c + d[1] - d[0]; break; default: f = a - 1, k = b; }a = 0.5 * (c - b); d = this.valueSize;
        this._weightPrev = a / (b - g); this._weightNext = a / (k - c); this._offsetPrev = e * d; this._offsetNext = f * d;
      },
      interpolate_(a, b, c, d) { const e = this.resultBuffer; const f = this.sampleValues; const g = this.valueSize; a *= g; const k = a - g; const h = this._offsetPrev; const m = this._offsetNext; let n = this._weightPrev; let p = this._weightNext; let q = (c - b) / (d - b); c = q * q; d = c * q; b = -n * d + 2 * n * c - n * q; n = (1 + n) * d + (-1.5 - 2 * n) * c + (-0.5 + n) * q + 1; q = (-1 - p) * d + (1.5 + p) * c + 0.5 * q; p = p * d - p * c; for (c = 0; c !== g; ++c)e[c] = b * f[h + c] + n * f[k + c] + q * f[a + c] + p * f[m + c]; return e; },
    }); pe.prototype = Object.assign(
      Object.create(Ka.prototype),
      { constructor: pe, interpolate_(a, b, c, d) { const e = this.resultBuffer; const f = this.sampleValues; const g = this.valueSize; a *= g; const k = a - g; b = (c - b) / (d - b); c = 1 - b; for (d = 0; d !== g; ++d)e[d] = f[k + d] * c + f[a + d] * b; return e; } },
    ); Xe.prototype = Object.assign(Object.create(Ka.prototype), { constructor: Xe, interpolate_(a) { return this.copySampleValue_(a - 1); } }); Object.assign(ra, {
      toJSON(a) {
        let b = a.constructor; if (void 0 !== b.toJSON)b = b.toJSON(a); else {
          b = {
            name: a.name,
            times: ea.convertArray(a.times, Array),
            values: ea.convertArray(
              a.values,
              Array,
            ),
          }; const c = a.getInterpolation(); c !== a.DefaultInterpolation && (b.interpolation = c);
        }b.type = a.ValueTypeName; return b;
      },
    }); Object.assign(ra.prototype, {
      constructor: ra,
      TimeBufferType: Float32Array,
      ValueBufferType: Float32Array,
      DefaultInterpolation: 2301,
      InterpolantFactoryMethodDiscrete(a) { return new Xe(this.times, this.values, this.getValueSize(), a); },
      InterpolantFactoryMethodLinear(a) { return new pe(this.times, this.values, this.getValueSize(), a); },
      InterpolantFactoryMethodSmooth(a) {
        return new We(
          this.times,
          this.values,
          this.getValueSize(),
          a,
        );
      },
      setInterpolation(a) {
        switch (a) { case 2300: var b = this.InterpolantFactoryMethodDiscrete; break; case 2301: b = this.InterpolantFactoryMethodLinear; break; case 2302: b = this.InterpolantFactoryMethodSmooth; } if (void 0 === b) {
          b = `unsupported interpolation for ${this.ValueTypeName} keyframe track named ${this.name}`; if (void 0 === this.createInterpolant) if (a !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation); else throw Error(b); console.warn(
            'THREE.KeyframeTrack:',
            b,
          ); return this;
        } this.createInterpolant = b; return this;
      },
      getInterpolation() { switch (this.createInterpolant) { case this.InterpolantFactoryMethodDiscrete: return 2300; case this.InterpolantFactoryMethodLinear: return 2301; case this.InterpolantFactoryMethodSmooth: return 2302; } },
      getValueSize() { return this.values.length / this.times.length; },
      shift(a) { if (a !== 0) for (let b = this.times, c = 0, d = b.length; c !== d; ++c)b[c] += a; return this; },
      scale(a) {
        if (a !== 1) {
          for (let b = this.times, c = 0, d = b.length; c
!== d; ++c)b[c] *= a;
        } return this;
      },
      trim(a, b) { for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a;)++e; for (;f !== -1 && c[f] > b;)--f; ++f; if (e !== 0 || f !== d)e >= f && (f = Math.max(f, 1), e = f - 1), a = this.getValueSize(), this.times = ea.arraySlice(c, e, f), this.values = ea.arraySlice(this.values, e * a, f * a); return this; },
      validate() {
        let a = !0; let b = this.getValueSize(); b - Math.floor(b) !== 0 && (console.error('THREE.KeyframeTrack: Invalid value size in track.', this), a = !1); let c = this.times; b = this.values; let d = c.length; d === 0 && (console.error(
          'THREE.KeyframeTrack: Track is empty.',
          this,
        ), a = !1); for (var e = null, f = 0; f !== d; f++) { const g = c[f]; if (typeof g === 'number' && isNaN(g)) { console.error('THREE.KeyframeTrack: Time is not a valid number.', this, f, g); a = !1; break; } if (e !== null && e > g) { console.error('THREE.KeyframeTrack: Out of order keys.', this, f, g, e); a = !1; break; }e = g; } if (void 0 !== b && ea.isTypedArray(b)) for (f = 0, c = b.length; f !== c; ++f) if (d = b[f], isNaN(d)) { console.error('THREE.KeyframeTrack: Value is not a valid number.', this, f, d); a = !1; break; } return a;
      },
      optimize() {
        for (var a = this.times, b = this.values,
          c = this.getValueSize(), d = this.getInterpolation() === 2302, e = 1, f = a.length - 1, g = 1; g < f; ++g) { var k = !1; var h = a[g]; if (h !== a[g + 1] && (g !== 1 || h !== h[0])) if (d)k = !0; else { var m = g * c; const n = m - c; const p = m + c; for (h = 0; h !== c; ++h) { const q = b[m + h]; if (q !== b[n + h] || q !== b[p + h]) { k = !0; break; } } } if (k) { if (g !== e) for (a[e] = a[g], k = g * c, m = e * c, h = 0; h !== c; ++h)b[m + h] = b[k + h]; ++e; } } if (f > 0) { a[e] = a[f]; k = f * c; m = e * c; for (h = 0; h !== c; ++h)b[m + h] = b[k + h]; ++e; }e !== a.length && (this.times = ea.arraySlice(a, 0, e), this.values = ea.arraySlice(b, 0, e * c)); return this;
      },
      clone() {
        let a = ea.arraySlice(this.times, 0); const b = ea.arraySlice(this.values, 0); a = new this.constructor(this.name, a, b); a.createInterpolant = this.createInterpolant; return a;
      },
    }); Ye.prototype = Object.assign(Object.create(ra.prototype), {
      constructor: Ye, ValueTypeName: 'bool', ValueBufferType: Array, DefaultInterpolation: 2300, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0,
    }); Ze.prototype = Object.assign(Object.create(ra.prototype), { constructor: Ze, ValueTypeName: 'color' }); cd.prototype = Object.assign(
      Object.create(ra.prototype),
      { constructor: cd, ValueTypeName: 'number' },
    ); $e.prototype = Object.assign(Object.create(Ka.prototype), { constructor: $e, interpolate_(a, b, c, d) { const e = this.resultBuffer; const f = this.sampleValues; const g = this.valueSize; a *= g; b = (c - b) / (d - b); for (c = a + g; a !== c; a += 4)Da.slerpFlat(e, 0, f, a - g, f, a, b); return e; } }); qe.prototype = Object.assign(Object.create(ra.prototype), {
      constructor: qe,
      ValueTypeName: 'quaternion',
      DefaultInterpolation: 2301,
      InterpolantFactoryMethodLinear(a) {
        return new $e(
          this.times,
          this.values,
          this.getValueSize(),
          a,
        );
      },
      InterpolantFactoryMethodSmooth: void 0,
    }); af.prototype = Object.assign(Object.create(ra.prototype), {
      constructor: af, ValueTypeName: 'string', ValueBufferType: Array, DefaultInterpolation: 2300, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0,
    }); dd.prototype = Object.assign(Object.create(ra.prototype), { constructor: dd, ValueTypeName: 'vector' }); Object.assign(Qa, {
      parse(a) {
        for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e)b.push(Nk(c[e]).scale(d)); return new Qa(
          a.name,
          a.duration,
          b,
        );
      },
      toJSON(a) {
        const b = []; const c = a.tracks; a = {
          name: a.name, duration: a.duration, tracks: b, uuid: a.uuid,
        }; for (let d = 0, e = c.length; d !== e; ++d)b.push(ra.toJSON(c[d])); return a;
      },
      CreateFromMorphTargetSequence(a, b, c, d) {
        for (var e = b.length, f = [], g = 0; g < e; g++) {
          let k = []; let h = []; k.push((g + e - 1) % e, g, (g + 1) % e); h.push(0, 1, 0); const m = ea.getKeyframeOrder(k); k = ea.sortedArray(k, 1, m); h = ea.sortedArray(h, 1, m); d || k[0] !== 0 || (k.push(e), h.push(h[0])); f.push((new cd(`.morphTargetInfluences[${b[g].name}]`, k, h)).scale(1
/ c));
        } return new Qa(a, -1, f);
      },
      findByName(a, b) { let c = a; Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations); for (a = 0; a < c.length; a++) if (c[a].name === b) return c[a]; return null; },
      CreateClipsFromMorphTargetSequences(a, b, c) { for (var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length; f < g; f++) { const k = a[f]; let h = k.name.match(e); if (h && h.length > 1) { var m = h[1]; (h = d[m]) || (d[m] = h = []); h.push(k); } }a = []; for (m in d)a.push(Qa.CreateFromMorphTargetSequence(m, d[m], b, c)); return a; },
      parseAnimation(
        a,
        b,
      ) {
        if (!a) return console.error('THREE.AnimationClip: No animation in JSONLoader data.'), null; const c = function (a, b, c, d, e) { if (c.length !== 0) { const f = []; const g = []; ea.flattenJSON(c, f, g, d); f.length !== 0 && e.push(new a(b, f, g)); } }; const d = []; const e = a.name || 'default'; let f = a.length || -1; const g = a.fps || 30; a = a.hierarchy || []; for (let k = 0; k < a.length; k++) {
          const h = a[k].keys; if (h && h.length !== 0) {
            if (h[0].morphTargets) {
              f = {}; for (var m = 0; m < h.length; m++) if (h[m].morphTargets) for (var n = 0; n < h[m].morphTargets.length; n++)f[h[m].morphTargets[n]] = -1; for (const p in f) {
                const q = []; const t = []; for (n = 0; n !== h[m].morphTargets.length; ++n) { const r = h[m]; q.push(r.time); t.push(r.morphTarget === p ? 1 : 0); }d.push(new cd(`.morphTargetInfluence[${p}]`, q, t));
              }f = f.length * (g || 1);
            } else m = `.bones[${b[k].name}]`, c(dd, `${m}.position`, h, 'pos', d), c(qe, `${m}.quaternion`, h, 'rot', d), c(dd, `${m}.scale`, h, 'scl', d);
          }
        } return d.length === 0 ? null : new Qa(e, f, d);
      },
    }); Object.assign(Qa.prototype, {
      resetDuration() {
        for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b) { const d = this.tracks[b]; a = Math.max(a, d.times[d.times.length - 1]); } this.duration = a; return this;
      },
      trim() { for (let a = 0; a < this.tracks.length; a++) this.tracks[a].trim(0, this.duration); return this; },
      validate() { for (var a = !0, b = 0; b < this.tracks.length; b++)a = a && this.tracks[b].validate(); return a; },
      optimize() { for (let a = 0; a < this.tracks.length; a++) this.tracks[a].optimize(); return this; },
      clone() { for (var a = [], b = 0; b < this.tracks.length; b++)a.push(this.tracks[b].clone()); return new Qa(this.name, this.duration, a); },
    }); const xc = {
      enabled: !1,
      files: {},
      add(a, b) {
        !1
!== this.enabled && (this.files[a] = b);
      },
      get(a) { if (!1 !== this.enabled) return this.files[a]; },
      remove(a) { delete this.files[a]; },
      clear() { this.files = {}; },
    }; var gi = new wg(); Object.assign(Q.prototype, {
      load() {}, parse() {}, setCrossOrigin(a) { this.crossOrigin = a; return this; }, setPath(a) { this.path = a; return this; }, setResourcePath(a) { this.resourcePath = a; return this; },
    }); const cb = {}; Ra.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: Ra,
      load(
        a,
        b,
        c,
        d,
      ) {
        void 0 === a && (a = ''); void 0 !== this.path && (a = this.path + a); a = this.manager.resolveURL(a); const e = this; const f = xc.get(a); if (void 0 !== f) return e.manager.itemStart(a), setTimeout(() => { b && b(f); e.manager.itemEnd(a); }, 0), f; if (void 0 !== cb[a])cb[a].push({ onLoad: b, onProgress: c, onError: d }); else {
          let g = a.match(/^data:(.*?)(;base64)?,(.*)$/); if (g) {
            c = g[1]; var k = !!g[2]; g = g[3]; g = decodeURIComponent(g); k && (g = atob(g)); try {
              const h = (this.responseType || '').toLowerCase(); switch (h) {
                case 'arraybuffer': case 'blob': var m = new Uint8Array(g.length);
                  for (k = 0; k < g.length; k++)m[k] = g.charCodeAt(k); var n = h === 'blob' ? new Blob([m.buffer], { type: c }) : m.buffer; break; case 'document': n = (new DOMParser()).parseFromString(g, c); break; case 'json': n = JSON.parse(g); break; default: n = g;
              }setTimeout(() => { b && b(n); e.manager.itemEnd(a); }, 0);
            } catch (q) { setTimeout(() => { d && d(q); e.manager.itemError(a); e.manager.itemEnd(a); }, 0); }
          } else {
            cb[a] = []; cb[a].push({ onLoad: b, onProgress: c, onError: d }); var p = new XMLHttpRequest(); p.open('GET', a, !0); p.addEventListener('load', function (b) {
              const c = this.response; const d = cb[a]; delete cb[a]; if (this.status === 200 || this.status === 0) { this.status === 0 && console.warn('THREE.FileLoader: HTTP Status 0 received.'); xc.add(a, c); for (var f = 0, g = d.length; f < g; f++) { var k = d[f]; if (k.onLoad)k.onLoad(c); } } else { f = 0; for (g = d.length; f < g; f++) if (k = d[f], k.onError)k.onError(b); e.manager.itemError(a); }e.manager.itemEnd(a);
            }, !1); p.addEventListener('progress', (b) => { for (let c = cb[a], d = 0, e = c.length; d < e; d++) { const f = c[d]; if (f.onProgress)f.onProgress(b); } }, !1); p.addEventListener(
              'error',
              (b) => { const c = cb[a]; delete cb[a]; for (let d = 0, f = c.length; d < f; d++) { const g = c[d]; if (g.onError)g.onError(b); }e.manager.itemError(a); e.manager.itemEnd(a); },
              !1,
            ); p.addEventListener('abort', (b) => { const c = cb[a]; delete cb[a]; for (let d = 0, f = c.length; d < f; d++) { const g = c[d]; if (g.onError)g.onError(b); }e.manager.itemError(a); e.manager.itemEnd(a); }, !1); void 0 !== this.responseType && (p.responseType = this.responseType); void 0 !== this.withCredentials && (p.withCredentials = this.withCredentials); p.overrideMimeType && p.overrideMimeType(void 0
!== this.mimeType ? this.mimeType : 'text/plain'); for (k in this.requestHeader)p.setRequestHeader(k, this.requestHeader[k]); p.send(null);
          }e.manager.itemStart(a); return p;
        }
      },
      setResponseType(a) { this.responseType = a; return this; },
      setWithCredentials(a) { this.withCredentials = a; return this; },
      setMimeType(a) { this.mimeType = a; return this; },
      setRequestHeader(a) { this.requestHeader = a; return this; },
    }); xg.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: xg,
      load(a, b, c, d) {
        const e = this; const f = new Ra(e.manager); f.setPath(e.path); f.load(a, (a) => { b(e.parse(JSON.parse(a))); }, c, d);
      },
      parse(a) { for (var b = [], c = 0; c < a.length; c++) { const d = Qa.parse(a[c]); b.push(d); } return b; },
    }); yg.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: yg,
      load(a, b, c, d) {
        function e(e) {
          h.load(
            a[e],
            (a) => {
              a = f.parse(a, !0); g[e] = {
                width: a.width, height: a.height, format: a.format, mipmaps: a.mipmaps,
              }; m += 1; m === 6 && (a.mipmapCount === 1 && (k.minFilter = 1006), k.format = a.format, k.needsUpdate = !0, b && b(k));
            },
            c,
            d,
          );
        } var f = this; var g = []; var k = new Pc(); k.image = g; var h = new Ra(this.manager); h.setPath(this.path); h.setResponseType('arraybuffer'); if (Array.isArray(a)) for (var m = 0, n = 0, p = a.length; n < p; ++n)e(n); else {
          h.load(a, (a) => {
            a = f.parse(a, !0); if (a.isCubemap) for (let c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) { g[d] = { mipmaps: [] }; for (let e = 0; e < a.mipmapCount; e++)g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]), g[d].format = a.format, g[d].width = a.width, g[d].height = a.height; } else {
              k.image.width = a.width, k.image.height = a.height,
              k.mipmaps = a.mipmaps;
            }a.mipmapCount === 1 && (k.minFilter = 1006); k.format = a.format; k.needsUpdate = !0; b && b(k);
          }, c, d);
        } return k;
      },
    }); bf.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: bf,
      load(a, b, c, d) {
        const e = this; const f = new cc(); const g = new Ra(this.manager); g.setResponseType('arraybuffer'); g.setPath(this.path); g.load(a, (a) => {
          if (a = e.parse(a)) {
            void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001,
            f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001, f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006, f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1006, f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1, void 0 !== a.format && (f.format = a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps, f.minFilter = 1008), a.mipmapCount === 1 && (f.minFilter = 1006), f.needsUpdate = !0, b && b(f, a);
          }
        }, c, d); return f;
      },
    }); ed.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: ed,
      load(a, b, c, d) {
        function e() {
          h.removeEventListener(
            'load',
            e,
            !1,
          ); h.removeEventListener('error', f, !1); xc.add(a, this); b && b(this); g.manager.itemEnd(a);
        } function f(b) { h.removeEventListener('load', e, !1); h.removeEventListener('error', f, !1); d && d(b); g.manager.itemError(a); g.manager.itemEnd(a); } void 0 !== this.path && (a = this.path + a); a = this.manager.resolveURL(a); var g = this; const k = xc.get(a); if (void 0 !== k) return g.manager.itemStart(a), setTimeout(() => { b && b(k); g.manager.itemEnd(a); }, 0), k; var h = document.createElementNS('http://www.w3.org/1999/xhtml', 'img'); h.addEventListener(
          'load',
          e,
          !1,
        ); h.addEventListener('error', f, !1); a.substr(0, 5) !== 'data:' && void 0 !== this.crossOrigin && (h.crossOrigin = this.crossOrigin); g.manager.itemStart(a); h.src = a; return h;
      },
    }); cf.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: cf,
      load(a, b, c, d) {
        function e(c) { g.load(a[c], (a) => { f.images[c] = a; k++; k === 6 && (f.needsUpdate = !0, b && b(f)); }, void 0, d); } var f = new rb(); var
          g = new ed(this.manager); g.setCrossOrigin(this.crossOrigin); g.setPath(this.path); var k = 0; for (c = 0; c < a.length; ++c)e(c); return f;
      },
    });
    df.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: df,
      load(a, b, c, d) {
        const e = new T(); const
          f = new ed(this.manager); f.setCrossOrigin(this.crossOrigin); f.setPath(this.path); f.load(a, (c) => { e.image = c; c = a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data:image\/jpeg/) === 0; e.format = c ? 1022 : 1023; e.needsUpdate = !0; void 0 !== b && b(e); }, c, d); return e;
      },
    }); Object.assign(I.prototype, {
      getPoint() { console.warn('THREE.Curve: .getPoint() not implemented.'); return null; },
      getPointAt(a, b) {
        a = this.getUtoTmapping(a);
        return this.getPoint(a, b);
      },
      getPoints(a) { void 0 === a && (a = 5); for (var b = [], c = 0; c <= a; c++)b.push(this.getPoint(c / a)); return b; },
      getSpacedPoints(a) { void 0 === a && (a = 5); for (var b = [], c = 0; c <= a; c++)b.push(this.getPointAt(c / a)); return b; },
      getLength() { const a = this.getLengths(); return a[a.length - 1]; },
      getLengths(a) {
        void 0 === a && (a = this.arcLengthDivisions); if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate) return this.cacheArcLengths; this.needsUpdate = !1; const b = []; let c = this.getPoint(0); let d; let e = 0; b.push(0); for (d = 1; d <= a; d++) { const f = this.getPoint(d / a); e += f.distanceTo(c); b.push(e); c = f; } return this.cacheArcLengths = b;
      },
      updateArcLengths() { this.needsUpdate = !0; this.getLengths(); },
      getUtoTmapping(a, b) { const c = this.getLengths(); const d = c.length; b = b || a * c[d - 1]; for (var e = 0, f = d - 1, g; e <= f;) if (a = Math.floor(e + (f - e) / 2), g = c[a] - b, g < 0)e = a + 1; else if (g > 0)f = a - 1; else { f = a; break; }a = f; if (c[a] === b) return a / (d - 1); e = c[a]; return (a + (b - e) / (c[a + 1] - e)) / (d - 1); },
      getTangent(a) {
        let b = a - 1E-4;
        a += 1E-4; b < 0 && (b = 0); a > 1 && (a = 1); b = this.getPoint(b); return this.getPoint(a).clone().sub(b).normalize();
      },
      getTangentAt(a) { a = this.getUtoTmapping(a); return this.getTangent(a); },
      computeFrenetFrames(a, b) {
        let c = new n(); const d = []; const e = []; const f = []; const g = new n(); const k = new P(); let
          h; for (h = 0; h <= a; h++) { var m = h / a; d[h] = this.getTangentAt(m); d[h].normalize(); }e[0] = new n(); f[0] = new n(); h = Number.MAX_VALUE; m = Math.abs(d[0].x); const v = Math.abs(d[0].y); const p = Math.abs(d[0].z); m <= h && (h = m, c.set(1, 0, 0)); v <= h && (h = v, c.set(0, 1, 0)); p <= h && c.set(0, 0, 1); g.crossVectors(
          d[0],
          c,
        ).normalize(); e[0].crossVectors(d[0], g); f[0].crossVectors(d[0], e[0]); for (h = 1; h <= a; h++)e[h] = e[h - 1].clone(), f[h] = f[h - 1].clone(), g.crossVectors(d[h - 1], d[h]), g.length() > Number.EPSILON && (g.normalize(), c = Math.acos(O.clamp(d[h - 1].dot(d[h]), -1, 1)), e[h].applyMatrix4(k.makeRotationAxis(g, c))), f[h].crossVectors(d[h], e[h]); if (!0 === b) {
          for (c = Math.acos(O.clamp(e[0].dot(e[a]), -1, 1)), c /= a, d[0].dot(g.crossVectors(e[0], e[a])) > 0 && (c = -c), h = 1; h <= a; h++) {
            e[h].applyMatrix4(k.makeRotationAxis(d[h], c * h)), f[h].crossVectors(
              d[h],
              e[h],
            );
          }
        } return { tangents: d, normals: e, binormals: f };
      },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) { this.arcLengthDivisions = a.arcLengthDivisions; return this; },
      toJSON() { const a = { metadata: { version: 4.5, type: 'Curve', generator: 'Curve.toJSON' } }; a.arcLengthDivisions = this.arcLengthDivisions; a.type = this.type; return a; },
      fromJSON(a) { this.arcLengthDivisions = a.arcLengthDivisions; return this; },
    }); La.prototype = Object.create(I.prototype); La.prototype.constructor = La; La.prototype.isEllipseCurve = !0; La.prototype.getPoint = function (a, b) { b = b || new x(); for (var c = 2 * Math.PI, d = this.aEndAngle - this.aStartAngle, e = Math.abs(d) < Number.EPSILON; d < 0;)d += c; for (;d > c;)d -= c; d < Number.EPSILON && (d = e ? 0 : c); !0 !== this.aClockwise || e || (d = d === c ? -c : d - c); c = this.aStartAngle + a * d; a = this.aX + this.xRadius * Math.cos(c); let f = this.aY + this.yRadius * Math.sin(c); this.aRotation !== 0 && (c = Math.cos(this.aRotation), d = Math.sin(this.aRotation), e = a - this.aX, f -= this.aY, a = e * c - f * d + this.aX, f = e * d + f * c + this.aY); return b.set(a, f); }; La.prototype.copy = function (a) {
      I.prototype.copy.call(
        this,
        a,
      ); this.aX = a.aX; this.aY = a.aY; this.xRadius = a.xRadius; this.yRadius = a.yRadius; this.aStartAngle = a.aStartAngle; this.aEndAngle = a.aEndAngle; this.aClockwise = a.aClockwise; this.aRotation = a.aRotation; return this;
    }; La.prototype.toJSON = function () { const a = I.prototype.toJSON.call(this); a.aX = this.aX; a.aY = this.aY; a.xRadius = this.xRadius; a.yRadius = this.yRadius; a.aStartAngle = this.aStartAngle; a.aEndAngle = this.aEndAngle; a.aClockwise = this.aClockwise; a.aRotation = this.aRotation; return a; }; La.prototype.fromJSON = function (a) {
      I.prototype.fromJSON.call(
        this,
        a,
      ); this.aX = a.aX; this.aY = a.aY; this.xRadius = a.xRadius; this.yRadius = a.yRadius; this.aStartAngle = a.aStartAngle; this.aEndAngle = a.aEndAngle; this.aClockwise = a.aClockwise; this.aRotation = a.aRotation; return this;
    }; fd.prototype = Object.create(La.prototype); fd.prototype.constructor = fd; fd.prototype.isArcCurve = !0; const Tf = new n(); const nh = new zg(); const oh = new zg(); const
      ph = new zg(); Aa.prototype = Object.create(I.prototype); Aa.prototype.constructor = Aa; Aa.prototype.isCatmullRomCurve3 = !0; Aa.prototype.getPoint = function (a, b) {
      b = b || new n(); let c = this.points;
      let d = c.length; a *= d - (this.closed ? 0 : 1); let e = Math.floor(a); a -= e; this.closed ? e += e > 0 ? 0 : (Math.floor(Math.abs(e) / d) + 1) * d : a === 0 && e === d - 1 && (e = d - 2, a = 1); if (this.closed || e > 0) var f = c[(e - 1) % d]; else Tf.subVectors(c[0], c[1]).add(c[0]), f = Tf; const g = c[e % d]; const h = c[(e + 1) % d]; this.closed || e + 2 < d ? c = c[(e + 2) % d] : (Tf.subVectors(c[d - 1], c[d - 2]).add(c[d - 1]), c = Tf); if (this.curveType === 'centripetal' || this.curveType === 'chordal') {
        let l = this.curveType === 'chordal' ? 0.5 : 0.25; d = f.distanceToSquared(g) ** l; e = g.distanceToSquared(h) ** l; l = h.distanceToSquared(c) ** l; e < 1E-4 && (e = 1); d < 1E-4 && (d = e); l < 1E-4 && (l = e); nh.initNonuniformCatmullRom(f.x, g.x, h.x, c.x, d, e, l); oh.initNonuniformCatmullRom(f.y, g.y, h.y, c.y, d, e, l); ph.initNonuniformCatmullRom(f.z, g.z, h.z, c.z, d, e, l);
      } else this.curveType === 'catmullrom' && (nh.initCatmullRom(f.x, g.x, h.x, c.x, this.tension), oh.initCatmullRom(f.y, g.y, h.y, c.y, this.tension), ph.initCatmullRom(f.z, g.z, h.z, c.z, this.tension)); b.set(nh.calc(a), oh.calc(a), ph.calc(a)); return b;
    }; Aa.prototype.copy = function (a) {
      I.prototype.copy.call(
        this,
        a,
      ); this.points = []; for (let b = 0, c = a.points.length; b < c; b++) this.points.push(a.points[b].clone()); this.closed = a.closed; this.curveType = a.curveType; this.tension = a.tension; return this;
    }; Aa.prototype.toJSON = function () { const a = I.prototype.toJSON.call(this); a.points = []; for (let b = 0, c = this.points.length; b < c; b++)a.points.push(this.points[b].toArray()); a.closed = this.closed; a.curveType = this.curveType; a.tension = this.tension; return a; }; Aa.prototype.fromJSON = function (a) {
      I.prototype.fromJSON.call(this, a); this.points = [];
      for (let b = 0, c = a.points.length; b < c; b++) { const d = a.points[b]; this.points.push((new n()).fromArray(d)); } this.closed = a.closed; this.curveType = a.curveType; this.tension = a.tension; return this;
    }; Wa.prototype = Object.create(I.prototype); Wa.prototype.constructor = Wa; Wa.prototype.isCubicBezierCurve = !0; Wa.prototype.getPoint = function (a, b) { b = b || new x(); const c = this.v0; const d = this.v1; const e = this.v2; const f = this.v3; b.set(se(a, c.x, d.x, e.x, f.x), se(a, c.y, d.y, e.y, f.y)); return b; }; Wa.prototype.copy = function (a) {
      I.prototype.copy.call(this, a); this.v0.copy(a.v0);
      this.v1.copy(a.v1); this.v2.copy(a.v2); this.v3.copy(a.v3); return this;
    }; Wa.prototype.toJSON = function () { const a = I.prototype.toJSON.call(this); a.v0 = this.v0.toArray(); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); a.v3 = this.v3.toArray(); return a; }; Wa.prototype.fromJSON = function (a) { I.prototype.fromJSON.call(this, a); this.v0.fromArray(a.v0); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); this.v3.fromArray(a.v3); return this; }; ib.prototype = Object.create(I.prototype); ib.prototype.constructor = ib; ib.prototype.isCubicBezierCurve3 = !0; ib.prototype.getPoint = function (a, b) { b = b || new n(); const c = this.v0; const d = this.v1; const e = this.v2; const f = this.v3; b.set(se(a, c.x, d.x, e.x, f.x), se(a, c.y, d.y, e.y, f.y), se(a, c.z, d.z, e.z, f.z)); return b; }; ib.prototype.copy = function (a) { I.prototype.copy.call(this, a); this.v0.copy(a.v0); this.v1.copy(a.v1); this.v2.copy(a.v2); this.v3.copy(a.v3); return this; }; ib.prototype.toJSON = function () { const a = I.prototype.toJSON.call(this); a.v0 = this.v0.toArray(); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); a.v3 = this.v3.toArray(); return a; }; ib.prototype.fromJSON = function (a) { I.prototype.fromJSON.call(this, a); this.v0.fromArray(a.v0); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); this.v3.fromArray(a.v3); return this; }; Ea.prototype = Object.create(I.prototype); Ea.prototype.constructor = Ea; Ea.prototype.isLineCurve = !0; Ea.prototype.getPoint = function (a, b) { b = b || new x(); a === 1 ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1)); return b; }; Ea.prototype.getPointAt = function (a, b) { return this.getPoint(a, b); }; Ea.prototype.getTangent = function () { return this.v2.clone().sub(this.v1).normalize(); };
    Ea.prototype.copy = function (a) { I.prototype.copy.call(this, a); this.v1.copy(a.v1); this.v2.copy(a.v2); return this; }; Ea.prototype.toJSON = function () { const a = I.prototype.toJSON.call(this); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); return a; }; Ea.prototype.fromJSON = function (a) { I.prototype.fromJSON.call(this, a); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); return this; }; Xa.prototype = Object.create(I.prototype); Xa.prototype.constructor = Xa; Xa.prototype.isLineCurve3 = !0; Xa.prototype.getPoint = function (a, b) {
      b = b
|| new n(); a === 1 ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1)); return b;
    }; Xa.prototype.getPointAt = function (a, b) { return this.getPoint(a, b); }; Xa.prototype.copy = function (a) { I.prototype.copy.call(this, a); this.v1.copy(a.v1); this.v2.copy(a.v2); return this; }; Xa.prototype.toJSON = function () { const a = I.prototype.toJSON.call(this); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); return a; }; Xa.prototype.fromJSON = function (a) {
      I.prototype.fromJSON.call(this, a); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2);
      return this;
    }; Ya.prototype = Object.create(I.prototype); Ya.prototype.constructor = Ya; Ya.prototype.isQuadraticBezierCurve = !0; Ya.prototype.getPoint = function (a, b) { b = b || new x(); const c = this.v0; const d = this.v1; const e = this.v2; b.set(re(a, c.x, d.x, e.x), re(a, c.y, d.y, e.y)); return b; }; Ya.prototype.copy = function (a) { I.prototype.copy.call(this, a); this.v0.copy(a.v0); this.v1.copy(a.v1); this.v2.copy(a.v2); return this; }; Ya.prototype.toJSON = function () {
      const a = I.prototype.toJSON.call(this); a.v0 = this.v0.toArray(); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); return a;
    }; Ya.prototype.fromJSON = function (a) { I.prototype.fromJSON.call(this, a); this.v0.fromArray(a.v0); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); return this; }; jb.prototype = Object.create(I.prototype); jb.prototype.constructor = jb; jb.prototype.isQuadraticBezierCurve3 = !0; jb.prototype.getPoint = function (a, b) { b = b || new n(); const c = this.v0; const d = this.v1; const e = this.v2; b.set(re(a, c.x, d.x, e.x), re(a, c.y, d.y, e.y), re(a, c.z, d.z, e.z)); return b; }; jb.prototype.copy = function (a) {
      I.prototype.copy.call(this, a);
      this.v0.copy(a.v0); this.v1.copy(a.v1); this.v2.copy(a.v2); return this;
    }; jb.prototype.toJSON = function () { const a = I.prototype.toJSON.call(this); a.v0 = this.v0.toArray(); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); return a; }; jb.prototype.fromJSON = function (a) { I.prototype.fromJSON.call(this, a); this.v0.fromArray(a.v0); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); return this; }; Za.prototype = Object.create(I.prototype); Za.prototype.constructor = Za; Za.prototype.isSplineCurve = !0; Za.prototype.getPoint = function (a, b) {
      b = b || new x(); let c = this.points; let d = (c.length - 1) * a; a = Math.floor(d); d -= a; const e = c[a === 0 ? a : a - 1]; const f = c[a]; const g = c[a > c.length - 2 ? c.length - 1 : a + 1]; c = c[a > c.length - 3 ? c.length - 1 : a + 2]; b.set(hi(d, e.x, f.x, g.x, c.x), hi(d, e.y, f.y, g.y, c.y)); return b;
    }; Za.prototype.copy = function (a) { I.prototype.copy.call(this, a); this.points = []; for (let b = 0, c = a.points.length; b < c; b++) this.points.push(a.points[b].clone()); return this; }; Za.prototype.toJSON = function () {
      const a = I.prototype.toJSON.call(this); a.points = []; for (let b = 0, c = this.points.length; b < c; b++)a.points.push(this.points[b].toArray());
      return a;
    }; Za.prototype.fromJSON = function (a) { I.prototype.fromJSON.call(this, a); this.points = []; for (let b = 0, c = a.points.length; b < c; b++) { const d = a.points[b]; this.points.push((new x()).fromArray(d)); } return this; }; const qh = Object.freeze({
      __proto__: null, ArcCurve: fd, CatmullRomCurve3: Aa, CubicBezierCurve: Wa, CubicBezierCurve3: ib, EllipseCurve: La, LineCurve: Ea, LineCurve3: Xa, QuadraticBezierCurve: Ya, QuadraticBezierCurve3: jb, SplineCurve: Za,
    }); wb.prototype = Object.assign(Object.create(I.prototype), {
      constructor: wb,
      add(a) { this.curves.push(a); },
      closePath() { const a = this.curves[0].getPoint(0); const b = this.curves[this.curves.length - 1].getPoint(1); a.equals(b) || this.curves.push(new Ea(b, a)); },
      getPoint(a) { let b = a * this.getLength(); let c = this.getCurveLengths(); for (a = 0; a < c.length;) { if (c[a] >= b) return b = c[a] - b, a = this.curves[a], c = a.getLength(), a.getPointAt(c === 0 ? 0 : 1 - b / c); a++; } return null; },
      getLength() { const a = this.getCurveLengths(); return a[a.length - 1]; },
      updateArcLengths() { this.needsUpdate = !0; this.cacheLengths = null; this.getCurveLengths(); },
      getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++)b += this.curves[c].getLength(), a.push(b); return this.cacheLengths = a; },
      getSpacedPoints(a) { void 0 === a && (a = 40); for (var b = [], c = 0; c <= a; c++)b.push(this.getPoint(c / a)); this.autoClose && b.push(b[0]); return b; },
      getPoints(a) {
        a = a || 12; for (var b = [], c, d = 0, e = this.curves; d < e.length; d++) {
          let f = e[d]; f = f.getPoints(f && f.isEllipseCurve
            ? 2 * a : f && (f.isLineCurve || f.isLineCurve3) ? 1 : f && f.isSplineCurve ? a * f.points.length : a); for (let g = 0; g < f.length; g++) { const h = f[g]; c && c.equals(h) || (b.push(h), c = h); }
        } this.autoClose && b.length > 1 && !b[b.length - 1].equals(b[0]) && b.push(b[0]); return b;
      },
      copy(a) { I.prototype.copy.call(this, a); this.curves = []; for (let b = 0, c = a.curves.length; b < c; b++) this.curves.push(a.curves[b].clone()); this.autoClose = a.autoClose; return this; },
      toJSON() {
        const a = I.prototype.toJSON.call(this); a.autoClose = this.autoClose; a.curves = []; for (let b = 0, c = this.curves.length; b < c; b++)a.curves.push(this.curves[b].toJSON()); return a;
      },
      fromJSON(a) { I.prototype.fromJSON.call(this, a); this.autoClose = a.autoClose; this.curves = []; for (let b = 0, c = a.curves.length; b < c; b++) { const d = a.curves[b]; this.curves.push((new qh[d.type]()).fromJSON(d)); } return this; },
    }); $a.prototype = Object.assign(Object.create(wb.prototype), {
      constructor: $a,
      setFromPoints(a) { this.moveTo(a[0].x, a[0].y); for (let b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y); return this; },
      moveTo(a, b) { this.currentPoint.set(a, b); return this; },
      lineTo(a, b) { const c = new Ea(this.currentPoint.clone(), new x(a, b)); this.curves.push(c); this.currentPoint.set(a, b); return this; },
      quadraticCurveTo(a, b, c, d) { a = new Ya(this.currentPoint.clone(), new x(a, b), new x(c, d)); this.curves.push(a); this.currentPoint.set(c, d); return this; },
      bezierCurveTo(a, b, c, d, e, f) { a = new Wa(this.currentPoint.clone(), new x(a, b), new x(c, d), new x(e, f)); this.curves.push(a); this.currentPoint.set(e, f); return this; },
      splineThru(a) { let b = [this.currentPoint.clone()].concat(a); b = new Za(b); this.curves.push(b); this.currentPoint.copy(a[a.length - 1]); return this; },
      arc(a, b, c, d, e, f) { this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f); return this; },
      absarc(a, b, c, d, e, f) { this.absellipse(a, b, c, c, d, e, f); return this; },
      ellipse(a, b, c, d, e, f, g, h) { this.absellipse(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f, g, h); return this; },
      absellipse(a, b, c, d, e, f, g, h) {
        a = new La(
          a,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
        ); this.curves.length > 0 && (b = a.getPoint(0), b.equals(this.currentPoint) || this.lineTo(b.x, b.y)); this.curves.push(a); a = a.getPoint(1); this.currentPoint.copy(a); return this;
      },
      copy(a) { wb.prototype.copy.call(this, a); this.currentPoint.copy(a.currentPoint); return this; },
      toJSON() { const a = wb.prototype.toJSON.call(this); a.currentPoint = this.currentPoint.toArray(); return a; },
      fromJSON(a) { wb.prototype.fromJSON.call(this, a); this.currentPoint.fromArray(a.currentPoint); return this; },
    }); Lb.prototype = Object.assign(Object.create($a.prototype), {
      constructor: Lb,
      getPointsHoles(a) { for (var b = [], c = 0, d = this.holes.length; c < d; c++)b[c] = this.holes[c].getPoints(a); return b; },
      extractPoints(a) { return { shape: this.getPoints(a), holes: this.getPointsHoles(a) }; },
      copy(a) { $a.prototype.copy.call(this, a); this.holes = []; for (let b = 0, c = a.holes.length; b < c; b++) this.holes.push(a.holes[b].clone()); return this; },
      toJSON() {
        const a = $a.prototype.toJSON.call(this); a.uuid = this.uuid; a.holes = []; for (let b = 0, c = this.holes.length; b < c; b++)a.holes.push(this.holes[b].toJSON()); return a;
      },
      fromJSON(a) { $a.prototype.fromJSON.call(this, a); this.uuid = a.uuid; this.holes = []; for (let b = 0, c = a.holes.length; b < c; b++) { const d = a.holes[b]; this.holes.push((new $a()).fromJSON(d)); } return this; },
    }); ba.prototype = Object.assign(Object.create(D.prototype), {
      constructor: ba,
      isLight: !0,
      copy(a) { D.prototype.copy.call(this, a); this.color.copy(a.color); this.intensity = a.intensity; return this; },
      toJSON(a) {
        a = D.prototype.toJSON.call(
          this,
          a,
        ); a.object.color = this.color.getHex(); a.object.intensity = this.intensity; void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex()); void 0 !== this.distance && (a.object.distance = this.distance); void 0 !== this.angle && (a.object.angle = this.angle); void 0 !== this.decay && (a.object.decay = this.decay); void 0 !== this.penumbra && (a.object.penumbra = this.penumbra); void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON()); return a;
      },
    }); ef.prototype = Object.assign(Object.create(ba.prototype), {
      constructor: ef,
      isHemisphereLight: !0,
      copy(a) { ba.prototype.copy.call(this, a); this.groundColor.copy(a.groundColor); return this; },
    }); Object.assign(kb.prototype, {
      _projScreenMatrix: new P(),
      _lightPositionWorld: new n(),
      _lookTarget: new n(),
      getViewportCount() { return this._viewportCount; },
      getFrustum() { return this._frustum; },
      updateMatrices(a) {
        const b = this.camera; const c = this.matrix; const d = this._projScreenMatrix; const e = this._lookTarget; const f = this._lightPositionWorld; f.setFromMatrixPosition(a.matrixWorld); b.position.copy(f);
        e.setFromMatrixPosition(a.target.matrixWorld); b.lookAt(e); b.updateMatrixWorld(); d.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse); this._frustum.setFromMatrix(d); c.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1); c.multiply(b.projectionMatrix); c.multiply(b.matrixWorldInverse);
      },
      getViewport(a) { return this._viewports[a]; },
      getFrameExtents() { return this._frameExtents; },
      copy(a) { this.camera = a.camera.clone(); this.bias = a.bias; this.radius = a.radius; this.mapSize.copy(a.mapSize); return this; },
      clone() { return (new this.constructor()).copy(this); },
      toJSON() { const a = {}; this.bias !== 0 && (a.bias = this.bias); this.radius !== 1 && (a.radius = this.radius); if (this.mapSize.x !== 512 || this.mapSize.y !== 512)a.mapSize = this.mapSize.toArray(); a.camera = this.camera.toJSON(!1).object; delete a.camera.matrix; return a; },
    }); ff.prototype = Object.assign(Object.create(kb.prototype), {
      constructor: ff,
      isSpotLightShadow: !0,
      updateMatrices(a) {
        const b = this.camera; const c = 2 * O.RAD2DEG * a.angle; const d = this.mapSize.width / this.mapSize.height;
        const e = a.distance || b.far; if (c !== b.fov || d !== b.aspect || e !== b.far)b.fov = c, b.aspect = d, b.far = e, b.updateProjectionMatrix(); kb.prototype.updateMatrices.call(this, a);
      },
    }); gf.prototype = Object.assign(Object.create(ba.prototype), { constructor: gf, isSpotLight: !0, copy(a) { ba.prototype.copy.call(this, a); this.distance = a.distance; this.angle = a.angle; this.penumbra = a.penumbra; this.decay = a.decay; this.target = a.target.clone(); this.shadow = a.shadow.clone(); return this; } }); Ag.prototype = Object.assign(
      Object.create(kb.prototype),
      { constructor: Ag, isPointLightShadow: !0, updateMatrices(a, b) { void 0 === b && (b = 0); const c = this.camera; const d = this.matrix; const e = this._lightPositionWorld; const f = this._lookTarget; const g = this._projScreenMatrix; e.setFromMatrixPosition(a.matrixWorld); c.position.copy(e); f.copy(c.position); f.add(this._cubeDirections[b]); c.up.copy(this._cubeUps[b]); c.lookAt(f); c.updateMatrixWorld(); d.makeTranslation(-e.x, -e.y, -e.z); g.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse); this._frustum.setFromMatrix(g); } },
    ); hf.prototype = Object.assign(
      Object.create(ba.prototype),
      { constructor: hf, isPointLight: !0, copy(a) { ba.prototype.copy.call(this, a); this.distance = a.distance; this.decay = a.decay; this.shadow = a.shadow.clone(); return this; } },
    ); gd.prototype = Object.assign(Object.create(db.prototype), {
      constructor: gd,
      isOrthographicCamera: !0,
      copy(a, b) { db.prototype.copy.call(this, a, b); this.left = a.left; this.right = a.right; this.top = a.top; this.bottom = a.bottom; this.near = a.near; this.far = a.far; this.zoom = a.zoom; this.view = a.view === null ? null : ({ ...a.view }); return this; },
      setViewOffset(a, b, c, d, e, f) {
        this.view === null && (this.view = {
          enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1,
        }); this.view.enabled = !0; this.view.fullWidth = a; this.view.fullHeight = b; this.view.offsetX = c; this.view.offsetY = d; this.view.width = e; this.view.height = f; this.updateProjectionMatrix();
      },
      clearViewOffset() { this.view !== null && (this.view.enabled = !1); this.updateProjectionMatrix(); },
      updateProjectionMatrix() {
        let a = (this.right - this.left) / (2 * this.zoom); let b = (this.top
- this.bottom) / (2 * this.zoom); let c = (this.right + this.left) / 2; let d = (this.top + this.bottom) / 2; let e = c - a; c += a; a = d + b; b = d - b; if (this.view !== null && this.view.enabled) { c = this.zoom / (this.view.width / this.view.fullWidth); b = this.zoom / (this.view.height / this.view.fullHeight); const f = (this.right - this.left) / this.view.width; d = (this.top - this.bottom) / this.view.height; e += this.view.offsetX / c * f; c = e + this.view.width / c * f; a -= this.view.offsetY / b * d; b = a - this.view.height / b * d; } this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far); this.projectionMatrixInverse.getInverse(this.projectionMatrix);
      },
      toJSON(a) { a = D.prototype.toJSON.call(this, a); a.object.zoom = this.zoom; a.object.left = this.left; a.object.right = this.right; a.object.top = this.top; a.object.bottom = this.bottom; a.object.near = this.near; a.object.far = this.far; this.view !== null && (a.object.view = { ...this.view }); return a; },
    }); jf.prototype = Object.assign(Object.create(kb.prototype), { constructor: jf, isDirectionalLightShadow: !0, updateMatrices(a) { kb.prototype.updateMatrices.call(this, a); } }); kf.prototype = Object.assign(
      Object.create(ba.prototype),
      { constructor: kf, isDirectionalLight: !0, copy(a) { ba.prototype.copy.call(this, a); this.target = a.target.clone(); this.shadow = a.shadow.clone(); return this; } },
    ); lf.prototype = Object.assign(Object.create(ba.prototype), { constructor: lf, isAmbientLight: !0 }); mf.prototype = Object.assign(Object.create(ba.prototype), {
      constructor: mf,
      isRectAreaLight: !0,
      copy(a) { ba.prototype.copy.call(this, a); this.width = a.width; this.height = a.height; return this; },
      toJSON(a) {
        a = ba.prototype.toJSON.call(this, a); a.object.width = this.width; a.object.height = this.height; return a;
      },
    }); nf.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: nf,
      load(a, b, c, d) { const e = this; const f = new Ra(e.manager); f.setPath(e.path); f.load(a, (a) => { b(e.parse(JSON.parse(a))); }, c, d); },
      parse(a) {
        function b(a) { void 0 === c[a] && console.warn('THREE.MaterialLoader: Undefined texture', a); return c[a]; } var c = this.textures; const d = new $k[a.type](); void 0 !== a.uuid && (d.uuid = a.uuid); void 0 !== a.name && (d.name = a.name); void 0 !== a.color && d.color.setHex(a.color);
        void 0 !== a.roughness && (d.roughness = a.roughness); void 0 !== a.metalness && (d.metalness = a.metalness); void 0 !== a.sheen && (d.sheen = (new y()).setHex(a.sheen)); void 0 !== a.emissive && d.emissive.setHex(a.emissive); void 0 !== a.specular && d.specular.setHex(a.specular); void 0 !== a.shininess && (d.shininess = a.shininess); void 0 !== a.clearcoat && (d.clearcoat = a.clearcoat); void 0 !== a.clearcoatRoughness && (d.clearcoatRoughness = a.clearcoatRoughness); void 0 !== a.vertexColors && (d.vertexColors = a.vertexColors); void 0 !== a.fog && (d.fog = a.fog); void 0 !== a.flatShading && (d.flatShading = a.flatShading); void 0 !== a.blending && (d.blending = a.blending); void 0 !== a.combine && (d.combine = a.combine); void 0 !== a.side && (d.side = a.side); void 0 !== a.opacity && (d.opacity = a.opacity); void 0 !== a.transparent && (d.transparent = a.transparent); void 0 !== a.alphaTest && (d.alphaTest = a.alphaTest); void 0 !== a.depthTest && (d.depthTest = a.depthTest); void 0 !== a.depthWrite && (d.depthWrite = a.depthWrite); void 0 !== a.colorWrite && (d.colorWrite = a.colorWrite); void 0 !== a.stencilWrite && (d.stencilWrite = a.stencilWrite); void 0 !== a.stencilWriteMask && (d.stencilWriteMask = a.stencilWriteMask); void 0 !== a.stencilFunc && (d.stencilFunc = a.stencilFunc); void 0 !== a.stencilRef && (d.stencilRef = a.stencilRef); void 0 !== a.stencilFuncMask && (d.stencilFuncMask = a.stencilFuncMask); void 0 !== a.stencilFail && (d.stencilFail = a.stencilFail); void 0 !== a.stencilZFail && (d.stencilZFail = a.stencilZFail); void 0 !== a.stencilZPass && (d.stencilZPass = a.stencilZPass); void 0 !== a.wireframe && (d.wireframe = a.wireframe); void 0 !== a.wireframeLinewidth
&& (d.wireframeLinewidth = a.wireframeLinewidth); void 0 !== a.wireframeLinecap && (d.wireframeLinecap = a.wireframeLinecap); void 0 !== a.wireframeLinejoin && (d.wireframeLinejoin = a.wireframeLinejoin); void 0 !== a.rotation && (d.rotation = a.rotation); a.linewidth !== 1 && (d.linewidth = a.linewidth); void 0 !== a.dashSize && (d.dashSize = a.dashSize); void 0 !== a.gapSize && (d.gapSize = a.gapSize); void 0 !== a.scale && (d.scale = a.scale); void 0 !== a.polygonOffset && (d.polygonOffset = a.polygonOffset); void 0 !== a.polygonOffsetFactor && (d.polygonOffsetFactor = a.polygonOffsetFactor); void 0 !== a.polygonOffsetUnits && (d.polygonOffsetUnits = a.polygonOffsetUnits); void 0 !== a.skinning && (d.skinning = a.skinning); void 0 !== a.morphTargets && (d.morphTargets = a.morphTargets); void 0 !== a.morphNormals && (d.morphNormals = a.morphNormals); void 0 !== a.dithering && (d.dithering = a.dithering); void 0 !== a.visible && (d.visible = a.visible); void 0 !== a.toneMapped && (d.toneMapped = a.toneMapped); void 0 !== a.userData && (d.userData = a.userData); if (void 0 !== a.uniforms) {
          for (var e in a.uniforms) {
            const f = a.uniforms[e];
            d.uniforms[e] = {}; switch (f.type) { case 't': d.uniforms[e].value = b(f.value); break; case 'c': d.uniforms[e].value = (new y()).setHex(f.value); break; case 'v2': d.uniforms[e].value = (new x()).fromArray(f.value); break; case 'v3': d.uniforms[e].value = (new n()).fromArray(f.value); break; case 'v4': d.uniforms[e].value = (new S()).fromArray(f.value); break; case 'm3': d.uniforms[e].value = (new za()).fromArray(f.value); case 'm4': d.uniforms[e].value = (new P()).fromArray(f.value); break; default: d.uniforms[e].value = f.value; }
          }
        } void 0 !== a.defines
&& (d.defines = a.defines); void 0 !== a.vertexShader && (d.vertexShader = a.vertexShader); void 0 !== a.fragmentShader && (d.fragmentShader = a.fragmentShader); if (void 0 !== a.extensions) for (const g in a.extensions)d.extensions[g] = a.extensions[g]; void 0 !== a.shading && (d.flatShading = a.shading === 1); void 0 !== a.size && (d.size = a.size); void 0 !== a.sizeAttenuation && (d.sizeAttenuation = a.sizeAttenuation); void 0 !== a.map && (d.map = b(a.map)); void 0 !== a.matcap && (d.matcap = b(a.matcap)); void 0 !== a.alphaMap && (d.alphaMap = b(a.alphaMap), d.transparent = !0); void 0 !== a.bumpMap && (d.bumpMap = b(a.bumpMap)); void 0 !== a.bumpScale && (d.bumpScale = a.bumpScale); void 0 !== a.normalMap && (d.normalMap = b(a.normalMap)); void 0 !== a.normalMapType && (d.normalMapType = a.normalMapType); void 0 !== a.normalScale && (e = a.normalScale, !1 === Array.isArray(e) && (e = [e, e]), d.normalScale = (new x()).fromArray(e)); void 0 !== a.displacementMap && (d.displacementMap = b(a.displacementMap)); void 0 !== a.displacementScale && (d.displacementScale = a.displacementScale); void 0 !== a.displacementBias && (d.displacementBias = a.displacementBias); void 0 !== a.roughnessMap && (d.roughnessMap = b(a.roughnessMap)); void 0 !== a.metalnessMap && (d.metalnessMap = b(a.metalnessMap)); void 0 !== a.emissiveMap && (d.emissiveMap = b(a.emissiveMap)); void 0 !== a.emissiveIntensity && (d.emissiveIntensity = a.emissiveIntensity); void 0 !== a.specularMap && (d.specularMap = b(a.specularMap)); void 0 !== a.envMap && (d.envMap = b(a.envMap)); void 0 !== a.envMapIntensity && (d.envMapIntensity = a.envMapIntensity); void 0 !== a.reflectivity && (d.reflectivity = a.reflectivity); void 0 !== a.refractionRatio
&& (d.refractionRatio = a.refractionRatio); void 0 !== a.lightMap && (d.lightMap = b(a.lightMap)); void 0 !== a.lightMapIntensity && (d.lightMapIntensity = a.lightMapIntensity); void 0 !== a.aoMap && (d.aoMap = b(a.aoMap)); void 0 !== a.aoMapIntensity && (d.aoMapIntensity = a.aoMapIntensity); void 0 !== a.gradientMap && (d.gradientMap = b(a.gradientMap)); void 0 !== a.clearcoatNormalMap && (d.clearcoatNormalMap = b(a.clearcoatNormalMap)); void 0 !== a.clearcoatNormalScale && (d.clearcoatNormalScale = (new x()).fromArray(a.clearcoatNormalScale)); return d;
      },
      setTextures(a) { this.textures = a; return this; },
    }); const rh = { decodeText(a) { if (typeof TextDecoder !== 'undefined') return (new TextDecoder()).decode(a); for (var b = '', c = 0, d = a.length; c < d; c++)b += String.fromCharCode(a[c]); try { return decodeURIComponent(escape(b)); } catch (e) { return b; } }, extractUrlBase(a) { const b = a.lastIndexOf('/'); return b === -1 ? './' : a.substr(0, b + 1); } }; of.prototype = Object.assign(Object.create(G.prototype), {
      constructor: of,
      isInstancedBufferGeometry: !0,
      copy(a) {
        G.prototype.copy.call(
          this,
          a,
        ); this.maxInstancedCount = a.maxInstancedCount; return this;
      },
      clone() { return (new this.constructor()).copy(this); },
      toJSON() { const a = G.prototype.toJSON.call(this); a.maxInstancedCount = this.maxInstancedCount; a.isInstancedBufferGeometry = !0; return a; },
    }); pf.prototype = Object.assign(Object.create(K.prototype), {
      constructor: pf,
      isInstancedBufferAttribute: !0,
      copy(a) { K.prototype.copy.call(this, a); this.meshPerAttribute = a.meshPerAttribute; return this; },
      toJSON() {
        const a = K.prototype.toJSON.call(this);
        a.meshPerAttribute = this.meshPerAttribute; a.isInstancedBufferAttribute = !0; return a;
      },
    }); qf.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: qf,
      load(a, b, c, d) { const e = this; const f = new Ra(e.manager); f.setPath(e.path); f.load(a, (a) => { b(e.parse(JSON.parse(a))); }, c, d); },
      parse(a) {
        const b = a.isInstancedBufferGeometry ? new of() : new G(); let
          c = a.data.index; if (void 0 !== c) { var d = new sh[c.type](c.array); b.setIndex(new K(d, 1)); }c = a.data.attributes; for (var e in c) {
          var f = c[e]; d = new sh[f.type](f.array);
          d = new (f.isInstancedBufferAttribute ? pf : K)(d, f.itemSize, f.normalized); void 0 !== f.name && (d.name = f.name); b.setAttribute(e, d);
        } const g = a.data.morphAttributes; if (g) for (e in g) { const h = g[e]; const l = []; c = 0; for (let m = h.length; c < m; c++)f = h[c], d = new sh[f.type](f.array), d = new K(d, f.itemSize, f.normalized), void 0 !== f.name && (d.name = f.name), l.push(d); b.morphAttributes[e] = l; }a.data.morphTargetsRelative && (b.morphTargetsRelative = !0); e = a.data.groups || a.data.drawcalls || a.data.offsets; if (void 0 !== e) {
          for (c = 0, f = e.length; c !== f; ++c) {
            d = e[c], b.addGroup(d.start, d.count, d.materialIndex);
          }
        }c = a.data.boundingSphere; void 0 !== c && (e = new n(), void 0 !== c.center && e.fromArray(c.center), b.boundingSphere = new qb(e, c.radius)); a.name && (b.name = a.name); a.userData && (b.userData = a.userData); return b;
      },
    }); var sh = {
      Int8Array, Uint8Array, Uint8ClampedArray: typeof Uint8ClampedArray !== 'undefined' ? Uint8ClampedArray : Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array,
    };
    rf.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: rf,
      load(a, b, c, d) {
        const e = this; let f = this.path === '' ? rh.extractUrlBase(a) : this.path; this.resourcePath = this.resourcePath || f; f = new Ra(e.manager); f.setPath(this.path); f.load(a, (c) => {
          let f = null; try { f = JSON.parse(c); } catch (l) { void 0 !== d && d(l); console.error(`THREE:ObjectLoader: Can't parse ${a}.`, l.message); return; }c = f.metadata; void 0 === c || void 0 === c.type || c.type.toLowerCase() === 'geometry' ? console.error(`THREE.ObjectLoader: Can't load ${
            a}`) : e.parse(f, b);
        }, c, d);
      },
      parse(a, b) { let c = this.parseShape(a.shapes); c = this.parseGeometries(a.geometries, c); let d = this.parseImages(a.images, () => { void 0 !== b && b(e); }); d = this.parseTextures(a.textures, d); d = this.parseMaterials(a.materials, d); var e = this.parseObject(a.object, c, d); a.animations && (e.animations = this.parseAnimations(a.animations)); void 0 !== a.images && a.images.length !== 0 || void 0 === b || b(e); return e; },
      parseShape(a) {
        const b = {}; if (void 0 !== a) {
          for (let c = 0, d = a.length; c < d; c++) {
            const e = (new Lb()).fromJSON(a[c]);
            b[e.uuid] = e;
          }
        } return b;
      },
      parseGeometries(a, b) {
        const c = {}; if (void 0 !== a) {
          for (let d = new qf(), e = 0, f = a.length; e < f; e++) {
            const g = a[e]; switch (g.type) {
              case 'PlaneGeometry': case 'PlaneBufferGeometry': var h = new ua[g.type](g.width, g.height, g.widthSegments, g.heightSegments); break; case 'BoxGeometry': case 'BoxBufferGeometry': case 'CubeGeometry': h = new ua[g.type](g.width, g.height, g.depth, g.widthSegments, g.heightSegments, g.depthSegments); break; case 'CircleGeometry': case 'CircleBufferGeometry': h = new ua[g.type](
                g.radius,
                g.segments,
                g.thetaStart,
                g.thetaLength,
              ); break; case 'CylinderGeometry': case 'CylinderBufferGeometry': h = new ua[g.type](g.radiusTop, g.radiusBottom, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength); break; case 'ConeGeometry': case 'ConeBufferGeometry': h = new ua[g.type](g.radius, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength); break; case 'SphereGeometry': case 'SphereBufferGeometry': h = new ua[g.type](
                g.radius,
                g.widthSegments,
                g.heightSegments,
                g.phiStart,
                g.phiLength,
                g.thetaStart,
                g.thetaLength,
              ); break; case 'DodecahedronGeometry': case 'DodecahedronBufferGeometry': case 'IcosahedronGeometry': case 'IcosahedronBufferGeometry': case 'OctahedronGeometry': case 'OctahedronBufferGeometry': case 'TetrahedronGeometry': case 'TetrahedronBufferGeometry': h = new ua[g.type](g.radius, g.detail); break; case 'RingGeometry': case 'RingBufferGeometry': h = new ua[g.type](g.innerRadius, g.outerRadius, g.thetaSegments, g.phiSegments, g.thetaStart, g.thetaLength); break; case 'TorusGeometry': case 'TorusBufferGeometry': h = new ua[g.type](g.radius, g.tube, g.radialSegments, g.tubularSegments, g.arc); break; case 'TorusKnotGeometry': case 'TorusKnotBufferGeometry': h = new ua[g.type](g.radius, g.tube, g.tubularSegments, g.radialSegments, g.p, g.q); break; case 'TubeGeometry': case 'TubeBufferGeometry': h = new ua[g.type]((new qh[g.path.type]()).fromJSON(g.path), g.tubularSegments, g.radius, g.radialSegments, g.closed); break; case 'LatheGeometry': case 'LatheBufferGeometry': h = new ua[g.type](g.points, g.segments, g.phiStart, g.phiLength); break; case 'PolyhedronGeometry': case 'PolyhedronBufferGeometry': h = new ua[g.type](g.vertices, g.indices, g.radius, g.details); break; case 'ShapeGeometry': case 'ShapeBufferGeometry': h = []; for (var l = 0, m = g.shapes.length; l < m; l++) { var n = b[g.shapes[l]]; h.push(n); }h = new ua[g.type](h, g.curveSegments); break; case 'ExtrudeGeometry': case 'ExtrudeBufferGeometry': h = []; l = 0; for (m = g.shapes.length; l < m; l++)n = b[g.shapes[l]], h.push(n); l = g.options.extrudePath; void 0 !== l && (g.options.extrudePath = (new qh[l.type]()).fromJSON(l)); h = new ua[g.type](h, g.options); break; case 'BufferGeometry': case 'InstancedBufferGeometry': h = d.parse(g); break; case 'Geometry': 'THREE' in window && 'LegacyJSONLoader' in THREE ? h = (new THREE.LegacyJSONLoader()).parse(g, this.resourcePath).geometry : console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".'); break; default: console.warn(`THREE.ObjectLoader: Unsupported geometry type "${g.type}"`); continue;
            }h.uuid = g.uuid; void 0 !== g.name && (h.name = g.name); !0 === h.isBufferGeometry && void 0 !== g.userData && (h.userData = g.userData); c[g.uuid] = h;
          }
        } return c;
      },
      parseMaterials(a, b) { const c = {}; const d = {}; if (void 0 !== a) { const e = new nf(); e.setTextures(b); b = 0; for (let f = a.length; b < f; b++) { const g = a[b]; if (g.type === 'MultiMaterial') { for (var h = [], l = 0; l < g.materials.length; l++) { const m = g.materials[l]; void 0 === c[m.uuid] && (c[m.uuid] = e.parse(m)); h.push(c[m.uuid]); }d[g.uuid] = h; } else void 0 === c[g.uuid] && (c[g.uuid] = e.parse(g)), d[g.uuid] = c[g.uuid]; } } return d; },
      parseAnimations(a) { for (var b = [], c = 0; c < a.length; c++) { const d = a[c]; const e = Qa.parse(d); void 0 !== d.uuid && (e.uuid = d.uuid); b.push(e); } return b; },
      parseImages(a, b) {
        function c(a) { d.manager.itemStart(a); return f.load(a, () => { d.manager.itemEnd(a); }, void 0, () => { d.manager.itemError(a); d.manager.itemEnd(a); }); } var d = this; const e = {}; if (void 0 !== a && a.length > 0) {
          b = new wg(b); var f = new ed(b); f.setCrossOrigin(this.crossOrigin); b = 0; for (let g = a.length; b < g; b++) {
            const h = a[b]; const l = h.url; if (Array.isArray(l)) { e[h.uuid] = []; for (let m = 0, n = l.length; m < n; m++) { var p = l[m]; p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : d.resourcePath + p; e[h.uuid].push(c(p)); } } else {
              p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)
                ? h.url : d.resourcePath + h.url, e[h.uuid] = c(p);
            }
          }
        } return e;
      },
      parseTextures(a, b) {
        function c(a, b) { if (typeof a === 'number') return a; console.warn('THREE.ObjectLoader.parseTexture: Constant should be in numeric form.', a); return b[a]; } const d = {}; if (void 0 !== a) {
          for (let e = 0, f = a.length; e < f; e++) {
            const g = a[e]; void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid); void 0 === b[g.image] && console.warn('THREE.ObjectLoader: Undefined image', g.image); const h = Array.isArray(b[g.image]) ? new rb(b[g.image])
              : new T(b[g.image]); h.needsUpdate = !0; h.uuid = g.uuid; void 0 !== g.name && (h.name = g.name); void 0 !== g.mapping && (h.mapping = c(g.mapping, al)); void 0 !== g.offset && h.offset.fromArray(g.offset); void 0 !== g.repeat && h.repeat.fromArray(g.repeat); void 0 !== g.center && h.center.fromArray(g.center); void 0 !== g.rotation && (h.rotation = g.rotation); void 0 !== g.wrap && (h.wrapS = c(g.wrap[0], Yi), h.wrapT = c(g.wrap[1], Yi)); void 0 !== g.format && (h.format = g.format); void 0 !== g.type && (h.type = g.type); void 0 !== g.encoding && (h.encoding = g.encoding);
            void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, Zi)); void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, Zi)); void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy); void 0 !== g.flipY && (h.flipY = g.flipY); void 0 !== g.premultiplyAlpha && (h.premultiplyAlpha = g.premultiplyAlpha); void 0 !== g.unpackAlignment && (h.unpackAlignment = g.unpackAlignment); d[g.uuid] = h;
          }
        } return d;
      },
      parseObject(a, b, c) {
        function d(a) { void 0 === b[a] && console.warn('THREE.ObjectLoader: Undefined geometry', a); return b[a]; } function e(a) {
          if (void 0
!== a) { if (Array.isArray(a)) { for (var b = [], d = 0, e = a.length; d < e; d++) { const f = a[d]; void 0 === c[f] && console.warn('THREE.ObjectLoader: Undefined material', f); b.push(c[f]); } return b; } void 0 === c[a] && console.warn('THREE.ObjectLoader: Undefined material', a); return c[a]; }
        } switch (a.type) {
          case 'Scene': var f = new pb(); void 0 !== a.background && Number.isInteger(a.background) && (f.background = new y(a.background)); void 0 !== a.fog && (a.fog.type === 'Fog' ? f.fog = new Re(a.fog.color, a.fog.near, a.fog.far) : a.fog.type === 'FogExp2' && (f.fog = new Qe(
            a.fog.color,
            a.fog.density,
          ))); break; case 'PerspectiveCamera': f = new pa(a.fov, a.aspect, a.near, a.far); void 0 !== a.focus && (f.focus = a.focus); void 0 !== a.zoom && (f.zoom = a.zoom); void 0 !== a.filmGauge && (f.filmGauge = a.filmGauge); void 0 !== a.filmOffset && (f.filmOffset = a.filmOffset); void 0 !== a.view && (f.view = { ...a.view }); break; case 'OrthographicCamera': f = new gd(a.left, a.right, a.top, a.bottom, a.near, a.far); void 0 !== a.zoom && (f.zoom = a.zoom); void 0 !== a.view && (f.view = { ...a.view }); break; case 'AmbientLight': f = new lf(a.color, a.intensity); break; case 'DirectionalLight': f = new kf(a.color, a.intensity); break; case 'PointLight': f = new hf(a.color, a.intensity, a.distance, a.decay); break; case 'RectAreaLight': f = new mf(a.color, a.intensity, a.width, a.height); break; case 'SpotLight': f = new gf(a.color, a.intensity, a.distance, a.angle, a.penumbra, a.decay); break; case 'HemisphereLight': f = new ef(a.color, a.groundColor, a.intensity); break; case 'SkinnedMesh': console.warn('THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.');
          case 'Mesh': f = d(a.geometry); var g = e(a.material); f = f.bones && f.bones.length > 0 ? new Td(f, g) : new ca(f, g); break; case 'InstancedMesh': f = d(a.geometry); g = e(a.material); var h = a.instanceMatrix; f = new Ue(f, g, a.count); f.instanceMatrix = new K(new Float32Array(h.array), 16); break; case 'LOD': f = new Sd(); break; case 'Line': f = new Ja(d(a.geometry), e(a.material), a.mode); break; case 'LineLoop': f = new Ve(d(a.geometry), e(a.material)); break; case 'LineSegments': f = new la(d(a.geometry), e(a.material)); break; case 'PointCloud': case 'Points': f = new Oc(d(a.geometry), e(a.material)); break; case 'Sprite': f = new Qd(e(a.material)); break; case 'Group': f = new Od(); break; default: f = new D();
        }f.uuid = a.uuid; void 0 !== a.name && (f.name = a.name); void 0 !== a.matrix ? (f.matrix.fromArray(a.matrix), void 0 !== a.matrixAutoUpdate && (f.matrixAutoUpdate = a.matrixAutoUpdate), f.matrixAutoUpdate && f.matrix.decompose(f.position, f.quaternion, f.scale)) : (void 0 !== a.position && f.position.fromArray(a.position), void 0 !== a.rotation && f.rotation.fromArray(a.rotation), void 0 !== a.quaternion && f.quaternion.fromArray(a.quaternion),
        void 0 !== a.scale && f.scale.fromArray(a.scale)); void 0 !== a.castShadow && (f.castShadow = a.castShadow); void 0 !== a.receiveShadow && (f.receiveShadow = a.receiveShadow); a.shadow && (void 0 !== a.shadow.bias && (f.shadow.bias = a.shadow.bias), void 0 !== a.shadow.radius && (f.shadow.radius = a.shadow.radius), void 0 !== a.shadow.mapSize && f.shadow.mapSize.fromArray(a.shadow.mapSize), void 0 !== a.shadow.camera && (f.shadow.camera = this.parseObject(a.shadow.camera))); void 0 !== a.visible && (f.visible = a.visible); void 0 !== a.frustumCulled
&& (f.frustumCulled = a.frustumCulled); void 0 !== a.renderOrder && (f.renderOrder = a.renderOrder); void 0 !== a.userData && (f.userData = a.userData); void 0 !== a.layers && (f.layers.mask = a.layers); if (void 0 !== a.children) for (h = a.children, g = 0; g < h.length; g++)f.add(this.parseObject(h[g], b, c)); if (a.type === 'LOD') for (void 0 !== a.autoUpdate && (f.autoUpdate = a.autoUpdate), a = a.levels, h = 0; h < a.length; h++) { g = a[h]; const l = f.getObjectByProperty('uuid', g.object); void 0 !== l && f.addLevel(l, g.distance); } return f;
      },
    }); var al = {
      UVMapping: 300,
      CubeReflectionMapping: 301,
      CubeRefractionMapping: 302,
      EquirectangularReflectionMapping: 303,
      EquirectangularRefractionMapping: 304,
      SphericalReflectionMapping: 305,
      CubeUVReflectionMapping: 306,
      CubeUVRefractionMapping: 307,
    }; var Yi = { RepeatWrapping: 1E3, ClampToEdgeWrapping: 1001, MirroredRepeatWrapping: 1002 }; var Zi = {
      NearestFilter: 1003, NearestMipmapNearestFilter: 1004, NearestMipmapLinearFilter: 1005, LinearFilter: 1006, LinearMipmapNearestFilter: 1007, LinearMipmapLinearFilter: 1008,
    }; Bg.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: Bg,
      setOptions(a) { this.options = a; return this; },
      load(a, b, c, d) {
        void 0 === a && (a = ''); void 0 !== this.path && (a = this.path + a); a = this.manager.resolveURL(a); const e = this; const f = xc.get(a); if (void 0 !== f) return e.manager.itemStart(a), setTimeout(() => { b && b(f); e.manager.itemEnd(a); }, 0), f; fetch(a).then((a) => a.blob()).then((a) => (void 0 === e.options ? createImageBitmap(a) : createImageBitmap(a, e.options))).then((c) => { xc.add(a, c); b && b(c); e.manager.itemEnd(a); })
          .catch((b) => {
            d
&& d(b); e.manager.itemError(a); e.manager.itemEnd(a);
          }); e.manager.itemStart(a);
      },
    }); Object.assign(Cg.prototype, {
      moveTo(a, b) { this.currentPath = new $a(); this.subPaths.push(this.currentPath); this.currentPath.moveTo(a, b); return this; },
      lineTo(a, b) { this.currentPath.lineTo(a, b); return this; },
      quadraticCurveTo(a, b, c, d) { this.currentPath.quadraticCurveTo(a, b, c, d); return this; },
      bezierCurveTo(a, b, c, d, e, f) { this.currentPath.bezierCurveTo(a, b, c, d, e, f); return this; },
      splineThru(a) {
        this.currentPath.splineThru(a);
        return this;
      },
      toShapes(a, b) {
        function c(a) { for (var b = [], c = 0, d = a.length; c < d; c++) { const e = a[c]; const f = new Lb(); f.curves = e.curves; b.push(f); } return b; } function d(a, b) { for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) { let g = b[e]; let h = b[f]; let k = h.x - g.x; let l = h.y - g.y; if (Math.abs(l) > Number.EPSILON) { if (l < 0 && (g = b[f], k = -k, h = b[e], l = -l), !(a.y < g.y || a.y > h.y)) if (a.y === g.y) { if (a.x === g.x) return !0; } else { e = l * (a.x - g.x) - k * (a.y - g.y); if (e === 0) return !0; e < 0 || (d = !d); } } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x)) return !0; } return d; }
        let e = tb.isClockWise; let f = this.subPaths; if (f.length === 0) return []; if (!0 === b) return c(f); b = []; if (f.length === 1) { var g = f[0]; var h = new Lb(); h.curves = g.curves; b.push(h); return b; } let l = !e(f[0].getPoints()); l = a ? !l : l; h = []; const m = []; let n = []; let p = 0; m[p] = void 0; n[p] = []; for (var q = 0, t = f.length; q < t; q++) { g = f[q]; var r = g.getPoints(); var u = e(r); (u = a ? !u : u) ? (!l && m[p] && p++, m[p] = { s: new Lb(), p: r }, m[p].s.curves = g.curves, l && p++, n[p] = []) : n[p].push({ h: g, p: r[0] }); } if (!m[0]) return c(f); if (m.length > 1) {
          q = !1; a = []; e = 0; for (f = m.length; e < f; e++) {
            h[e] = [];
          }e = 0; for (f = m.length; e < f; e++) for (g = n[e], u = 0; u < g.length; u++) { l = g[u]; p = !0; for (r = 0; r < m.length; r++)d(l.p, m[r].p) && (e !== r && a.push({ froms: e, tos: r, hole: u }), p ? (p = !1, h[r].push(l)) : q = !0); p && h[e].push(l); }a.length > 0 && (q || (n = h));
        }q = 0; for (e = m.length; q < e; q++) for (h = m[q].s, b.push(h), a = n[q], f = 0, g = a.length; f < g; f++)h.holes.push(a[f].h); return b;
      },
    }); Object.assign(Dg.prototype, {
      isFont: !0,
      generateShapes(a, b) {
        void 0 === b && (b = 100); const c = []; let d = b; b = this.data; let e = Array.from ? Array.from(a) : String(a).split(''); d /= b.resolution;
        const f = (b.boundingBox.yMax - b.boundingBox.yMin + b.underlineThickness) * d; a = []; for (let g = 0, h = 0, l = 0; l < e.length; l++) {
          let m = e[l]; if (m === '\n')g = 0, h -= f; else {
            let n = m; m = d; const p = g; const q = h; let t = b; const r = t.glyphs[n] || t.glyphs['?']; if (r) {
              n = new Cg(); if (r.o) {
                t = r._cachedOutline || (r._cachedOutline = r.o.split(' ')); for (let u = 0, x = t.length; u < x;) {
                  switch (t[u++]) {
                    case 'm': var w = t[u++] * m + p; var y = t[u++] * m + q; n.moveTo(w, y); break; case 'l': w = t[u++] * m + p; y = t[u++] * m + q; n.lineTo(w, y); break; case 'q': var C = t[u++] * m + p; var D = t[u++] * m + q; var A = t[u++] * m + p;
                      var E = t[u++] * m + q; n.quadraticCurveTo(A, E, C, D); break; case 'b': C = t[u++] * m + p, D = t[u++] * m + q, A = t[u++] * m + p, E = t[u++] * m + q, w = t[u++] * m + p, y = t[u++] * m + q, n.bezierCurveTo(A, E, w, y, C, D);
                  }
                }
              }m = { offsetX: r.ha * m, path: n };
            } else console.error(`THREE.Font: character "${n}" does not exists in font family ${t.familyName}.`), m = void 0; g += m.offsetX; a.push(m.path);
          }
        }b = 0; for (e = a.length; b < e; b++)Array.prototype.push.apply(c, a[b].toShapes()); return c;
      },
    }); Eg.prototype = Object.assign(Object.create(Q.prototype), {
      constructor: Eg,
      load(
        a,
        b,
        c,
        d,
      ) { const e = this; const f = new Ra(this.manager); f.setPath(this.path); f.load(a, (a) => { try { var c = JSON.parse(a); } catch (l) { console.warn('THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.'), c = JSON.parse(a.substring(65, a.length - 2)); }a = e.parse(c); b && b(a); }, c, d); },
      parse(a) { return new Dg(a); },
    }); let Uf; var Jg = { getContext() { void 0 === Uf && (Uf = new (window.AudioContext || window.webkitAudioContext)()); return Uf; }, setContext(a) { Uf = a; } }; sf.prototype = Object.assign(
      Object.create(Q.prototype),
      { constructor: sf, load(a, b, c, d) { const e = new Ra(this.manager); e.setResponseType('arraybuffer'); e.setPath(this.path); e.load(a, (a) => { a = a.slice(0); Jg.getContext().decodeAudioData(a, (a) => { b(a); }); }, c, d); } },
    ); Object.assign(tf.prototype, {
      isSphericalHarmonics3: !0,
      set(a) { for (let b = 0; b < 9; b++) this.coefficients[b].copy(a[b]); return this; },
      zero() { for (let a = 0; a < 9; a++) this.coefficients[a].set(0, 0, 0); return this; },
      getAt(a, b) {
        const c = a.x; const d = a.y; a = a.z; const e = this.coefficients; b.copy(e[0]).multiplyScalar(0.282095);
        b.addScale(e[1], 0.488603 * d); b.addScale(e[2], 0.488603 * a); b.addScale(e[3], 0.488603 * c); b.addScale(e[4], 1.092548 * c * d); b.addScale(e[5], 1.092548 * d * a); b.addScale(e[6], 0.315392 * (3 * a * a - 1)); b.addScale(e[7], 1.092548 * c * a); b.addScale(e[8], 0.546274 * (c * c - d * d)); return b;
      },
      getIrradianceAt(a, b) {
        const c = a.x; const d = a.y; a = a.z; const e = this.coefficients; b.copy(e[0]).multiplyScalar(0.886227); b.addScale(e[1], 1.023328 * d); b.addScale(e[2], 1.023328 * a); b.addScale(e[3], 1.023328 * c); b.addScale(e[4], 0.858086 * c * d); b.addScale(e[5], 0.858086
* d * a); b.addScale(e[6], 0.743125 * a * a - 0.247708); b.addScale(e[7], 0.858086 * c * a); b.addScale(e[8], 0.429043 * (c * c - d * d)); return b;
      },
      add(a) { for (let b = 0; b < 9; b++) this.coefficients[b].add(a.coefficients[b]); return this; },
      scale(a) { for (let b = 0; b < 9; b++) this.coefficients[b].multiplyScalar(a); return this; },
      lerp(a, b) { for (let c = 0; c < 9; c++) this.coefficients[c].lerp(a.coefficients[c], b); return this; },
      equals(a) { for (let b = 0; b < 9; b++) if (!this.coefficients[b].equals(a.coefficients[b])) return !1; return !0; },
      copy(a) { return this.set(a.coefficients); },
      clone() { return (new this.constructor()).copy(this); },
      fromArray(a, b) { void 0 === b && (b = 0); for (let c = this.coefficients, d = 0; d < 9; d++)c[d].fromArray(a, b + 3 * d); return this; },
      toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); for (let c = this.coefficients, d = 0; d < 9; d++)c[d].toArray(a, b + 3 * d); return a; },
    }); Object.assign(tf, {
      getBasisAt(a, b) {
        const c = a.x; const d = a.y; a = a.z; b[0] = 0.282095; b[1] = 0.488603 * d; b[2] = 0.488603 * a; b[3] = 0.488603 * c; b[4] = 1.092548 * c * d;
        b[5] = 1.092548 * d * a; b[6] = 0.315392 * (3 * a * a - 1); b[7] = 1.092548 * c * a; b[8] = 0.546274 * (c * c - d * d);
      },
    }); ab.prototype = Object.assign(Object.create(ba.prototype), {
      constructor: ab, isLightProbe: !0, copy(a) { ba.prototype.copy.call(this, a); this.sh.copy(a.sh); this.intensity = a.intensity; return this; }, toJSON(a) { return ba.prototype.toJSON.call(this, a); },
    }); Fg.prototype = Object.assign(Object.create(ab.prototype), {
      constructor: Fg,
      isHemisphereLightProbe: !0,
      copy(a) { ab.prototype.copy.call(this, a); return this; },
      toJSON(a) {
        return ab.prototype.toJSON.call(
          this,
          a,
        );
      },
    }); Gg.prototype = Object.assign(Object.create(ab.prototype), {
      constructor: Gg, isAmbientLightProbe: !0, copy(a) { ab.prototype.copy.call(this, a); return this; }, toJSON(a) { return ab.prototype.toJSON.call(this, a); },
    }); const $i = new P(); const
      aj = new P(); Object.assign(ii.prototype, {
      update(a) {
        const b = this._cache; if (b.focus !== a.focus || b.fov !== a.fov || b.aspect !== a.aspect * this.aspect || b.near !== a.near || b.far !== a.far || b.zoom !== a.zoom || b.eyeSep !== this.eyeSep) {
          b.focus = a.focus; b.fov = a.fov; b.aspect = a.aspect * this.aspect;
          b.near = a.near; b.far = a.far; b.zoom = a.zoom; b.eyeSep = this.eyeSep; const c = a.projectionMatrix.clone(); let d = b.eyeSep / 2; const e = d * b.near / b.focus; const f = b.near * Math.tan(O.DEG2RAD * b.fov * 0.5) / b.zoom; aj.elements[12] = -d; $i.elements[12] = d; d = -f * b.aspect + e; let g = f * b.aspect + e; c.elements[0] = 2 * b.near / (g - d); c.elements[8] = (g + d) / (g - d); this.cameraL.projectionMatrix.copy(c); d = -f * b.aspect - e; g = f * b.aspect - e; c.elements[0] = 2 * b.near / (g - d); c.elements[8] = (g + d) / (g - d); this.cameraR.projectionMatrix.copy(c);
        } this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(aj);
        this.cameraR.matrixWorld.copy(a.matrixWorld).multiply($i);
      },
    }); Object.assign(Hg.prototype, {
      start() { this.oldTime = this.startTime = (typeof performance === 'undefined' ? Date : performance).now(); this.elapsedTime = 0; this.running = !0; },
      stop() { this.getElapsedTime(); this.autoStart = this.running = !1; },
      getElapsedTime() { this.getDelta(); return this.elapsedTime; },
      getDelta() {
        let a = 0; if (this.autoStart && !this.running) return this.start(), 0; if (this.running) {
          const b = (typeof performance === 'undefined'
            ? Date : performance).now(); a = (b - this.oldTime) / 1E3; this.oldTime = b; this.elapsedTime += a;
        } return a;
      },
    }); const yc = new n(); const bj = new Da(); const bl = new n(); const
      zc = new n(); Ig.prototype = Object.assign(Object.create(D.prototype), {
      constructor: Ig,
      getInput() { return this.gain; },
      removeFilter() { this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null); return this; },
      getFilter() { return this.filter; },
      setFilter(a) {
        this.filter
!== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination); this.filter = a; this.gain.connect(this.filter); this.filter.connect(this.context.destination); return this;
      },
      getMasterVolume() { return this.gain.gain.value; },
      setMasterVolume(a) { this.gain.gain.setTargetAtTime(a, this.context.currentTime, 0.01); return this; },
      updateMatrixWorld(a) {
        D.prototype.updateMatrixWorld.call(this, a); a = this.context.listener;
        const b = this.up; this.timeDelta = this._clock.getDelta(); this.matrixWorld.decompose(yc, bj, bl); zc.set(0, 0, -1).applyQuaternion(bj); if (a.positionX) {
          const c = this.context.currentTime + this.timeDelta; a.positionX.linearRampToValueAtTime(yc.x, c); a.positionY.linearRampToValueAtTime(yc.y, c); a.positionZ.linearRampToValueAtTime(yc.z, c); a.forwardX.linearRampToValueAtTime(zc.x, c); a.forwardY.linearRampToValueAtTime(zc.y, c); a.forwardZ.linearRampToValueAtTime(zc.z, c); a.upX.linearRampToValueAtTime(b.x, c); a.upY.linearRampToValueAtTime(
            b.y,
            c,
          ); a.upZ.linearRampToValueAtTime(b.z, c);
        } else a.setPosition(yc.x, yc.y, yc.z), a.setOrientation(zc.x, zc.y, zc.z, b.x, b.y, b.z);
      },
    }); hd.prototype = Object.assign(Object.create(D.prototype), {
      constructor: hd,
      getOutput() { return this.gain; },
      setNodeSource(a) { this.hasPlaybackControl = !1; this.sourceType = 'audioNode'; this.source = a; this.connect(); return this; },
      setMediaElementSource(a) {
        this.hasPlaybackControl = !1; this.sourceType = 'mediaNode'; this.source = this.context.createMediaElementSource(a); this.connect();
        return this;
      },
      setMediaStreamSource(a) { this.hasPlaybackControl = !1; this.sourceType = 'mediaStreamNode'; this.source = this.context.createMediaStreamSource(a); this.connect(); return this; },
      setBuffer(a) { this.buffer = a; this.sourceType = 'buffer'; this.autoplay && this.play(); return this; },
      play(a) {
        void 0 === a && (a = 0); if (!0 === this.isPlaying)console.warn('THREE.Audio: Audio is already playing.'); else if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.');
        else return this._startedAt = this.context.currentTime + a, a = this.context.createBufferSource(), a.buffer = this.buffer, a.loop = this.loop, a.loopStart = this.loopStart, a.loopEnd = this.loopEnd, a.onended = this.onEnded.bind(this), a.start(this._startedAt, this._pausedAt + this.offset, this.duration), this.isPlaying = !0, this.source = a, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
      },
      pause() {
        if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.');
        else return !0 === this.isPlaying && (this._pausedAt = (this.context.currentTime - this._startedAt) * this.playbackRate, this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
      },
      stop() { if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.'); else return this._pausedAt = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this; },
      connect() {
        if (this.filters.length > 0) {
          this.source.connect(this.filters[0]); for (let a = 1, b = this.filters.length; a
< b; a++) this.filters[a - 1].connect(this.filters[a]); this.filters[this.filters.length - 1].connect(this.getOutput());
        } else this.source.connect(this.getOutput()); return this;
      },
      disconnect() { if (this.filters.length > 0) { this.source.disconnect(this.filters[0]); for (let a = 1, b = this.filters.length; a < b; a++) this.filters[a - 1].disconnect(this.filters[a]); this.filters[this.filters.length - 1].disconnect(this.getOutput()); } else this.source.disconnect(this.getOutput()); return this; },
      getFilters() { return this.filters; },
      setFilters(a) { a || (a = []); !0 === this.isPlaying ? (this.disconnect(), this.filters = a, this.connect()) : this.filters = a; return this; },
      setDetune(a) { this.detune = a; if (void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this; },
      getDetune() { return this.detune; },
      getFilter() { return this.getFilters()[0]; },
      setFilter(a) { return this.setFilters(a ? [a] : []); },
      setPlaybackRate(a) {
        if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.');
        else return this.playbackRate = a, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
      },
      getPlaybackRate() { return this.playbackRate; },
      onEnded() { this.isPlaying = !1; },
      getLoop() { return !1 === this.hasPlaybackControl ? (console.warn('THREE.Audio: this Audio has no playback control.'), !1) : this.loop; },
      setLoop(a) {
        if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.'); else {
          return this.loop = a, !0 === this.isPlaying && (this.source.loop = this.loop), this;
        }
      },
      setLoopStart(a) { this.loopStart = a; return this; },
      setLoopEnd(a) { this.loopEnd = a; return this; },
      getVolume() { return this.gain.gain.value; },
      setVolume(a) { this.gain.gain.setTargetAtTime(a, this.context.currentTime, 0.01); return this; },
    }); const Ac = new n(); const cj = new Da(); const cl = new n(); const
      Bc = new n(); Kg.prototype = Object.assign(Object.create(hd.prototype), {
      constructor: Kg,
      getOutput() { return this.panner; },
      getRefDistance() { return this.panner.refDistance; },
      setRefDistance(a) { this.panner.refDistance = a; return this; },
      getRolloffFactor() { return this.panner.rolloffFactor; },
      setRolloffFactor(a) { this.panner.rolloffFactor = a; return this; },
      getDistanceModel() { return this.panner.distanceModel; },
      setDistanceModel(a) { this.panner.distanceModel = a; return this; },
      getMaxDistance() { return this.panner.maxDistance; },
      setMaxDistance(a) { this.panner.maxDistance = a; return this; },
      setDirectionalCone(a, b, c) {
        this.panner.coneInnerAngle = a; this.panner.coneOuterAngle = b; this.panner.coneOuterGain = c; return this;
      },
      updateMatrixWorld(a) {
        D.prototype.updateMatrixWorld.call(this, a); if (!0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
          if (this.matrixWorld.decompose(Ac, cj, cl), Bc.set(0, 0, 1).applyQuaternion(cj), a = this.panner, a.positionX) {
            const b = this.context.currentTime + this.listener.timeDelta; a.positionX.linearRampToValueAtTime(Ac.x, b); a.positionY.linearRampToValueAtTime(Ac.y, b); a.positionZ.linearRampToValueAtTime(Ac.z, b); a.orientationX.linearRampToValueAtTime(
              Bc.x,
              b,
            ); a.orientationY.linearRampToValueAtTime(Bc.y, b); a.orientationZ.linearRampToValueAtTime(Bc.z, b);
          } else a.setPosition(Ac.x, Ac.y, Ac.z), a.setOrientation(Bc.x, Bc.y, Bc.z);
        }
      },
    }); Object.assign(Lg.prototype, { getFrequencyData() { this.analyser.getByteFrequencyData(this.data); return this.data; }, getAverageFrequency() { for (var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++)a += b[c]; return a / b.length; } }); Object.assign(Mg.prototype, {
      accumulate(a, b) {
        const c = this.buffer; const d = this.valueSize; a = a * d + d;
        let e = this.cumulativeWeight; if (e === 0) { for (e = 0; e !== d; ++e)c[a + e] = c[e]; e = b; } else e += b, this._mixBufferRegion(c, a, 0, b / e, d); this.cumulativeWeight = e;
      },
      apply(a) { const b = this.valueSize; const c = this.buffer; a = a * b + b; let d = this.cumulativeWeight; const e = this.binding; this.cumulativeWeight = 0; d < 1 && this._mixBufferRegion(c, a, 3 * b, 1 - d, b); d = b; for (let f = b + b; d !== f; ++d) if (c[d] !== c[d + b]) { e.setValue(c, a); break; } },
      saveOriginalState() {
        const a = this.buffer; const b = this.valueSize; const c = 3 * b; this.binding.getValue(a, c); for (let d = b; d !== c; ++d) {
          a[d] = a[c + d % b];
        } this.cumulativeWeight = 0;
      },
      restoreOriginalState() { this.binding.setValue(this.buffer, 3 * this.valueSize); },
      _select(a, b, c, d, e) { if (d >= 0.5) for (d = 0; d !== e; ++d)a[b + d] = a[c + d]; },
      _slerp(a, b, c, d) { Da.slerpFlat(a, b, a, b, a, c, d); },
      _lerp(a, b, c, d, e) { for (let f = 1 - d, g = 0; g !== e; ++g) { const h = b + g; a[h] = a[h] * f + a[c + g] * d; } },
    }); const dl = /[\[\]\.:\/]/g; const el = `[^${'\\[\\]\\.:\\/'.replace('\\.', '')}]`; const fl = /((?:WC+[\/:])*)/.source.replace('WC', '[^\\[\\]\\.:\\/]'); const gl = /(WCOD+)?/.source.replace('WCOD', el);
    const hl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace('WC', '[^\\[\\]\\.:\\/]'); const il = /\.(WC+)(?:\[(.+)\])?/.source.replace('WC', '[^\\[\\]\\.:\\/]'); const jl = new RegExp(`^${fl}${gl}${hl}${il}$`); const kl = ['material', 'materials', 'bones']; Object.assign(ji.prototype, {
      getValue(a, b) { this.bind(); const c = this._bindings[this._targetGroup.nCachedObjects_]; void 0 !== c && c.getValue(a, b); },
      setValue(a, b) { for (let c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d)c[d].setValue(a, b); },
      bind() {
        for (let a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)a[b].bind();
      },
      unbind() { for (let a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)a[b].unbind(); },
    }); Object.assign(Ba, {
      Composite: ji,
      create(a, b, c) { return a && a.isAnimationObjectGroup ? new Ba.Composite(a, b, c) : new Ba(a, b, c); },
      sanitizeNodeName(a) { return a.replace(/\s/g, '_').replace(dl, ''); },
      parseTrackName(a) {
        let b = jl.exec(a); if (!b) {
          throw Error(`PropertyBinding: Cannot parse trackName: ${
            a}`);
        } b = {
          nodeName: b[2], objectName: b[3], objectIndex: b[4], propertyName: b[5], propertyIndex: b[6],
        }; const c = b.nodeName && b.nodeName.lastIndexOf('.'); if (void 0 !== c && c !== -1) { const d = b.nodeName.substring(c + 1); kl.indexOf(d) !== -1 && (b.nodeName = b.nodeName.substring(0, c), b.objectName = d); } if (b.propertyName === null || b.propertyName.length === 0) throw Error(`PropertyBinding: can not parse propertyName from trackName: ${a}`); return b;
      },
      findNode(a, b) {
        if (!b || b === '' || b === 'root' || b === '.' || b === -1 || b === a.name || b === a.uuid) return a;
        if (a.skeleton) { const c = a.skeleton.getBoneByName(b); if (void 0 !== c) return c; } if (a.children) { var d = function (a) { for (let c = 0; c < a.length; c++) { let e = a[c]; if (e.name === b || e.uuid === b || (e = d(e.children))) return e; } return null; }; if (a = d(a.children)) return a; } return null;
      },
    }); Object.assign(Ba.prototype, {
      _getValue_unavailable() {},
      _setValue_unavailable() {},
      BindingType: {
        Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3,
      },
      Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
      GetterByBindingType: [function (
        a,
        b,
      ) { a[b] = this.node[this.propertyName]; }, function (a, b) { for (let c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)a[b++] = c[d]; }, function (a, b) { a[b] = this.resolvedProperty[this.propertyIndex]; }, function (a, b) { this.resolvedProperty.toArray(a, b); }],
      SetterByBindingTypeAndVersioning: [[function (a, b) { this.targetObject[this.propertyName] = a[b]; }, function (a, b) { this.targetObject[this.propertyName] = a[b]; this.targetObject.needsUpdate = !0; }, function (a, b) {
        this.targetObject[this.propertyName] = a[b]; this.targetObject.matrixWorldNeedsUpdate = !0;
      }], [function (a, b) { for (let c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++]; }, function (a, b) { for (let c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++]; this.targetObject.needsUpdate = !0; }, function (a, b) { for (let c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++]; this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (a, b) { this.resolvedProperty[this.propertyIndex] = a[b]; }, function (a, b) { this.resolvedProperty[this.propertyIndex] = a[b]; this.targetObject.needsUpdate = !0; }, function (
        a,
        b,
      ) { this.resolvedProperty[this.propertyIndex] = a[b]; this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (a, b) { this.resolvedProperty.fromArray(a, b); }, function (a, b) { this.resolvedProperty.fromArray(a, b); this.targetObject.needsUpdate = !0; }, function (a, b) { this.resolvedProperty.fromArray(a, b); this.targetObject.matrixWorldNeedsUpdate = !0; }]],
      getValue(a, b) { this.bind(); this.getValue(a, b); },
      setValue(a, b) { this.bind(); this.setValue(a, b); },
      bind() {
        let a = this.node; let b = this.parsedPath; let c = b.objectName;
        const d = b.propertyName; let e = b.propertyIndex; a || (this.node = a = Ba.findNode(this.rootNode, b.nodeName) || this.rootNode); this.getValue = this._getValue_unavailable; this.setValue = this._setValue_unavailable; if (a) {
          if (c) {
            var f = b.objectIndex; switch (c) {
              case 'materials': if (!a.material) { console.error('THREE.PropertyBinding: Can not bind to material as node does not have a material.', this); return; } if (!a.material.materials) {
                console.error(
                  'THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.',
                  this,
                ); return;
              }a = a.material.materials; break; case 'bones': if (!a.skeleton) { console.error('THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.', this); return; }a = a.skeleton.bones; for (c = 0; c < a.length; c++) if (a[c].name === f) { f = c; break; } break; default: if (void 0 === a[c]) { console.error('THREE.PropertyBinding: Can not bind to objectName of node undefined.', this); return; }a = a[c];
            } if (void 0 !== f) {
              if (void 0 === a[f]) {
                console.error(
                  'THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.',
                  this,
                  a,
                ); return;
              }a = a[f];
            }
          }f = a[d]; if (void 0 === f)console.error(`THREE.PropertyBinding: Trying to update property for track: ${b.nodeName}.${d} but it wasn't found.`, a); else {
            b = this.Versioning.None; this.targetObject = a; void 0 !== a.needsUpdate ? b = this.Versioning.NeedsUpdate : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate); c = this.BindingType.Direct; if (void 0 !== e) {
              if (d === 'morphTargetInfluences') {
                if (!a.geometry) {
                  console.error(
                    'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.',
                    this,
                  ); return;
                } if (a.geometry.isBufferGeometry) { if (!a.geometry.morphAttributes) { console.error('THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.', this); return; } for (c = 0; c < this.node.geometry.morphAttributes.position.length; c++) if (a.geometry.morphAttributes.position[c].name === e) { e = c; break; } } else {
                  if (!a.geometry.morphTargets) {
                    console.error(
                      'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.',
                      this,
                    ); return;
                  } for (c = 0; c < this.node.geometry.morphTargets.length; c++) if (a.geometry.morphTargets[c].name === e) { e = c; break; }
                }
              }c = this.BindingType.ArrayElement; this.resolvedProperty = f; this.propertyIndex = e;
            } else void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = f) : Array.isArray(f) ? (c = this.BindingType.EntireArray, this.resolvedProperty = f) : this.propertyName = d; this.getValue = this.GetterByBindingType[c]; this.setValue = this.SetterByBindingTypeAndVersioning[c][b];
          }
        } else {
          console.error(`THREE.PropertyBinding: Trying to update node for track: ${
            this.path} but it wasn't found.`);
        }
      },
      unbind() { this.node = null; this.getValue = this._getValue_unbound; this.setValue = this._setValue_unbound; },
    }); Object.assign(Ba.prototype, { _getValue_unbound: Ba.prototype.getValue, _setValue_unbound: Ba.prototype.setValue }); Object.assign(ki.prototype, {
      isAnimationObjectGroup: !0,
      add() {
        for (var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._paths, f = this._parsedPaths, g = this._bindings, h = g.length, l = void 0, m = 0, n = arguments.length; m
!== n; ++m) { const p = arguments[m]; let q = p.uuid; let t = d[q]; if (void 0 === t) { t = b++; d[q] = t; a.push(p); q = 0; for (var r = h; q !== r; ++q)g[q].push(new Ba(p, e[q], f[q])); } else if (t < c) { l = a[t]; const u = --c; r = a[u]; d[r.uuid] = t; a[t] = r; d[q] = u; a[u] = p; q = 0; for (r = h; q !== r; ++q) { const x = g[q]; let w = x[t]; x[t] = x[u]; void 0 === w && (w = new Ba(p, e[q], f[q])); x[u] = w; } } else a[t] !== l && console.error('THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.'); } this.nCachedObjects_ = c;
      },
      remove() { for (var a = this._objects, b = this.nCachedObjects_, c = this._indicesByUUID, d = this._bindings, e = d.length, f = 0, g = arguments.length; f !== g; ++f) { let h = arguments[f]; let l = h.uuid; const m = c[l]; if (void 0 !== m && m >= b) { const n = b++; let p = a[n]; c[p.uuid] = m; a[m] = p; c[l] = n; a[n] = h; h = 0; for (l = e; h !== l; ++h) { p = d[h]; const q = p[m]; p[m] = p[n]; p[n] = q; } } } this.nCachedObjects_ = b; },
      uncache() {
        for (var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
          let l = arguments[g].uuid; const m = d[l]; if (void 0 !== m) if (delete d[l], m < c) { l = --c; var n = a[l]; var p = --b; var q = a[p]; d[n.uuid] = m; a[m] = n; d[q.uuid] = l; a[l] = q; a.pop(); n = 0; for (q = f; n !== q; ++n) { var t = e[n]; const r = t[p]; t[m] = t[l]; t[l] = r; t.pop(); } } else for (p = --b, q = a[p], d[q.uuid] = m, a[m] = q, a.pop(), n = 0, q = f; n !== q; ++n)t = e[n], t[m] = t[p], t.pop();
        } this.nCachedObjects_ = c;
      },
      subscribe_(a, b) {
        let c = this._bindingsIndicesByPath; let d = c[a]; const e = this._bindings; if (void 0 !== d) return e[d]; const f = this._paths; const g = this._parsedPaths; const h = this._objects; const l = this.nCachedObjects_;
        const m = Array(h.length); d = e.length; c[a] = d; f.push(a); g.push(b); e.push(m); c = l; for (d = h.length; c !== d; ++c)m[c] = new Ba(h[c], a, b); return m;
      },
      unsubscribe_(a) { const b = this._bindingsIndicesByPath; const c = b[a]; if (void 0 !== c) { const d = this._paths; const e = this._parsedPaths; const f = this._bindings; const g = f.length - 1; const h = f[g]; b[a[g]] = c; f[c] = h; f.pop(); e[c] = e[g]; e.pop(); d[c] = d[g]; d.pop(); } },
    }); Object.assign(li.prototype, {
      play() { this._mixer._activateAction(this); return this; },
      stop() { this._mixer._deactivateAction(this); return this.reset(); },
      reset() { this.paused = !1; this.enabled = !0; this.time = 0; this._loopCount = -1; this._startTime = null; return this.stopFading().stopWarping(); },
      isRunning() { return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this); },
      isScheduled() { return this._mixer._isActiveAction(this); },
      startAt(a) { this._startTime = a; return this; },
      setLoop(a, b) { this.loop = a; this.repetitions = b; return this; },
      setEffectiveWeight(a) {
        this.weight = a;
        this._effectiveWeight = this.enabled ? a : 0; return this.stopFading();
      },
      getEffectiveWeight() { return this._effectiveWeight; },
      fadeIn(a) { return this._scheduleFading(a, 0, 1); },
      fadeOut(a) { return this._scheduleFading(a, 1, 0); },
      crossFadeFrom(a, b, c) { a.fadeOut(b); this.fadeIn(b); if (c) { c = this._clip.duration; const d = a._clip.duration; const e = c / d; a.warp(1, d / c, b); this.warp(e, 1, b); } return this; },
      crossFadeTo(a, b, c) { return a.crossFadeFrom(this, b, c); },
      stopFading() {
        const a = this._weightInterpolant;
        a !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(a)); return this;
      },
      setEffectiveTimeScale(a) { this.timeScale = a; this._effectiveTimeScale = this.paused ? 0 : a; return this.stopWarping(); },
      getEffectiveTimeScale() { return this._effectiveTimeScale; },
      setDuration(a) { this.timeScale = this._clip.duration / a; return this.stopWarping(); },
      syncWith(a) { this.time = a.time; this.timeScale = a.timeScale; return this.stopWarping(); },
      halt(a) {
        return this.warp(
          this._effectiveTimeScale,
          0,
          a,
        );
      },
      warp(a, b, c) { let d = this._mixer; const e = d.time; let f = this._timeScaleInterpolant; const g = this.timeScale; f === null && (this._timeScaleInterpolant = f = d._lendControlInterpolant()); d = f.parameterPositions; f = f.sampleValues; d[0] = e; d[1] = e + c; f[0] = a / g; f[1] = b / g; return this; },
      stopWarping() { const a = this._timeScaleInterpolant; a !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(a)); return this; },
      getMixer() { return this._mixer; },
      getClip() { return this._clip; },
      getRoot() {
        return this._localRoot
|| this._mixer._root;
      },
      _update(a, b, c, d) { if (this.enabled) { let e = this._startTime; if (e !== null) { b = (a - e) * c; if (b < 0 || c === 0) return; this._startTime = null; b *= c; }b *= this._updateTimeScale(a); c = this._updateTime(b); a = this._updateWeight(a); if (a > 0) { b = this._interpolants; e = this._propertyBindings; for (let f = 0, g = b.length; f !== g; ++f)b[f].evaluate(c), e[f].accumulate(d, a); } } else this._updateWeight(a); },
      _updateWeight(a) {
        let b = 0; if (this.enabled) {
          b = this.weight; const c = this._weightInterpolant; if (c !== null) {
            const d = c.evaluate(a)[0];
            b *= d; a > c.parameterPositions[1] && (this.stopFading(), d === 0 && (this.enabled = !1));
          }
        } return this._effectiveWeight = b;
      },
      _updateTimeScale(a) { let b = 0; if (!this.paused) { b = this.timeScale; const c = this._timeScaleInterpolant; if (c !== null) { const d = c.evaluate(a)[0]; b *= d; a > c.parameterPositions[1] && (this.stopWarping(), b === 0 ? this.paused = !0 : this.timeScale = b); } } return this._effectiveTimeScale = b; },
      _updateTime(a) {
        let b = this.time + a; const c = this._clip.duration; let d = this.loop; let e = this._loopCount; const f = d === 2202; if (a === 0) {
          return e
=== -1 ? b : f && (e & 1) === 1 ? c - b : b;
        } if (d === 2200)a: { if (e === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1)), b >= c)b = c; else if (b < 0)b = 0; else { this.time = b; break a; } this.clampWhenFinished ? this.paused = !0 : this.enabled = !1; this.time = b; this._mixer.dispatchEvent({ type: 'finished', action: this, direction: a < 0 ? -1 : 1 }); } else {
          e === -1 && (a >= 0 ? (e = 0, this._setEndings(!0, this.repetitions === 0, f)) : this._setEndings(this.repetitions === 0, !0, f)); if (b >= c || b < 0) {
            d = Math.floor(b / c); b -= c * d; e += Math.abs(d); const g = this.repetitions - e; g <= 0 ? (this.clampWhenFinished
              ? this.paused = !0 : this.enabled = !1, this.time = b = a > 0 ? c : 0, this._mixer.dispatchEvent({ type: 'finished', action: this, direction: a > 0 ? 1 : -1 })) : (g === 1 ? (a = a < 0, this._setEndings(a, !a, f)) : this._setEndings(!1, !1, f), this._loopCount = e, this.time = b, this._mixer.dispatchEvent({ type: 'loop', action: this, loopDelta: d }));
          } else this.time = b; if (f && (e & 1) === 1) return c - b;
        } return b;
      },
      _setEndings(a, b, c) {
        const d = this._interpolantSettings; c ? (d.endingStart = 2401, d.endingEnd = 2401) : (d.endingStart = a ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, d.endingEnd = b ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402);
      },
      _scheduleFading(a, b, c) { let d = this._mixer; const e = d.time; let f = this._weightInterpolant; f === null && (this._weightInterpolant = f = d._lendControlInterpolant()); d = f.parameterPositions; f = f.sampleValues; d[0] = e; f[0] = b; d[1] = e + a; f[1] = c; return this; },
    }); Ng.prototype = Object.assign(Object.create(Fa.prototype), {
      constructor: Ng,
      _bindAction(a, b) {
        const c = a._localRoot || this._root; const d = a._clip.tracks; const e = d.length; const f = a._propertyBindings; a = a._interpolants; const g = c.uuid; let h = this._bindingsByRootAndName;
        let l = h[g]; void 0 === l && (l = {}, h[g] = l); for (h = 0; h !== e; ++h) { const m = d[h]; const n = m.name; let p = l[n]; if (void 0 === p) { p = f[h]; if (void 0 !== p) { p._cacheIndex === null && (++p.referenceCount, this._addInactiveBinding(p, g, n)); continue; }p = new Mg(Ba.create(c, n, b && b._propertyBindings[h].binding.parsedPath), m.ValueTypeName, m.getValueSize()); ++p.referenceCount; this._addInactiveBinding(p, g, n); }f[h] = p; a[h].resultBuffer = p.buffer; }
      },
      _activateAction(a) {
        if (!this._isActiveAction(a)) {
          if (a._cacheIndex === null) {
            var b = (a._localRoot || this._root).uuid;
            var c = a._clip.uuid; var d = this._actionsByClip[c]; this._bindAction(a, d && d.knownActions[0]); this._addInactiveAction(a, c, b);
          }b = a._propertyBindings; c = 0; for (d = b.length; c !== d; ++c) { const e = b[c]; e.useCount++ === 0 && (this._lendBinding(e), e.saveOriginalState()); } this._lendAction(a);
        }
      },
      _deactivateAction(a) { if (this._isActiveAction(a)) { for (let b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) { const e = b[c]; --e.useCount === 0 && (e.restoreOriginalState(), this._takeBackBinding(e)); } this._takeBackAction(a); } },
      _initMemoryManager() {
        this._actions = []; this._nActiveActions = 0; this._actionsByClip = {}; this._bindings = []; this._nActiveBindings = 0; this._bindingsByRootAndName = {}; this._controlInterpolants = []; this._nActiveControlInterpolants = 0; const a = this; this.stats = { actions: { get total() { return a._actions.length; }, get inUse() { return a._nActiveActions; } }, bindings: { get total() { return a._bindings.length; }, get inUse() { return a._nActiveBindings; } }, controlInterpolants: { get total() { return a._controlInterpolants.length; }, get inUse() { return a._nActiveControlInterpolants; } } };
      },
      _isActiveAction(a) { a = a._cacheIndex; return a !== null && a < this._nActiveActions; },
      _addInactiveAction(a, b, c) { const d = this._actions; const e = this._actionsByClip; let f = e[b]; void 0 === f ? (f = { knownActions: [a], actionByRoot: {} }, a._byClipCacheIndex = 0, e[b] = f) : (b = f.knownActions, a._byClipCacheIndex = b.length, b.push(a)); a._cacheIndex = d.length; d.push(a); f.actionByRoot[c] = a; },
      _removeInactiveAction(a) {
        let b = this._actions; let c = b[b.length - 1]; let d = a._cacheIndex; c._cacheIndex = d; b[d] = c; b.pop(); a._cacheIndex = null; b = a._clip.uuid;
        c = this._actionsByClip; d = c[b]; const e = d.knownActions; const f = e[e.length - 1]; const g = a._byClipCacheIndex; f._byClipCacheIndex = g; e[g] = f; e.pop(); a._byClipCacheIndex = null; delete d.actionByRoot[(a._localRoot || this._root).uuid]; e.length === 0 && delete c[b]; this._removeInactiveBindingsForAction(a);
      },
      _removeInactiveBindingsForAction(a) { a = a._propertyBindings; for (let b = 0, c = a.length; b !== c; ++b) { const d = a[b]; --d.referenceCount === 0 && this._removeInactiveBinding(d); } },
      _lendAction(a) {
        const b = this._actions; const c = a._cacheIndex;
        const d = this._nActiveActions++; const e = b[d]; a._cacheIndex = d; b[d] = a; e._cacheIndex = c; b[c] = e;
      },
      _takeBackAction(a) { const b = this._actions; const c = a._cacheIndex; const d = --this._nActiveActions; const e = b[d]; a._cacheIndex = d; b[d] = a; e._cacheIndex = c; b[c] = e; },
      _addInactiveBinding(a, b, c) { const d = this._bindingsByRootAndName; let e = d[b]; const f = this._bindings; void 0 === e && (e = {}, d[b] = e); e[c] = a; a._cacheIndex = f.length; f.push(a); },
      _removeInactiveBinding(a) {
        const b = this._bindings; let c = a.binding; const d = c.rootNode.uuid; c = c.path; const e = this._bindingsByRootAndName;
        const f = e[d]; const g = b[b.length - 1]; a = a._cacheIndex; g._cacheIndex = a; b[a] = g; b.pop(); delete f[c]; Object.keys(f).length === 0 && delete e[d];
      },
      _lendBinding(a) { const b = this._bindings; const c = a._cacheIndex; const d = this._nActiveBindings++; const e = b[d]; a._cacheIndex = d; b[d] = a; e._cacheIndex = c; b[c] = e; },
      _takeBackBinding(a) { const b = this._bindings; const c = a._cacheIndex; const d = --this._nActiveBindings; const e = b[d]; a._cacheIndex = d; b[d] = a; e._cacheIndex = c; b[c] = e; },
      _lendControlInterpolant() {
        const a = this._controlInterpolants; const b = this._nActiveControlInterpolants++;
        let c = a[b]; void 0 === c && (c = new pe(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), c.__cacheIndex = b, a[b] = c); return c;
      },
      _takeBackControlInterpolant(a) { const b = this._controlInterpolants; const c = a.__cacheIndex; const d = --this._nActiveControlInterpolants; const e = b[d]; a.__cacheIndex = d; b[d] = a; e.__cacheIndex = c; b[c] = e; },
      _controlInterpolantsResultBuffer: new Float32Array(1),
      clipAction(a, b) {
        let c = b || this._root; const d = c.uuid; c = typeof a === 'string' ? Qa.findByName(c, a) : a; a = c !== null ? c.uuid : a; const e = this._actionsByClip[a]; let f = null; if (void 0 !== e) { f = e.actionByRoot[d]; if (void 0 !== f) return f; f = e.knownActions[0]; c === null && (c = f._clip); } if (c === null) return null; b = new li(this, c, b); this._bindAction(b, f); this._addInactiveAction(b, a, d); return b;
      },
      existingAction(a, b) { let c = b || this._root; b = c.uuid; c = typeof a === 'string' ? Qa.findByName(c, a) : a; a = this._actionsByClip[c ? c.uuid : a]; return void 0 !== a ? a.actionByRoot[b] || null : null; },
      stopAllAction() {
        for (var a = this._actions, b = this._nActiveActions, c = this._bindings,
          d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e)a[e].reset(); for (e = 0; e !== d; ++e)c[e].useCount = 0; return this;
      },
      update(a) { a *= this.timeScale; for (var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g)b[g]._update(d, a, e, f); a = this._bindings; b = this._nActiveBindings; for (g = 0; g !== b; ++g)a[g].apply(f); return this; },
      setTime(a) { for (let b = this.time = 0; b < this._actions.length; b++) this._actions[b].time = 0; return this.update(a); },
      getRoot() { return this._root; },
      uncacheClip(a) { const b = this._actions; a = a.uuid; const c = this._actionsByClip; let d = c[a]; if (void 0 !== d) { d = d.knownActions; for (let e = 0, f = d.length; e !== f; ++e) { const g = d[e]; this._deactivateAction(g); const h = g._cacheIndex; const l = b[b.length - 1]; g._cacheIndex = null; g._byClipCacheIndex = null; l._cacheIndex = h; b[h] = l; b.pop(); this._removeInactiveBindingsForAction(g); } delete c[a]; } },
      uncacheRoot(a) {
        a = a.uuid; const b = this._actionsByClip; for (d in b) {
          const c = b[d].actionByRoot[a]; void 0 !== c
&& (this._deactivateAction(c), this._removeInactiveAction(c));
        } var d = this._bindingsByRootAndName[a]; if (void 0 !== d) for (const e in d)a = d[e], a.restoreOriginalState(), this._removeInactiveBinding(a);
      },
      uncacheAction(a, b) { a = this.existingAction(a, b); a !== null && (this._deactivateAction(a), this._removeInactiveAction(a)); },
    }); uf.prototype.clone = function () { return new uf(void 0 === this.value.clone ? this.value : this.value.clone()); }; Og.prototype = Object.assign(Object.create(sb.prototype), {
      constructor: Og,
      isInstancedInterleavedBuffer: !0,
      copy(a) { sb.prototype.copy.call(this, a); this.meshPerAttribute = a.meshPerAttribute; return this; },
    }); Object.assign(mi.prototype, {
      linePrecision: 1,
      set(a, b) { this.ray.set(a, b); },
      setFromCamera(a, b) {
        b && b.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld), this.ray.direction.set(a.x, a.y, 0.5).unproject(b).sub(this.ray.origin).normalize(), this.camera = b) : b && b.isOrthographicCamera ? (this.ray.origin.set(a.x, a.y, (b.near + b.far) / (b.near - b.far)).unproject(b), this.ray.direction.set(
          0,
          0,
          -1,
        ).transformDirection(b.matrixWorld), this.camera = b) : console.error('THREE.Raycaster: Unsupported camera type.');
      },
      intersectObject(a, b, c) { c = c || []; Pg(a, this, c, b); c.sort(ni); return c; },
      intersectObjects(a, b, c) { c = c || []; if (!1 === Array.isArray(a)) return console.warn('THREE.Raycaster.intersectObjects: objects is not an Array.'), c; for (let d = 0, e = a.length; d < e; d++)Pg(a[d], this, c, b); c.sort(ni); return c; },
    }); Object.assign(oi.prototype, {
      set(a, b, c) { this.radius = a; this.phi = b; this.theta = c; return this; },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) { this.radius = a.radius; this.phi = a.phi; this.theta = a.theta; return this; },
      makeSafe() { this.phi = Math.max(1E-6, Math.min(Math.PI - 1E-6, this.phi)); return this; },
      setFromVector3(a) { return this.setFromCartesianCoords(a.x, a.y, a.z); },
      setFromCartesianCoords(a, b, c) { this.radius = Math.sqrt(a * a + b * b + c * c); this.radius === 0 ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a, c), this.phi = Math.acos(O.clamp(b / this.radius, -1, 1))); return this; },
    });
    Object.assign(pi.prototype, {
      set(a, b, c) { this.radius = a; this.theta = b; this.y = c; return this; }, clone() { return (new this.constructor()).copy(this); }, copy(a) { this.radius = a.radius; this.theta = a.theta; this.y = a.y; return this; }, setFromVector3(a) { return this.setFromCartesianCoords(a.x, a.y, a.z); }, setFromCartesianCoords(a, b, c) { this.radius = Math.sqrt(a * a + c * c); this.theta = Math.atan2(a, c); this.y = b; return this; },
    }); const dj = new x(); Object.assign(Qg.prototype, {
      set(a, b) {
        this.min.copy(a);
        this.max.copy(b); return this;
      },
      setFromPoints(a) { this.makeEmpty(); for (let b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]); return this; },
      setFromCenterAndSize(a, b) { b = dj.copy(b).multiplyScalar(0.5); this.min.copy(a).sub(b); this.max.copy(a).add(b); return this; },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) { this.min.copy(a.min); this.max.copy(a.max); return this; },
      makeEmpty() { this.min.x = this.min.y = Infinity; this.max.x = this.max.y = -Infinity; return this; },
      isEmpty() {
        return this.max.x
< this.min.x || this.max.y < this.min.y;
      },
      getCenter(a) { void 0 === a && (console.warn('THREE.Box2: .getCenter() target is now required'), a = new x()); return this.isEmpty() ? a.set(0, 0) : a.addVectors(this.min, this.max).multiplyScalar(0.5); },
      getSize(a) { void 0 === a && (console.warn('THREE.Box2: .getSize() target is now required'), a = new x()); return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min); },
      expandByPoint(a) { this.min.min(a); this.max.max(a); return this; },
      expandByVector(a) {
        this.min.sub(a);
        this.max.add(a); return this;
      },
      expandByScalar(a) { this.min.addScalar(-a); this.max.addScalar(a); return this; },
      containsPoint(a) { return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0; },
      containsBox(a) { return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y; },
      getParameter(a, b) {
        void 0 === b && (console.warn('THREE.Box2: .getParameter() target is now required'), b = new x()); return b.set(
          (a.x - this.min.x) / (this.max.x - this.min.x),
          (a.y - this.min.y) / (this.max.y - this.min.y),
        );
      },
      intersectsBox(a) { return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0; },
      clampPoint(a, b) { void 0 === b && (console.warn('THREE.Box2: .clampPoint() target is now required'), b = new x()); return b.copy(a).clamp(this.min, this.max); },
      distanceToPoint(a) { return dj.copy(a).clamp(this.min, this.max).sub(a).length(); },
      intersect(a) { this.min.max(a.min); this.max.min(a.max); return this; },
      union(a) {
        this.min.min(a.min);
        this.max.max(a.max); return this;
      },
      translate(a) { this.min.add(a); this.max.add(a); return this; },
      equals(a) { return a.min.equals(this.min) && a.max.equals(this.max); },
    }); const ej = new n(); const
      Vf = new n(); Object.assign(Rg.prototype, {
      set(a, b) { this.start.copy(a); this.end.copy(b); return this; },
      clone() { return (new this.constructor()).copy(this); },
      copy(a) { this.start.copy(a.start); this.end.copy(a.end); return this; },
      getCenter(a) {
        void 0 === a && (console.warn('THREE.Line3: .getCenter() target is now required'),
        a = new n()); return a.addVectors(this.start, this.end).multiplyScalar(0.5);
      },
      delta(a) { void 0 === a && (console.warn('THREE.Line3: .delta() target is now required'), a = new n()); return a.subVectors(this.end, this.start); },
      distanceSq() { return this.start.distanceToSquared(this.end); },
      distance() { return this.start.distanceTo(this.end); },
      at(a, b) { void 0 === b && (console.warn('THREE.Line3: .at() target is now required'), b = new n()); return this.delta(b).multiplyScalar(a).add(this.start); },
      closestPointToPointParameter(
        a,
        b,
      ) { ej.subVectors(a, this.start); Vf.subVectors(this.end, this.start); a = Vf.dot(Vf); a = Vf.dot(ej) / a; b && (a = O.clamp(a, 0, 1)); return a; },
      closestPointToPoint(a, b, c) { a = this.closestPointToPointParameter(a, b); void 0 === c && (console.warn('THREE.Line3: .closestPointToPoint() target is now required'), c = new n()); return this.delta(c).multiplyScalar(a).add(this.start); },
      applyMatrix4(a) { this.start.applyMatrix4(a); this.end.applyMatrix4(a); return this; },
      equals(a) { return a.start.equals(this.start) && a.end.equals(this.end); },
    });
    te.prototype = Object.create(D.prototype); te.prototype.constructor = te; te.prototype.isImmediateRenderObject = !0; const fj = new n(); id.prototype = Object.create(D.prototype); id.prototype.constructor = id; id.prototype.dispose = function () { this.cone.geometry.dispose(); this.cone.material.dispose(); }; id.prototype.update = function () {
      this.light.updateMatrixWorld(); const a = this.light.distance ? this.light.distance : 1E3; const b = a * Math.tan(this.light.angle); this.cone.scale.set(b, b, a); fj.setFromMatrixPosition(this.light.target.matrixWorld);
      this.cone.lookAt(fj); void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
    }; const Rb = new n(); const Wf = new P(); const
      th = new P(); jd.prototype = Object.create(la.prototype); jd.prototype.constructor = jd; jd.prototype.updateMatrixWorld = function (a) {
      const b = this.bones; const c = this.geometry; const d = c.getAttribute('position'); th.getInverse(this.root.matrixWorld); for (let e = 0, f = 0; e < b.length; e++) {
        const g = b[e]; g.parent && g.parent.isBone && (Wf.multiplyMatrices(th, g.matrixWorld), Rb.setFromMatrixPosition(Wf),
        d.setXYZ(f, Rb.x, Rb.y, Rb.z), Wf.multiplyMatrices(th, g.parent.matrixWorld), Rb.setFromMatrixPosition(Wf), d.setXYZ(f + 1, Rb.x, Rb.y, Rb.z), f += 2);
      }c.getAttribute('position').needsUpdate = !0; D.prototype.updateMatrixWorld.call(this, a);
    }; kd.prototype = Object.create(ca.prototype); kd.prototype.constructor = kd; kd.prototype.dispose = function () { this.geometry.dispose(); this.material.dispose(); }; kd.prototype.update = function () { void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color); };
    const ll = new n(); const gj = new y(); const
      hj = new y(); ld.prototype = Object.create(D.prototype); ld.prototype.constructor = ld; ld.prototype.dispose = function () { this.children[0].geometry.dispose(); this.children[0].material.dispose(); }; ld.prototype.update = function () {
      const a = this.children[0]; if (void 0 !== this.color) this.material.color.set(this.color); else {
        const b = a.geometry.getAttribute('color'); gj.copy(this.light.color); hj.copy(this.light.groundColor); for (let c = 0, d = b.count; c < d; c++) { const e = c < d / 2 ? gj : hj; b.setXYZ(c, e.r, e.g, e.b); }b.needsUpdate = !0;
      }a.lookAt(ll.setFromMatrixPosition(this.light.matrixWorld).negate());
    }; vf.prototype = Object.assign(Object.create(la.prototype), { constructor: vf, copy(a) { la.prototype.copy.call(this, a); this.geometry.copy(a.geometry); this.material.copy(a.material); return this; }, clone() { return (new this.constructor()).copy(this); } }); wf.prototype = Object.create(la.prototype); wf.prototype.constructor = wf; const ij = new n(); const Xf = new n(); const
      jj = new n(); md.prototype = Object.create(D.prototype); md.prototype.constructor = md; md.prototype.dispose = function () { this.lightPlane.geometry.dispose(); this.lightPlane.material.dispose(); this.targetLine.geometry.dispose(); this.targetLine.material.dispose(); }; md.prototype.update = function () {
      ij.setFromMatrixPosition(this.light.matrixWorld); Xf.setFromMatrixPosition(this.light.target.matrixWorld); jj.subVectors(Xf, ij); this.lightPlane.lookAt(Xf); void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color),
      this.targetLine.material.color.copy(this.light.color)); this.targetLine.lookAt(Xf); this.targetLine.scale.z = jj.length();
    }; var xf = new n(); const
      fa = new db(); ue.prototype = Object.create(la.prototype); ue.prototype.constructor = ue; ue.prototype.update = function () {
      const a = this.geometry; const b = this.pointMap; fa.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse); ia('c', b, a, fa, 0, 0, -1); ia('t', b, a, fa, 0, 0, 1); ia('n1', b, a, fa, -1, -1, -1); ia('n2', b, a, fa, 1, -1, -1); ia('n3', b, a, fa, -1, 1, -1); ia('n4', b, a, fa, 1, 1, -1); ia(
        'f1',
        b,
        a,
        fa,
        -1,
        -1,
        1,
      ); ia('f2', b, a, fa, 1, -1, 1); ia('f3', b, a, fa, -1, 1, 1); ia('f4', b, a, fa, 1, 1, 1); ia('u1', b, a, fa, 0.7, 1.1, -1); ia('u2', b, a, fa, -0.7, 1.1, -1); ia('u3', b, a, fa, 0, 2, -1); ia('cf1', b, a, fa, -1, 0, 1); ia('cf2', b, a, fa, 1, 0, 1); ia('cf3', b, a, fa, 0, -1, 1); ia('cf4', b, a, fa, 0, 1, 1); ia('cn1', b, a, fa, -1, 0, -1); ia('cn2', b, a, fa, 1, 0, -1); ia('cn3', b, a, fa, 0, -1, -1); ia('cn4', b, a, fa, 0, 1, -1); a.getAttribute('position').needsUpdate = !0;
    }; const Yf = new Sa(); xb.prototype = Object.create(la.prototype); xb.prototype.constructor = xb; xb.prototype.update = function (a) {
      void 0
!== a && console.warn('THREE.BoxHelper: .update() has no longer arguments.'); void 0 !== this.object && Yf.setFromObject(this.object); if (!Yf.isEmpty()) { a = Yf.min; const b = Yf.max; const c = this.geometry.attributes.position; const d = c.array; d[0] = b.x; d[1] = b.y; d[2] = b.z; d[3] = a.x; d[4] = b.y; d[5] = b.z; d[6] = a.x; d[7] = a.y; d[8] = b.z; d[9] = b.x; d[10] = a.y; d[11] = b.z; d[12] = b.x; d[13] = b.y; d[14] = a.z; d[15] = a.x; d[16] = b.y; d[17] = a.z; d[18] = a.x; d[19] = a.y; d[20] = a.z; d[21] = b.x; d[22] = a.y; d[23] = a.z; c.needsUpdate = !0; this.geometry.computeBoundingSphere(); }
    }; xb.prototype.setFromObject = function (a) { this.object = a; this.update(); return this; }; xb.prototype.copy = function (a) { la.prototype.copy.call(this, a); this.object = a.object; return this; }; xb.prototype.clone = function () { return (new this.constructor()).copy(this); }; ve.prototype = Object.create(la.prototype); ve.prototype.constructor = ve; ve.prototype.updateMatrixWorld = function (a) { const b = this.box; b.isEmpty() || (b.getCenter(this.position), b.getSize(this.scale), this.scale.multiplyScalar(0.5), D.prototype.updateMatrixWorld.call(this, a)); }; we.prototype = Object.create(Ja.prototype);
    we.prototype.constructor = we; we.prototype.updateMatrixWorld = function (a) { let b = -this.plane.constant; Math.abs(b) < 1E-8 && (b = 1E-8); this.scale.set(0.5 * this.size, 0.5 * this.size, b); this.children[0].material.side = b < 0 ? 1 : 0; this.lookAt(this.plane.normal); D.prototype.updateMatrixWorld.call(this, a); }; const kj = new n(); let yf; let
      Sg; yb.prototype = Object.create(D.prototype); yb.prototype.constructor = yb; yb.prototype.setDirection = function (a) {
      a.y > 0.99999 ? this.quaternion.set(0, 0, 0, 1) : a.y < -0.99999 ? this.quaternion.set(1, 0, 0, 0) : (kj.set(
        a.z,
        0,
        -a.x,
      ).normalize(), this.quaternion.setFromAxisAngle(kj, Math.acos(a.y)));
    }; yb.prototype.setLength = function (a, b, c) { void 0 === b && (b = 0.2 * a); void 0 === c && (c = 0.2 * b); this.line.scale.set(1, Math.max(1E-4, a - b), 1); this.line.updateMatrix(); this.cone.scale.set(c, b, c); this.cone.position.y = a; this.cone.updateMatrix(); }; yb.prototype.setColor = function (a) { this.line.material.color.set(a); this.cone.material.color.set(a); }; yb.prototype.copy = function (a) {
      D.prototype.copy.call(this, a, !1); this.line.copy(a.line); this.cone.copy(a.cone);
      return this;
    }; yb.prototype.clone = function () { return (new this.constructor()).copy(this); }; xe.prototype = Object.create(la.prototype); xe.prototype.constructor = xe; var lb = 2 ** 8; const lj = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582]; var vi = 5 + lj.length; var mb = {
      3E3: 0, 3001: 1, 3002: 2, 3004: 3, 3005: 4, 3006: 5, 3007: 6,
    }; var Vg = new gd(); var zf = (function (a) {
      const b = new Float32Array(a); const c = new n(0, 1, 0); a = new vb({
        defines: { n: a },
        uniforms: {
          envMap: { value: null },
          samples: { value: 1 },
          weights: { value: b },
          latitudinal: { value: !1 },
          dTheta: { value: 0 },
          mipInt: { value: 0 },
          poleAxis: { value: c },
          inputEncoding: { value: mb[3E3] },
          outputEncoding: { value: mb[3E3] },
        },
        vertexShader: Xg(),
        fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n${Yg()}\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tfor (int i = 0; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfor (int dir = -1; dir < 2; dir += 2) {\n\t\t\tif (i == 0 && dir == 1)\n\t\t\t\tcontinue;\n\t\t\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\t\t\tif (all(equal(axis, vec3(0.0))))\n\t\t\t\taxis = cross(vec3(0.0, 1.0, 0.0), vOutputDirection);\n\t\t\taxis = normalize(axis);\n\t\t\tfloat theta = dTheta * float(dir * i);\n\t\t\tfloat cosTheta = cos(theta);\n\t\t\t// Rodrigues' axis-angle rotation\n\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t\t\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\t\t\tgl_FragColor.rgb +=\n\t\t\t\t\tweights[i] * bilinearCubeUV(envMap, sampleDirection, mipInt);\n\t\t}\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1,
      }); a.type = 'SphericalGaussianBlur'; return a;
    }(20)); let Sb = null; let Tb = null; const uh = (function () {
      for (var a = [], b = [], c = [], d = 8, e = 0; e < vi; e++) {
        let f = 2 ** d; b.push(f); let g = 1 / f; e > 4 ? g = lj[e - 8 + 4 - 1] : e == 0 && (g = 0); c.push(g); g = 1 / (f - 1); f = -g / 2; g = 1 + g / 2; let h = [f, f, g, f, g, g, f, f, g, g, f, g]; f = new Float32Array(108); g = new Float32Array(72); for (var l = new Float32Array(36), m = 0; m < 6; m++) {
          const n = m % 3 * 2 / 3 - 1; const p = m > 2 ? 0 : -1; f.set([n, p, 0, n + 2 / 3, p, 0, n + 2 / 3, p + 1, 0, n, p, 0, n + 2 / 3, p + 1, 0, n, p + 1, 0], 18 * m); g.set(h, 12 * m); l.set([m,
            m, m, m, m, m], 6 * m);
        }h = new G(); h.setAttribute('position', new K(f, 3)); h.setAttribute('uv', new K(g, 2)); h.setAttribute('faceIndex', new K(l, 1)); a.push(h); d > 4 && d--;
      } return { _lodPlanes: a, _sizeLods: b, _sigmas: c };
    }()); var ye = uh._lodPlanes; var zi = uh._sizeLods; var Bf = uh._sigmas; var Af = null; var Y = null; const Cc = (1 + Math.sqrt(5)) / 2; const zd = 1 / Cc; var xi = [new n(1, 1, 1), new n(-1, 1, 1), new n(1, 1, -1), new n(-1, 1, -1), new n(0, Cc, zd), new n(0, Cc, -zd), new n(zd, 0, Cc), new n(-zd, 0, Cc), new n(Cc, zd, 0), new n(-Cc, zd, 0)]; Tg.prototype = {
      constructor: Tg,
      fromScene(a, b, c, d) {
        void 0
=== b && (b = 0); void 0 === c && (c = 0.1); void 0 === d && (d = 100); const e = ri(); c = new pa(90, 1, c, d); d = [1, 1, 1, 1, -1, 1]; const f = [1, 1, -1, -1, -1, 1]; const g = Y.outputEncoding; const h = Y.toneMapping; const l = Y.toneMappingExposure; const m = Y.getClearColor(); const n = Y.getClearAlpha(); Y.toneMapping = 1; Y.toneMappingExposure = 1; Y.outputEncoding = 3E3; a.scale.z *= -1; let p = a.background; if (p && p.isColor) {
          p.convertSRGBToLinear(); var q = Math.min(Math.max(Math.ceil(Math.log2(Math.max(p.r, p.g, p.b))), -128), 127); p = p.multiplyScalar(2 ** -q); Y.setClearColor(p, (q + 128) / 255); a.background = null;
        }Y.setRenderTarget(e); for (p = 0; p < 6; p++)q = p % 3, q == 0 ? (c.up.set(0, d[p], 0), c.lookAt(f[p], 0, 0)) : q == 1 ? (c.up.set(0, 0, d[p]), c.lookAt(0, f[p], 0)) : (c.up.set(0, d[p], 0), c.lookAt(0, 0, f[p])), Wg(q * lb, p > 2 ? lb : 0, lb, lb), Y.render(a, c); Y.toneMapping = h; Y.toneMappingExposure = l; Y.outputEncoding = g; Y.setClearColor(m, n); a.scale.z *= -1; b > 0 && wi(e, 0, 0, b); ui(e); ti(); e.scissorTest = !1; return e;
      },
      fromEquirectangular(a) { a.magFilter = 1003; a.minFilter = 1003; a.generateMipmaps = !1; return this.fromCubemap(a); },
      fromCubemap(a) {
        const b = ri(a); const c = new pb(); a.isCubeTexture ? Tb == null && (Tb = Bi()) : Sb == null && (Sb = Ai()); let d = a.isCubeTexture ? Tb : Sb; c.add(new ca(ye[0], d)); d = d.uniforms; d.envMap.value = a; a.isCubeTexture || d.texelSize.value.set(1 / a.image.width, 1 / a.image.height); d.inputEncoding.value = mb[a.encoding]; d.outputEncoding.value = mb[a.encoding]; Y.setRenderTarget(b); Wg(0, 0, 3 * lb, 2 * lb); Y.render(c, Vg); ui(b); ti(); b.scissorTest = !1; return b;
      },
      compileCubemapShader() { Tb == null && (Tb = Bi(), Ug(Tb)); },
      compileEquirectangularShader() {
        Sb == null
&& (Sb = Ai(), Ug(Sb));
      },
      dispose() { zf.dispose(); Tb != null && Tb.dispose(); Sb != null && Sb.dispose(); for (let a = 0; a < ye.length; a++)ye[a].dispose(); },
    }; I.create = function (a, b) { console.log('THREE.Curve.create() has been deprecated'); a.prototype = Object.create(I.prototype); a.prototype.constructor = a; a.prototype.getPoint = b; return a; }; Object.assign(wb.prototype, {
      createPointsGeometry(a) {
        console.warn('THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.');
        a = this.getPoints(a); return this.createGeometry(a);
      },
      createSpacedPointsGeometry(a) { console.warn('THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'); a = this.getSpacedPoints(a); return this.createGeometry(a); },
      createGeometry(a) {
        console.warn('THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'); for (var b = new M(), c = 0, d = a.length; c < d; c++) {
          const e = a[c]; b.vertices.push(new n(
            e.x,
            e.y,
            e.z || 0,
          ));
        } return b;
      },
    }); Object.assign($a.prototype, { fromPoints(a) { console.warn('THREE.Path: .fromPoints() has been renamed to .setFromPoints().'); return this.setFromPoints(a); } }); Ci.prototype = Object.create(Aa.prototype); Di.prototype = Object.create(Aa.prototype); Zg.prototype = Object.create(Aa.prototype); Object.assign(Zg.prototype, {
      initFromArray() { console.error('THREE.Spline: .initFromArray() has been removed.'); },
      getControlPointsArray() { console.error('THREE.Spline: .getControlPointsArray() has been removed.'); },
      reparametrizeByArcLength() { console.error('THREE.Spline: .reparametrizeByArcLength() has been removed.'); },
    }); vf.prototype.setColors = function () { console.error('THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.'); }; jd.prototype.update = function () { console.error('THREE.SkeletonHelper: update() no longer needs to be called.'); }; Object.assign(Q.prototype, {
      extractUrlBase(a) {
        console.warn('THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.');
        return rh.extractUrlBase(a);
      },
    }); Q.Handlers = { add() { console.error('THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.'); }, get() { console.error('THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.'); } }; Object.assign(rf.prototype, { setTexturePath(a) { console.warn('THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().'); return this.setResourcePath(a); } }); Object.assign(Qg.prototype, {
      center(a) {
        console.warn('THREE.Box2: .center() has been renamed to .getCenter().');
        return this.getCenter(a);
      },
      empty() { console.warn('THREE.Box2: .empty() has been renamed to .isEmpty().'); return this.isEmpty(); },
      isIntersectionBox(a) { console.warn('THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().'); return this.intersectsBox(a); },
      size(a) { console.warn('THREE.Box2: .size() has been renamed to .getSize().'); return this.getSize(a); },
    }); Object.assign(Sa.prototype, {
      center(a) {
        console.warn('THREE.Box3: .center() has been renamed to .getCenter().');
        return this.getCenter(a);
      },
      empty() { console.warn('THREE.Box3: .empty() has been renamed to .isEmpty().'); return this.isEmpty(); },
      isIntersectionBox(a) { console.warn('THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().'); return this.intersectsBox(a); },
      isIntersectionSphere(a) { console.warn('THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().'); return this.intersectsSphere(a); },
      size(a) {
        console.warn('THREE.Box3: .size() has been renamed to .getSize().');
        return this.getSize(a);
      },
    }); Rg.prototype.center = function (a) { console.warn('THREE.Line3: .center() has been renamed to .getCenter().'); return this.getCenter(a); }; Object.assign(O, {
      random16() { console.warn('THREE.Math: .random16() has been deprecated. Use Math.random() instead.'); return Math.random(); },
      nearestPowerOfTwo(a) { console.warn('THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().'); return O.floorPowerOfTwo(a); },
      nextPowerOfTwo(a) {
        console.warn('THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().');
        return O.ceilPowerOfTwo(a);
      },
    }); Object.assign(za.prototype, {
      flattenToArrayOffset(a, b) { console.warn('THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'); return this.toArray(a, b); },
      multiplyVector3(a) { console.warn('THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.'); return a.applyMatrix3(this); },
      multiplyVector3Array() { console.error('THREE.Matrix3: .multiplyVector3Array() has been removed.'); },
      applyToBuffer(a) {
        console.warn('THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.');
        return this.applyToBufferAttribute(a);
      },
      applyToVector3Array() { console.error('THREE.Matrix3: .applyToVector3Array() has been removed.'); },
    }); Object.assign(P.prototype, {
      extractPosition(a) { console.warn('THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().'); return this.copyPosition(a); },
      flattenToArrayOffset(a, b) { console.warn('THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'); return this.toArray(a, b); },
      getPosition() {
        console.warn('THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.');
        return (new n()).setFromMatrixColumn(this, 3);
      },
      setRotationFromQuaternion(a) { console.warn('THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().'); return this.makeRotationFromQuaternion(a); },
      multiplyToArray() { console.warn('THREE.Matrix4: .multiplyToArray() has been removed.'); },
      multiplyVector3(a) { console.warn('THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.'); return a.applyMatrix4(this); },
      multiplyVector4(a) {
        console.warn('THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.');
        return a.applyMatrix4(this);
      },
      multiplyVector3Array() { console.error('THREE.Matrix4: .multiplyVector3Array() has been removed.'); },
      rotateAxis(a) { console.warn('THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.'); a.transformDirection(this); },
      crossVector(a) { console.warn('THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.'); return a.applyMatrix4(this); },
      translate() { console.error('THREE.Matrix4: .translate() has been removed.'); },
      rotateX() { console.error('THREE.Matrix4: .rotateX() has been removed.'); },
      rotateY() { console.error('THREE.Matrix4: .rotateY() has been removed.'); },
      rotateZ() { console.error('THREE.Matrix4: .rotateZ() has been removed.'); },
      rotateByAxis() { console.error('THREE.Matrix4: .rotateByAxis() has been removed.'); },
      applyToBuffer(a) { console.warn('THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.'); return this.applyToBufferAttribute(a); },
      applyToVector3Array() { console.error('THREE.Matrix4: .applyToVector3Array() has been removed.'); },
      makeFrustum(a, b, c, d, e, f) { console.warn('THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.'); return this.makePerspective(a, b, d, c, e, f); },
    }); Ta.prototype.isIntersectionLine = function (a) { console.warn('THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().'); return this.intersectsLine(a); }; Da.prototype.multiplyVector3 = function (a) { console.warn('THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.'); return a.applyQuaternion(this); }; Object.assign(Wb.prototype, {
      isIntersectionBox(a) { console.warn('THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().'); return this.intersectsBox(a); },
      isIntersectionPlane(a) { console.warn('THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().'); return this.intersectsPlane(a); },
      isIntersectionSphere(a) {
        console.warn('THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().');
        return this.intersectsSphere(a);
      },
    }); Object.assign(ma.prototype, {
      area() { console.warn('THREE.Triangle: .area() has been renamed to .getArea().'); return this.getArea(); },
      barycoordFromPoint(a, b) { console.warn('THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'); return this.getBarycoord(a, b); },
      midpoint(a) { console.warn('THREE.Triangle: .midpoint() has been renamed to .getMidpoint().'); return this.getMidpoint(a); },
      normal(a) {
        console.warn('THREE.Triangle: .normal() has been renamed to .getNormal().');
        return this.getNormal(a);
      },
      plane(a) { console.warn('THREE.Triangle: .plane() has been renamed to .getPlane().'); return this.getPlane(a); },
    }); Object.assign(ma, { barycoordFromPoint(a, b, c, d, e) { console.warn('THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'); return ma.getBarycoord(a, b, c, d, e); }, normal(a, b, c, d) { console.warn('THREE.Triangle: .normal() has been renamed to .getNormal().'); return ma.getNormal(a, b, c, d); } }); Object.assign(Lb.prototype, {
      extractAllPoints(a) {
        console.warn('THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.');
        return this.extractPoints(a);
      },
      extrude(a) { console.warn('THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.'); return new hc(this, a); },
      makeGeometry(a) { console.warn('THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.'); return new jc(this, a); },
    }); Object.assign(x.prototype, {
      fromAttribute(a, b, c) { console.warn('THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().'); return this.fromBufferAttribute(a, b, c); },
      distanceToManhattan(a) {
        console.warn('THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().');
        return this.manhattanDistanceTo(a);
      },
      lengthManhattan() { console.warn('THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().'); return this.manhattanLength(); },
    }); Object.assign(n.prototype, {
      setEulerFromRotationMatrix() { console.error('THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.'); },
      setEulerFromQuaternion() { console.error('THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.'); },
      getPositionFromMatrix(a) { console.warn('THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().'); return this.setFromMatrixPosition(a); },
      getScaleFromMatrix(a) { console.warn('THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().'); return this.setFromMatrixScale(a); },
      getColumnFromMatrix(a, b) {
        console.warn('THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().'); return this.setFromMatrixColumn(
          b,
          a,
        );
      },
      applyProjection(a) { console.warn('THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.'); return this.applyMatrix4(a); },
      fromAttribute(a, b, c) { console.warn('THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().'); return this.fromBufferAttribute(a, b, c); },
      distanceToManhattan(a) { console.warn('THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'); return this.manhattanDistanceTo(a); },
      lengthManhattan() {
        console.warn('THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().');
        return this.manhattanLength();
      },
    }); Object.assign(S.prototype, { fromAttribute(a, b, c) { console.warn('THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().'); return this.fromBufferAttribute(a, b, c); }, lengthManhattan() { console.warn('THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().'); return this.manhattanLength(); } }); Object.assign(M.prototype, { computeTangents() { console.error('THREE.Geometry: .computeTangents() has been removed.'); }, computeLineDistances() { console.error('THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.'); } });
    Object.assign(D.prototype, {
      getChildByName(a) { console.warn('THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().'); return this.getObjectByName(a); }, renderDepth() { console.warn('THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.'); }, translate(a, b) { console.warn('THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.'); return this.translateOnAxis(b, a); }, getWorldRotation() { console.error('THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.'); },
    });
    Object.defineProperties(D.prototype, { eulerOrder: { get() { console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'); return this.rotation.order; }, set(a) { console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'); this.rotation.order = a; } }, useQuaternion: { get() { console.warn('THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'); }, set() { console.warn('THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'); } } });
    Object.assign(ca.prototype, { setDrawMode() { console.error('THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.'); } }); Object.defineProperties(ca.prototype, { drawMode: { get() { console.error('THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.'); return 0; }, set() { console.error('THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.'); } } });
    Object.defineProperties(Sd.prototype, { objects: { get() { console.warn('THREE.LOD: .objects has been renamed to .levels.'); return this.levels; } } }); Object.defineProperty(Te.prototype, 'useVertexTexture', { get() { console.warn('THREE.Skeleton: useVertexTexture has been removed.'); }, set() { console.warn('THREE.Skeleton: useVertexTexture has been removed.'); } }); Td.prototype.initBones = function () { console.error('THREE.SkinnedMesh: initBones() has been removed.'); }; Object.defineProperty(
      I.prototype,
      '__arcLengthDivisions',
      { get() { console.warn('THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'); return this.arcLengthDivisions; }, set(a) { console.warn('THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'); this.arcLengthDivisions = a; } },
    ); pa.prototype.setLens = function (a, b) { console.warn('THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.'); void 0 !== b && (this.filmGauge = b); this.setFocalLength(a); }; Object.defineProperties(
      ba.prototype,
      {
        onlyShadow: { set() { console.warn('THREE.Light: .onlyShadow has been removed.'); } },
        shadowCameraFov: { set(a) { console.warn('THREE.Light: .shadowCameraFov is now .shadow.camera.fov.'); this.shadow.camera.fov = a; } },
        shadowCameraLeft: { set(a) { console.warn('THREE.Light: .shadowCameraLeft is now .shadow.camera.left.'); this.shadow.camera.left = a; } },
        shadowCameraRight: { set(a) { console.warn('THREE.Light: .shadowCameraRight is now .shadow.camera.right.'); this.shadow.camera.right = a; } },
        shadowCameraTop: {
          set(a) {
            console.warn('THREE.Light: .shadowCameraTop is now .shadow.camera.top.');
            this.shadow.camera.top = a;
          },
        },
        shadowCameraBottom: { set(a) { console.warn('THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.'); this.shadow.camera.bottom = a; } },
        shadowCameraNear: { set(a) { console.warn('THREE.Light: .shadowCameraNear is now .shadow.camera.near.'); this.shadow.camera.near = a; } },
        shadowCameraFar: { set(a) { console.warn('THREE.Light: .shadowCameraFar is now .shadow.camera.far.'); this.shadow.camera.far = a; } },
        shadowCameraVisible: { set() { console.warn('THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.'); } },
        shadowBias: { set(a) { console.warn('THREE.Light: .shadowBias is now .shadow.bias.'); this.shadow.bias = a; } },
        shadowDarkness: { set() { console.warn('THREE.Light: .shadowDarkness has been removed.'); } },
        shadowMapWidth: { set(a) { console.warn('THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.'); this.shadow.mapSize.width = a; } },
        shadowMapHeight: { set(a) { console.warn('THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.'); this.shadow.mapSize.height = a; } },
      },
    ); Object.defineProperties(
      K.prototype,
      { length: { get() { console.warn('THREE.BufferAttribute: .length has been deprecated. Use .count instead.'); return this.array.length; } }, dynamic: { get() { console.warn('THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.'); return this.usage === 35048; }, set() { console.warn('THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.'); this.setUsage(35048); } } },
    ); Object.assign(K.prototype, {
      setDynamic(a) {
        console.warn('THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.');
        this.setUsage(!0 === a ? 35048 : 35044); return this;
      },
      copyIndicesArray() { console.error('THREE.BufferAttribute: .copyIndicesArray() has been removed.'); },
      setArray() { console.error('THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers'); },
    }); Object.assign(G.prototype, {
      addIndex(a) { console.warn('THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().'); this.setIndex(a); },
      addAttribute(a, b, c) {
        console.warn('THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().');
        return b && b.isBufferAttribute || b && b.isInterleavedBufferAttribute ? a === 'index' ? (console.warn('THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.'), this.setIndex(b), this) : this.setAttribute(a, b) : (console.warn('THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).'), this.setAttribute(a, new K(b, c)));
      },
      addDrawCall(a, b, c) {
        void 0 !== c && console.warn('THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.'); console.warn('THREE.BufferGeometry: .addDrawCall() is now .addGroup().');
        this.addGroup(a, b);
      },
      clearDrawCalls() { console.warn('THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().'); this.clearGroups(); },
      computeTangents() { console.warn('THREE.BufferGeometry: .computeTangents() has been removed.'); },
      computeOffsets() { console.warn('THREE.BufferGeometry: .computeOffsets() has been removed.'); },
      removeAttribute(a) { console.warn('THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().'); return this.deleteAttribute(a); },
    });
    Object.defineProperties(G.prototype, { drawcalls: { get() { console.error('THREE.BufferGeometry: .drawcalls has been renamed to .groups.'); return this.groups; } }, offsets: { get() { console.warn('THREE.BufferGeometry: .offsets has been renamed to .groups.'); return this.groups; } } }); Object.defineProperties(sb.prototype, {
      dynamic: {
        get() { console.warn('THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.'); return this.usage === 35048; },
        set(a) {
          console.warn('THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.');
          this.setUsage(a);
        },
      },
    }); Object.assign(sb.prototype, { setDynamic(a) { console.warn('THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.'); this.setUsage(!0 === a ? 35048 : 35044); return this; }, setArray() { console.error('THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers'); } }); Object.assign(gb.prototype, {
      getArrays() { console.error('THREE.ExtrudeBufferGeometry: .getArrays() has been removed.'); },
      addShapeList() { console.error('THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.'); },
      addShape() { console.error('THREE.ExtrudeBufferGeometry: .addShape() has been removed.'); },
    }); Object.defineProperties(uf.prototype, { dynamic: { set() { console.warn('THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.'); } }, onUpdate: { value() { console.warn('THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.'); return this; } } });
    Object.defineProperties(L.prototype, {
      wrapAround: { get() { console.warn('THREE.Material: .wrapAround has been removed.'); }, set() { console.warn('THREE.Material: .wrapAround has been removed.'); } },
      overdraw: { get() { console.warn('THREE.Material: .overdraw has been removed.'); }, set() { console.warn('THREE.Material: .overdraw has been removed.'); } },
      wrapRGB: { get() { console.warn('THREE.Material: .wrapRGB has been removed.'); return new y(); } },
      shading: {
        get() {
          console.error(`THREE.${
            this.type}: .shading has been removed. Use the boolean .flatShading instead.`);
        },
        set(a) { console.warn(`THREE.${this.type}: .shading has been removed. Use the boolean .flatShading instead.`); this.flatShading = a === 1; },
      },
      stencilMask: {
        get() { console.warn(`THREE.${this.type}: .stencilMask has been removed. Use .stencilFuncMask instead.`); return this.stencilFuncMask; },
        set(a) {
          console.warn(`THREE.${this.type}: .stencilMask has been removed. Use .stencilFuncMask instead.`); this.stencilFuncMask = a;
        },
      },
    }); Object.defineProperties(Kb.prototype, { metal: { get() { console.warn('THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.'); return !1; }, set() { console.warn('THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead'); } } }); Object.defineProperties(oa.prototype, {
      derivatives: {
        get() { console.warn('THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'); return this.extensions.derivatives; },
        set(a) { console.warn('THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'); this.extensions.derivatives = a; },
      },
    }); Object.assign(pg.prototype, {
      clearTarget(a, b, c, d) { console.warn('THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.'); this.setRenderTarget(a); this.clear(b, c, d); },
      animate(a) { console.warn('THREE.WebGLRenderer: .animate() is now .setAnimationLoop().'); this.setAnimationLoop(a); },
      getCurrentRenderTarget() {
        console.warn('THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().');
        return this.getRenderTarget();
      },
      getMaxAnisotropy() { console.warn('THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().'); return this.capabilities.getMaxAnisotropy(); },
      getPrecision() { console.warn('THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.'); return this.capabilities.precision; },
      resetGLState() { console.warn('THREE.WebGLRenderer: .resetGLState() is now .state.reset().'); return this.state.reset(); },
      supportsFloatTextures() {
        console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
        return this.extensions.get('OES_texture_float');
      },
      supportsHalfFloatTextures() { console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."); return this.extensions.get('OES_texture_half_float'); },
      supportsStandardDerivatives() { console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."); return this.extensions.get('OES_standard_derivatives'); },
      supportsCompressedTextureS3TC() {
        console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
        return this.extensions.get('WEBGL_compressed_texture_s3tc');
      },
      supportsCompressedTexturePVRTC() { console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."); return this.extensions.get('WEBGL_compressed_texture_pvrtc'); },
      supportsBlendMinMax() { console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."); return this.extensions.get('EXT_blend_minmax'); },
      supportsVertexTextures() {
        console.warn('THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.');
        return this.capabilities.vertexTextures;
      },
      supportsInstancedArrays() { console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."); return this.extensions.get('ANGLE_instanced_arrays'); },
      enableScissorTest(a) { console.warn('THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().'); this.setScissorTest(a); },
      initMaterial() { console.warn('THREE.WebGLRenderer: .initMaterial() has been removed.'); },
      addPrePlugin() { console.warn('THREE.WebGLRenderer: .addPrePlugin() has been removed.'); },
      addPostPlugin() { console.warn('THREE.WebGLRenderer: .addPostPlugin() has been removed.'); },
      updateShadowMap() { console.warn('THREE.WebGLRenderer: .updateShadowMap() has been removed.'); },
      setFaceCulling() { console.warn('THREE.WebGLRenderer: .setFaceCulling() has been removed.'); },
      allocTextureUnit() { console.warn('THREE.WebGLRenderer: .allocTextureUnit() has been removed.'); },
      setTexture() { console.warn('THREE.WebGLRenderer: .setTexture() has been removed.'); },
      setTexture2D() { console.warn('THREE.WebGLRenderer: .setTexture2D() has been removed.'); },
      setTextureCube() { console.warn('THREE.WebGLRenderer: .setTextureCube() has been removed.'); },
      getActiveMipMapLevel() { console.warn('THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().'); return this.getActiveMipmapLevel(); },
    }); Object.defineProperties(pg.prototype, {
      shadowMapEnabled: { get() { return this.shadowMap.enabled; }, set(a) { console.warn('THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.'); this.shadowMap.enabled = a; } },
      shadowMapType: {
        get() { return this.shadowMap.type; },
        set(a) { console.warn('THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.'); this.shadowMap.type = a; },
      },
      shadowMapCullFace: { get() { console.warn('THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'); }, set() { console.warn('THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'); } },
      context: { get() { console.warn('THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.'); return this.getContext(); } },
      vr: { get() { console.warn('THREE.WebGLRenderer: .vr has been renamed to .xr'); return this.xr; } },
      gammaInput: { get() { console.warn('THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.'); return !1; }, set() { console.warn('THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.'); } },
      gammaOutput: {
        get() {
          console.warn('THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.');
          return !1;
        },
        set(a) { console.warn('THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.'); this.outputEncoding = !0 === a ? 3001 : 3E3; },
      },
    }); Object.defineProperties(Th.prototype, {
      cullFace: { get() { console.warn('THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'); }, set() { console.warn('THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'); } },
      renderReverseSided: {
        get() { console.warn('THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'); },
        set() { console.warn('THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'); },
      },
      renderSingleSided: { get() { console.warn('THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'); }, set() { console.warn('THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'); } },
    }); Object.defineProperties(Eb.prototype, {
      activeCubeFace: { set() { console.warn('THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().'); } },
      activeMipMapLevel: { set() { console.warn('THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().'); } },
    }); Object.defineProperties(va.prototype, {
      wrapS: { get() { console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'); return this.texture.wrapS; }, set(a) { console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'); this.texture.wrapS = a; } },
      wrapT: {
        get() {
          console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.');
          return this.texture.wrapT;
        },
        set(a) { console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'); this.texture.wrapT = a; },
      },
      magFilter: { get() { console.warn('THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'); return this.texture.magFilter; }, set(a) { console.warn('THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'); this.texture.magFilter = a; } },
      minFilter: {
        get() { console.warn('THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'); return this.texture.minFilter; },
        set(a) { console.warn('THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'); this.texture.minFilter = a; },
      },
      anisotropy: { get() { console.warn('THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'); return this.texture.anisotropy; }, set(a) { console.warn('THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'); this.texture.anisotropy = a; } },
      offset: {
        get() { console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'); return this.texture.offset; },
        set(a) { console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'); this.texture.offset = a; },
      },
      repeat: { get() { console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'); return this.texture.repeat; }, set(a) { console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'); this.texture.repeat = a; } },
      format: {
        get() { console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'); return this.texture.format; },
        set(a) {
          console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.');
          this.texture.format = a;
        },
      },
      type: { get() { console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'); return this.texture.type; }, set(a) { console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'); this.texture.type = a; } },
      generateMipmaps: {
        get() { console.warn('THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'); return this.texture.generateMipmaps; },
        set(a) {
          console.warn('THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.');
          this.texture.generateMipmaps = a;
        },
      },
    }); Object.defineProperties(hd.prototype, { load: { value(a) { console.warn('THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.'); const b = this; (new sf()).load(a, (a) => { b.setBuffer(a); }); return this; } }, startTime: { set() { console.warn('THREE.Audio: .startTime is now .play( delay ).'); } } }); Lg.prototype.getData = function () { console.warn('THREE.AudioAnalyser: .getData() is now .getFrequencyData().'); return this.getFrequencyData(); }; Hc.prototype.updateCubeMap = function (a, b) { console.warn('THREE.CubeCamera: .updateCubeMap() is now .update().'); return this.update(a, b); }; Mb.crossOrigin = void 0; Mb.loadTexture = function (a, b, c, d) { console.warn('THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.'); const e = new df(); e.setCrossOrigin(this.crossOrigin); a = e.load(a, c, void 0, d); b && (a.mapping = b); return a; }; Mb.loadTextureCube = function (a, b, c, d) {
      console.warn('THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.');
      const e = new cf(); e.setCrossOrigin(this.crossOrigin); a = e.load(a, c, void 0, d); b && (a.mapping = b); return a;
    }; Mb.loadCompressedTexture = function () { console.error('THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.'); }; Mb.loadCompressedTextureCube = function () { console.error('THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.'); }; typeof __THREE_DEVTOOLS__ !== 'undefined' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', { detail: { revision: '112' } }));
    h.ACESFilmicToneMapping = 5; h.AddEquation = 100; h.AddOperation = 2; h.AdditiveBlending = 2; h.AlphaFormat = 1021; h.AlwaysDepth = 1; h.AlwaysStencilFunc = 519; h.AmbientLight = lf; h.AmbientLightProbe = Gg; h.AnimationClip = Qa; h.AnimationLoader = xg; h.AnimationMixer = Ng; h.AnimationObjectGroup = ki; h.AnimationUtils = ea; h.ArcCurve = fd; h.ArrayCamera = Pe; h.ArrowHelper = yb; h.Audio = hd; h.AudioAnalyser = Lg; h.AudioContext = Jg; h.AudioListener = Ig; h.AudioLoader = sf; h.AxesHelper = xe; h.AxisHelper = function (a) {
      console.warn('THREE.AxisHelper has been renamed to THREE.AxesHelper.');
      return new xe(a);
    }; h.BackSide = 1; h.BasicDepthPacking = 3200; h.BasicShadowMap = 0; h.BinaryTextureLoader = function (a) { console.warn('THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.'); return new bf(a); }; h.Bone = qg; h.BooleanKeyframeTrack = Ye; h.BoundingBoxHelper = function (a, b) { console.warn('THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.'); return new xb(a, b); }; h.Box2 = Qg; h.Box3 = Sa; h.Box3Helper = ve; h.BoxBufferGeometry = Jd; h.BoxGeometry = lh; h.BoxHelper = xb; h.BufferAttribute = K; h.BufferGeometry = G; h.BufferGeometryLoader = qf; h.ByteType = 1010; h.Cache = xc; h.Camera = db; h.CameraHelper = ue; h.CanvasRenderer = function () { console.error('THREE.CanvasRenderer has been removed'); }; h.CanvasTexture = Ud; h.CatmullRomCurve3 = Aa; h.CineonToneMapping = 4; h.CircleBufferGeometry = bd; h.CircleGeometry = oe; h.ClampToEdgeWrapping = 1001; h.Clock = Hg; h.ClosedSplineCurve3 = Ci; h.Color = y; h.ColorKeyframeTrack = Ze; h.CompressedTexture = Pc; h.CompressedTextureLoader = yg; h.ConeBufferGeometry = ne; h.ConeGeometry = me; h.CubeCamera = Hc;
    h.CubeGeometry = lh; h.CubeReflectionMapping = 301; h.CubeRefractionMapping = 302; h.CubeTexture = rb; h.CubeTextureLoader = cf; h.CubeUVReflectionMapping = 306; h.CubeUVRefractionMapping = 307; h.CubicBezierCurve = Wa; h.CubicBezierCurve3 = ib; h.CubicInterpolant = We; h.CullFaceBack = 1; h.CullFaceFront = 2; h.CullFaceFrontBack = 3; h.CullFaceNone = 0; h.Curve = I; h.CurvePath = wb; h.CustomBlending = 5; h.CylinderBufferGeometry = ub; h.CylinderGeometry = lc; h.Cylindrical = pi; h.DataTexture = cc; h.DataTexture2DArray = Ic; h.DataTexture3D = Jc; h.DataTextureLoader = bf; h.DecrementStencilOp = 7683; h.DecrementWrapStencilOp = 34056; h.DefaultLoadingManager = gi; h.DepthFormat = 1026; h.DepthStencilFormat = 1027; h.DepthTexture = Vd; h.DirectionalLight = kf; h.DirectionalLightHelper = md; h.DirectionalLightShadow = jf; h.DiscreteInterpolant = Xe; h.DodecahedronBufferGeometry = Uc; h.DodecahedronGeometry = ae; h.DoubleSide = 2; h.DstAlphaFactor = 206; h.DstColorFactor = 208; h.DynamicBufferAttribute = function (a, b) {
      console.warn('THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.');
      return (new K(a, b)).setDynamic(!0);
    }; h.DynamicCopyUsage = 35050; h.DynamicDrawUsage = 35048; h.DynamicReadUsage = 35049; h.EdgesGeometry = ad; h.EdgesHelper = function (a, b) { console.warn('THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.'); return new la(new ad(a.geometry), new ja({ color: void 0 !== b ? b : 16777215 })); }; h.EllipseCurve = La; h.EqualDepth = 4; h.EqualStencilFunc = 514; h.EquirectangularReflectionMapping = 303; h.EquirectangularRefractionMapping = 304; h.Euler = Ub; h.EventDispatcher = Fa; h.ExtrudeBufferGeometry = gb; h.ExtrudeGeometry = hc; h.Face3 = Dc; h.Face4 = function (a, b, c, d, e, f, g) { console.warn('THREE.Face4 has been removed. A THREE.Face3 will be created instead.'); return new Dc(a, b, c, e, f, g); }; h.FaceColors = 1; h.FileLoader = Ra; h.FlatShading = 1; h.Float32Attribute = function (a, b) { console.warn('THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.'); return new C(a, b); }; h.Float32BufferAttribute = C; h.Float64Attribute = function (a, b) {
      console.warn('THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.');
      return new Fd(a, b);
    }; h.Float64BufferAttribute = Fd; h.FloatType = 1015; h.Fog = Re; h.FogExp2 = Qe; h.Font = Dg; h.FontLoader = Eg; h.FrontFaceDirectionCCW = 1; h.FrontFaceDirectionCW = 0; h.FrontSide = 0; h.Frustum = Hd; h.GammaEncoding = 3007; h.Geometry = M; h.GeometryUtils = {
      merge(a, b, c) { console.warn('THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.'); if (b.isMesh) { b.matrixAutoUpdate && b.updateMatrix(); var d = b.matrix; b = b.geometry; }a.merge(b, d, c); },
      center(a) { console.warn('THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.'); return a.center(); },
    }; h.GreaterDepth = 6; h.GreaterEqualDepth = 5; h.GreaterEqualStencilFunc = 518; h.GreaterStencilFunc = 516; h.GridHelper = vf; h.Group = Od; h.HalfFloatType = 1016; h.HemisphereLight = ef; h.HemisphereLightHelper = ld; h.HemisphereLightProbe = Fg; h.IcosahedronBufferGeometry = Tc; h.IcosahedronGeometry = $d; h.ImageBitmapLoader = Bg; h.ImageLoader = ed; h.ImageUtils = Mb; h.ImmediateRenderObject = te; h.IncrementStencilOp = 7682; h.IncrementWrapStencilOp = 34055; h.InstancedBufferAttribute = pf; h.InstancedBufferGeometry = of; h.InstancedInterleavedBuffer = Og; h.InstancedMesh = Ue; h.Int16Attribute = function (a, b) { console.warn('THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.'); return new Dd(a, b); }; h.Int16BufferAttribute = Dd; h.Int32Attribute = function (a, b) { console.warn('THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.'); return new Ed(a, b); }; h.Int32BufferAttribute = Ed;
    h.Int8Attribute = function (a, b) { console.warn('THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.'); return new Ad(a, b); }; h.Int8BufferAttribute = Ad; h.IntType = 1013; h.InterleavedBuffer = sb; h.InterleavedBufferAttribute = Pd; h.Interpolant = Ka; h.InterpolateDiscrete = 2300; h.InterpolateLinear = 2301; h.InterpolateSmooth = 2302; h.InvertStencilOp = 5386; h.JSONLoader = function () { console.error('THREE.JSONLoader has been removed.'); }; h.KeepStencilOp = 7680; h.KeyframeTrack = ra; h.LOD = Sd; h.LatheBufferGeometry = $c; h.LatheGeometry = le; h.Layers = $f; h.LensFlare = function () { console.error('THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js'); }; h.LessDepth = 2; h.LessEqualDepth = 3; h.LessEqualStencilFunc = 515; h.LessStencilFunc = 513; h.Light = ba; h.LightProbe = ab; h.LightShadow = kb; h.Line = Ja; h.Line3 = Rg; h.LineBasicMaterial = ja; h.LineCurve = Ea; h.LineCurve3 = Xa; h.LineDashedMaterial = sc; h.LineLoop = Ve; h.LinePieces = 1; h.LineSegments = la; h.LineStrip = 0; h.LinearEncoding = 3E3; h.LinearFilter = 1006; h.LinearInterpolant = pe; h.LinearMipMapLinearFilter = 1008; h.LinearMipMapNearestFilter = 1007; h.LinearMipmapLinearFilter = 1008; h.LinearMipmapNearestFilter = 1007; h.LinearToneMapping = 1; h.Loader = Q; h.LoaderUtils = rh; h.LoadingManager = wg; h.LogLuvEncoding = 3003; h.LoopOnce = 2200; h.LoopPingPong = 2202; h.LoopRepeat = 2201; h.LuminanceAlphaFormat = 1025; h.LuminanceFormat = 1024; h.MOUSE = {
      LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2,
    }; h.Material = L; h.MaterialLoader = nf; h.Math = O; h.Matrix3 = za; h.Matrix4 = P; h.MaxEquation = 104; h.Mesh = ca; h.MeshBasicMaterial = Oa; h.MeshDepthMaterial = Gb; h.MeshDistanceMaterial = Hb; h.MeshFaceMaterial = function (a) { console.warn('THREE.MeshFaceMaterial has been removed. Use an Array instead.'); return a; }; h.MeshLambertMaterial = qc; h.MeshMatcapMaterial = rc; h.MeshNormalMaterial = pc; h.MeshPhongMaterial = Kb; h.MeshPhysicalMaterial = nc; h.MeshStandardMaterial = hb; h.MeshToonMaterial = oc; h.MinEquation = 103; h.MirroredRepeatWrapping = 1002; h.MixOperation = 1; h.MultiMaterial = function (a) {
      void 0 === a && (a = []); console.warn('THREE.MultiMaterial has been removed. Use an Array instead.'); a.isMultiMaterial = !0;
      a.materials = a; a.clone = function () { return a.slice(); }; return a;
    }; h.MultiplyBlending = 4; h.MultiplyOperation = 0; h.NearestFilter = 1003; h.NearestMipMapLinearFilter = 1005; h.NearestMipMapNearestFilter = 1004; h.NearestMipmapLinearFilter = 1005; h.NearestMipmapNearestFilter = 1004; h.NeverDepth = 0; h.NeverStencilFunc = 512; h.NoBlending = 0; h.NoColors = 0; h.NoToneMapping = 0; h.NormalBlending = 1; h.NotEqualDepth = 7; h.NotEqualStencilFunc = 517; h.NumberKeyframeTrack = cd; h.Object3D = D; h.ObjectLoader = rf; h.ObjectSpaceNormalMap = 1; h.OctahedronBufferGeometry = ec; h.OctahedronGeometry = Zd; h.OneFactor = 201; h.OneMinusDstAlphaFactor = 207; h.OneMinusDstColorFactor = 209; h.OneMinusSrcAlphaFactor = 205; h.OneMinusSrcColorFactor = 203; h.OrthographicCamera = gd; h.PCFShadowMap = 1; h.PCFSoftShadowMap = 2; h.PMREMGenerator = Tg; h.ParametricBufferGeometry = Rc; h.ParametricGeometry = Wd; h.Particle = function (a) { console.warn('THREE.Particle has been renamed to THREE.Sprite.'); return new Qd(a); }; h.ParticleBasicMaterial = function (a) {
      console.warn('THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.');
      return new Va(a);
    }; h.ParticleSystem = function (a, b) { console.warn('THREE.ParticleSystem has been renamed to THREE.Points.'); return new Oc(a, b); }; h.ParticleSystemMaterial = function (a) { console.warn('THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.'); return new Va(a); }; h.Path = $a; h.PerspectiveCamera = pa; h.Plane = Ta; h.PlaneBufferGeometry = dc; h.PlaneGeometry = Id; h.PlaneHelper = we; h.PointCloud = function (a, b) { console.warn('THREE.PointCloud has been renamed to THREE.Points.'); return new Oc(a, b); };
    h.PointCloudMaterial = function (a) { console.warn('THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.'); return new Va(a); }; h.PointLight = hf; h.PointLightHelper = kd; h.Points = Oc; h.PointsMaterial = Va; h.PolarGridHelper = wf; h.PolyhedronBufferGeometry = Ga; h.PolyhedronGeometry = Xd; h.PositionalAudio = Kg; h.PropertyBinding = Ba; h.PropertyMixer = Mg; h.QuadraticBezierCurve = Ya; h.QuadraticBezierCurve3 = jb; h.Quaternion = Da; h.QuaternionKeyframeTrack = qe; h.QuaternionLinearInterpolant = $e; h.REVISION = '112'; h.RGBADepthPacking = 3201; h.RGBAFormat = 1023; h.RGBAIntegerFormat = 1033; h.RGBA_ASTC_10x10_Format = 37819; h.RGBA_ASTC_10x5_Format = 37816; h.RGBA_ASTC_10x6_Format = 37817; h.RGBA_ASTC_10x8_Format = 37818; h.RGBA_ASTC_12x10_Format = 37820; h.RGBA_ASTC_12x12_Format = 37821; h.RGBA_ASTC_4x4_Format = 37808; h.RGBA_ASTC_5x4_Format = 37809; h.RGBA_ASTC_5x5_Format = 37810; h.RGBA_ASTC_6x5_Format = 37811; h.RGBA_ASTC_6x6_Format = 37812; h.RGBA_ASTC_8x5_Format = 37813; h.RGBA_ASTC_8x6_Format = 37814; h.RGBA_ASTC_8x8_Format = 37815; h.RGBA_PVRTC_2BPPV1_Format = 35843; h.RGBA_PVRTC_4BPPV1_Format = 35842; h.RGBA_S3TC_DXT1_Format = 33777; h.RGBA_S3TC_DXT3_Format = 33778; h.RGBA_S3TC_DXT5_Format = 33779; h.RGBDEncoding = 3006; h.RGBEEncoding = 3002; h.RGBEFormat = 1023; h.RGBFormat = 1022; h.RGBIntegerFormat = 1032; h.RGBM16Encoding = 3005; h.RGBM7Encoding = 3004; h.RGB_ETC1_Format = 36196; h.RGB_PVRTC_2BPPV1_Format = 35841; h.RGB_PVRTC_4BPPV1_Format = 35840; h.RGB_S3TC_DXT1_Format = 33776; h.RGFormat = 1030; h.RGIntegerFormat = 1031; h.RawShaderMaterial = vb; h.Ray = Wb; h.Raycaster = mi; h.RectAreaLight = mf; h.RedFormat = 1028; h.RedIntegerFormat = 1029;
    h.ReinhardToneMapping = 2; h.RepeatWrapping = 1E3; h.ReplaceStencilOp = 7681; h.ReverseSubtractEquation = 102; h.RingBufferGeometry = Zc; h.RingGeometry = ke; h.Scene = pb; h.SceneUtils = { createMultiMaterialObject() { console.error('THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js'); }, detach() { console.error('THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js'); }, attach() { console.error('THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js'); } }; h.ShaderChunk = N; h.ShaderLib = eb; h.ShaderMaterial = oa; h.ShadowMaterial = mc; h.Shape = Lb; h.ShapeBufferGeometry = kc; h.ShapeGeometry = jc; h.ShapePath = Cg; h.ShapeUtils = tb; h.ShortType = 1011; h.Skeleton = Te; h.SkeletonHelper = jd; h.SkinnedMesh = Td; h.SmoothShading = 2; h.Sphere = qb; h.SphereBufferGeometry = ic; h.SphereGeometry = je; h.Spherical = oi; h.SphericalHarmonics3 = tf; h.SphericalReflectionMapping = 305; h.Spline = Zg; h.SplineCurve = Za; h.SplineCurve3 = Di; h.SpotLight = gf; h.SpotLightHelper = id; h.SpotLightShadow = ff; h.Sprite = Qd; h.SpriteMaterial = Jb; h.SrcAlphaFactor = 204; h.SrcAlphaSaturateFactor = 210; h.SrcColorFactor = 202; h.StaticCopyUsage = 35046; h.StaticDrawUsage = 35044; h.StaticReadUsage = 35045; h.StereoCamera = ii; h.StreamCopyUsage = 35042; h.StreamDrawUsage = 35040; h.StreamReadUsage = 35041; h.StringKeyframeTrack = af; h.SubtractEquation = 101; h.SubtractiveBlending = 3; h.TOUCH = {
      ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3,
    }; h.TangentSpaceNormalMap = 0; h.TetrahedronBufferGeometry = Sc; h.TetrahedronGeometry = Yd; h.TextBufferGeometry = Yc; h.TextGeometry = ie; h.Texture = T; h.TextureLoader = df; h.TorusBufferGeometry = Wc; h.TorusGeometry = de; h.TorusKnotBufferGeometry = Vc; h.TorusKnotGeometry = ce; h.Triangle = ma; h.TriangleFanDrawMode = 2; h.TriangleStripDrawMode = 1; h.TrianglesDrawMode = 0; h.TubeBufferGeometry = fc; h.TubeGeometry = be; h.UVMapping = 300; h.Uint16Attribute = function (a, b) { console.warn('THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.'); return new Xb(a, b); }; h.Uint16BufferAttribute = Xb; h.Uint32Attribute = function (a, b) {
      console.warn('THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.');
      return new Yb(a, b);
    }; h.Uint32BufferAttribute = Yb; h.Uint8Attribute = function (a, b) { console.warn('THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.'); return new Bd(a, b); }; h.Uint8BufferAttribute = Bd; h.Uint8ClampedAttribute = function (a, b) { console.warn('THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.'); return new Cd(a, b); }; h.Uint8ClampedBufferAttribute = Cd; h.Uncharted2ToneMapping = 3; h.Uniform = uf; h.UniformsLib = E; h.UniformsUtils = Xk; h.UnsignedByteType = 1009; h.UnsignedInt248Type = 1020; h.UnsignedIntType = 1014; h.UnsignedShort4444Type = 1017; h.UnsignedShort5551Type = 1018; h.UnsignedShort565Type = 1019; h.UnsignedShortType = 1012; h.VSMShadowMap = 3; h.Vector2 = x; h.Vector3 = n; h.Vector4 = S; h.VectorKeyframeTrack = dd; h.Vertex = function (a, b, c) { console.warn('THREE.Vertex has been removed. Use THREE.Vector3 instead.'); return new n(a, b, c); }; h.VertexColors = 2; h.VideoTexture = tg; h.WebGLMultisampleRenderTarget = Zf; h.WebGLRenderTarget = va; h.WebGLRenderTargetCube = Eb; h.WebGLRenderer = pg; h.WebGLUtils = Vh; h.WireframeGeometry = Qc; h.WireframeHelper = function (a, b) { console.warn('THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.'); return new la(new Qc(a.geometry), new ja({ color: void 0 !== b ? b : 16777215 })); }; h.WrapAroundEnding = 2402; h.XHRLoader = function (a) { console.warn('THREE.XHRLoader has been renamed to THREE.FileLoader.'); return new Ra(a); }; h.ZeroCurvatureEnding = 2400; h.ZeroFactor = 200; h.ZeroSlopeEnding = 2401; h.ZeroStencilOp = 0; h.sRGBEncoding = 3001; Object.defineProperty(
      h,
      '__esModule',
      { value: !0 },
    );
  }));
  return exports;
};
