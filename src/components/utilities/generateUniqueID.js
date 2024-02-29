const generateUniqueId = () => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).slice(2, 7);
  const uniqueId = `unique_${timestamp}_${randomStr}`;
  return uniqueId;
};

export default generateUniqueId;
