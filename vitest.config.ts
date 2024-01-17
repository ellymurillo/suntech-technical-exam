import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(viteConfig, defineConfig({
	test: {
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, 'e2e/*'],
		root: fileURLToPath(new URL('./', import.meta.url)),
		server: {
			deps: {
				inline: ["vuetify"]
			}
		}
	}
}))