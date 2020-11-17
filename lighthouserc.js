module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: ['http://localhost:3000/en'],
      startServerCommand: 'npm start',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      'categories:performance': ['warn', { aggregationMethod: 'optimistic', minScore: 0.1 }],
      'categories:accessibility': ['warn', { aggregationMethod: 'optimistic', minScore: 0.1 }],
      assertions: {
        'color-contrast': 'off',
        label: 'off',
        'unsized-images': 'off',
        'unused-javascript': 'off',
        'offscreen-images': 'off',
        'uses-webp-images': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
