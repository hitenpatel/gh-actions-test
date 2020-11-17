module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: ['http://localhost:3000/en'],
      startServerCommand: 'npm start',
    },
    assert: {
      preset: 'lighthouse:recommended',
      'categories:performance': ['warn', { aggregationMethod: 'optimistic', minScore: 0.7 }],
      'categories:accessibility': ['warn', { aggregationMethod: 'optimistic', minScore: 0.7 }],
      assertions: {
        'offscreen-images': 'off',
        'uses-webp-images': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
