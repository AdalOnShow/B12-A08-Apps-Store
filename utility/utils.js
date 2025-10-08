export const formatNumber = (num) => {
  if (num >= 1000000) {
    const formatted = (num / 1000000).toFixed(1);
    return formatted.replace(/\.0$/, '') + 'M';
  }

  if (num >= 1000) {
    const formatted = (num / 1000).toFixed(1);
    return formatted.replace(/\.0$/, '') + 'K';
  }

  return num;
};

export const getInstallDB = () => {
  const localStorageData = localStorage.getItem("installedApps")

  return localStorageData ? JSON.parse(localStorageData) : []
}

export const setInstallDB = (id) => {
  const prevsData = getInstallDB()

  if (prevsData.includes(id)) {
    return
  }
  const newData = [...prevsData, id]
  const json = JSON.stringify(newData)

  localStorage.setItem("installedApps", json)
}
export const delInstallDB = (id) => {
  const prevsData = getInstallDB()
  const newData = prevsData.filter(a => a != id)
  const json = JSON.stringify(newData)

  localStorage.setItem("installedApps", json)
}
