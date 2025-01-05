// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
  ssr: false,
	css: [
		'~/assets/css/reset.css', // Подключение reset CSS-файла
		'~/assets/css/style.css', // Подключение глобального CSS-файла
		'~/assets/css/variables.css', // Подключение глобального CSS-файла с переменными
	]
});
