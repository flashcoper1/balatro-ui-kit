// GLSL versioning and precision compatibility
#ifdef GL_ES
precision mediump float;
#endif

// Define precision based on available support
#if defined(GL_FRAGMENT_PRECISION_HIGH)
#define MY_HIGHP_OR_MEDIUMP highp
#else
#define MY_HIGHP_OR_MEDIUMP mediump
#endif

// Shared uniforms that will be passed from React Three Fiber
uniform float time;
uniform vec2 resolution;
uniform sampler2D uTexture;

// Common shader-specific uniforms (declared here to avoid redefinition)
uniform MY_HIGHP_OR_MEDIUMP float dissolve;
uniform MY_HIGHP_OR_MEDIUMP vec4 texture_details;
uniform MY_HIGHP_OR_MEDIUMP vec2 image_details;
uniform bool shadow;
uniform MY_HIGHP_OR_MEDIUMP vec4 burn_colour_1;
uniform MY_HIGHP_OR_MEDIUMP vec4 burn_colour_2;

// Shader-specific uniforms
uniform MY_HIGHP_OR_MEDIUMP vec2 holo;
uniform MY_HIGHP_OR_MEDIUMP vec2 foil;
uniform MY_HIGHP_OR_MEDIUMP vec2 polychrome;
uniform MY_HIGHP_OR_MEDIUMP vec2 negative_shine;
uniform MY_HIGHP_OR_MEDIUMP vec2 booster;
uniform MY_HIGHP_OR_MEDIUMP vec2 voucher;
uniform MY_HIGHP_OR_MEDIUMP vec2 mouse_screen_pos;
uniform MY_HIGHP_OR_MEDIUMP float hovering;
uniform MY_HIGHP_OR_MEDIUMP float screen_scale;
uniform float vortex_amt;
uniform MY_HIGHP_OR_MEDIUMP float vort_speed;
uniform MY_HIGHP_OR_MEDIUMP vec4 colour_1;
uniform MY_HIGHP_OR_MEDIUMP vec4 colour_2;
uniform MY_HIGHP_OR_MEDIUMP float mid_flash;
uniform MY_HIGHP_OR_MEDIUMP float vort_offset;

// WebGL replacement for LÖVE's Texel function
#define Texel(tex, uv) texture2D(tex, uv)

// love_ScreenSize equivalent
#define love_ScreenSize resolution


