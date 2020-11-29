export default class GrayScalePipeline extends Phaser.Renderer.WebGL.Pipelines
  .TextureTintPipeline {
  constructor(game: Phaser.Game) {
    super({
      game: game,
      renderer: game.renderer,
      fragShader: `

        precision mediump float;
        uniform sampler2D uMainSampler;
        varying vec2 outTexCoord;
        
        void main(void) {
        vec4 color = texture2D(uMainSampler, outTexCoord);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor = vec4(vec3(gray), 1.0);
        }     
            `,
    });
  }
}

// precision mediump float;

// uniform sampler2D uMainSampler;
// uniform float gray;

// varying vec2 outTexCoord;
// varying float outTexId;
// varying vec4 outTint;
// varying vec2 fragCoord;

// void main()
// {
//     vec4 texture;

//     gl_FragColor = texture;
//     gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126 * gl_FragColor.r + 0.7152 * gl_FragColor.g + 0.0722 * gl_FragColor.b), gray);
// }
