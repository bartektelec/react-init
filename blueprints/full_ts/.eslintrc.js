module.exports = {
	ignorePatterns: ['node_modules', 'config', 'dist', '**/*.config.js'],
	env: {
		browser: true,
		es2020: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:jsx-a11y/strict',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'jsx-a11y'],
	rules: {
		'no-tabs': 'off',
		'no-use-before-define': 'off',
		'import/prefer-default-export': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/exhaustive-deps': 'warn',
		'jsx-quotes': ['error', 'prefer-single'],
		'arrow-parens': ['error', 'as-needed'],
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.tsx', '.jsx'],
			},
		],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
				jsx: 'never',
			},
		],
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'react-hooks/rules-of-hooks': 'error',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {},
		},
	},
};
