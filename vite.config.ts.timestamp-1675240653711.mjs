// vite.config.ts
import { defineConfig } from "file:///D:/local/vue-tradingviewWidgets/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/local/vue-tradingviewWidgets/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/local/vue-tradingviewWidgets/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "file:///D:/local/vue-tradingviewWidgets/node_modules/pathe/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\local\\vue-tradingviewWidgets";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "/@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "tradingview-vue",
      fileName: "tradingview-vue"
    },
    watch: {
      include: [resolve(__vite_injected_original_dirname, "src")]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ["vue"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxsb2NhbFxcXFx2dWUtdHJhZGluZ3ZpZXdXaWRnZXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxsb2NhbFxcXFx2dWUtdHJhZGluZ3ZpZXdXaWRnZXRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9sb2NhbC92dWUtdHJhZGluZ3ZpZXdXaWRnZXRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJy9AJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICB2dWUoKSxcbiAgICAgICAgZHRzKHtcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgICAgICAgIG5hbWU6ICd0cmFkaW5ndmlldy12dWUnLFxuICAgICAgICAgICAgZmlsZU5hbWU6ICd0cmFkaW5ndmlldy12dWUnLFxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgaW5jbHVkZTogW3Jlc29sdmUoX19kaXJuYW1lLCAnc3JjJyldLFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAgIGV4Y2x1ZGU6IFsndnVlJ10sXG4gICAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFSLFNBQVMsb0JBQW9CO0FBQ2xULE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBSHhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILE1BQU0sUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDcEM7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDQSxrQkFBa0I7QUFBQSxJQUN0QixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsS0FBSztBQUFBLE1BQ0QsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDZDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0gsU0FBUyxDQUFDLFFBQVEsa0NBQVcsS0FBSyxDQUFDO0FBQUEsSUFDdkM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ0osU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ0wsS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNWLFNBQVMsQ0FBQyxLQUFLO0FBQUEsRUFDbkI7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
