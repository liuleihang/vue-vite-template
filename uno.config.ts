import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
/**
 * presetIcons: 加载icon图标
 * presetAttributify： 代码中如m-1可以直接写m="1"
 * presetUno： 兼容了tailwindcss，可以直接使用里面的class
 */
export default defineConfig({
  // 自定义样式
  rules: [
    //eg: ['red', { color: 'red' }]
  ],
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    presetIcons({
      warn: true,
      // 图标前缀
      // prefix: ['i-'],
      // 默认图标样式
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      },
      // 图标合集
      collections: {
        // 自定义图标合集
        h: FileSystemIconLoader('./src/assets/svgs', (svg) => {
          return svg.replace(/#fff/, 'currentColor');
        })
      }
    })
  ]
});
