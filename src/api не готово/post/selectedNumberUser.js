const API_URL = 'https://example.com/api';

export const sendData = async (arrNumbFiledOne, numbFieldTwo, showYouWin) => {
  try {

    const dataToSend = {
      selectedNumber: {
        firstField: [...arrNumbFiledOne],
        secondField: [...numbFieldTwo]
      },
      isTicketWon: showYouWin
    };
    console.log(dataToSend)
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });


    if (!response.ok) {
      let retries = 2;
      console.log('hi')
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
          console.log(responseData);
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