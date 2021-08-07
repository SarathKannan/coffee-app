export const useGet = async url => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const respJSON = await response.json();
      return respJSON;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
