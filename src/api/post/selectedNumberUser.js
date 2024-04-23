const API_URL = 'https://650c56cc47af3fd22f678083.mockapi.io/';

export const sendData = async (arrNumbFiledOne, numbFieldTwo, showYouWin) => {
  try {

    const dataToSend = {
      selectedNumber: {
        firstField: [...arrNumbFiledOne],
        secondField: [...numbFieldTwo]
      },
      isTicketWon: showYouWin
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });


    if (!response.ok) {
      let retries = 1;

      const retryRequest = async () => {
        const retryResponse = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
        });
        if (retryResponse.ok) {
          const responseData = await retryResponse.json();

        } else if (retries > 0) {
          retries--;
          setTimeout(retryRequest, 2000);
        } else {
          return ('Ошибка: не удалось получить успешный ответ');
        }
      };
      setTimeout(retryRequest, 2000);
    } else {
      const responseData = await response.json();
      console.log(responseData);
    }
  } catch (error) {
    return ('Ошибка: ' + error.message);
  }
};