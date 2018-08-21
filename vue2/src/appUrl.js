export default {
  root: () => '/country',

  api: mode => {
    let protocol = window.location.protocol + '//';
    if (mode === 'DEV' || mode === 'MOCK') {
      return protocol + 'localhost'
    } else if (mode === 'CS') {
      return protocol + 'cs.gsh56.com'
    } else if (mode === 'PRE') {
      return protocol + 'pre.gsh56.com'
    } else if (mode === 'PROD') {
      return protocol + 'www.gsh56.com'
    } else {
      return protocol + 'localhost'
    }
  },

  port: mode => {
    if (mode === 'DEV' || mode === 'MOCK') {
      return '4001'
    } else if (mode === 'CS') {
      return ''
    } else if (mode === 'PRE') {
      return ''
    } else if (mode === 'PROD') {
      return ''
    } else {
      return '4001'
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
