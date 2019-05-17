export default {
  root: () => '/country',

  api: mode => {
    let protocol = window.location.protocol + '//';
    if (mode === 'DEV' || mode === 'MOCK') {
      return protocol + 'localhost'
    } else if (mode === 'CS') {
      return protocol + 'localhost'
    } else if (mode === 'PRE') {
      return protocol + 'localhost'
    } else if (mode === 'PROD') {
      return protocol + 'localhost'
    } else {
      return protocol + 'localhost'
    }
  },

  port: mode => {
    if (mode === 'DEV' || mode === 'MOCK') {
      return '1001'
    } else if (mode === 'CS') {
      return ''
    } else if (mode === 'PRE') {
      return ''
    } else if (mode === 'PROD') {
      return ''
    } else {
      return '1001'
    }
  },

  contextPath: mode => {
    if (mode === 'DEV' || mode === 'MOCK') {
      return ''
    } else if (mode === 'CS') {
      return ''
    } else if (mode === 'PRE') {
      return ''
    } else if (mode === 'PROD') {
      return ''
    } else {
      return ''
    }
  }
}
