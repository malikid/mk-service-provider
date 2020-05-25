const mockGlobalService = (serviceName, mockLogicFunction) => {
  const originalFunction = {
    value: global[serviceName],
    restore: function () {
      global[serviceName] = this.value;
    },
  };
  global[serviceName] = mockLogicFunction;
  return originalFunction;
};

export {mockGlobalService};
