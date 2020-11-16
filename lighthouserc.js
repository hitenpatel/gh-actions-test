module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
    },
  },
};
