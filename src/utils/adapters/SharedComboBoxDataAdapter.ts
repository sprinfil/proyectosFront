export const createSharedComboBoxAdapter = (data: any[]) => {
  return data.map((item) => {
    return {
      value: item?.name,
      label: item?.name,
      id: item?.id,
    };
  });
};
