import Mock from 'mockjs'
Mock.mock('http://localhost:1001/country/CountryService/test', {
    success: true,
    msg: 'OK',
    data: {
      about: '我什么也不知道'
    }
  })