export default {
  set: (dict,days,domain,path) => {
    let date = new Date(),
        expires,
        i;

    date.setTime(date.getTime() + ((days || 30) * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();

    for (i in dict) {
      if (dict.hasOwnProperty(i)) {
        document.cookie = i +
          '=' +
          dict[i] +
          expires +
          '; domain=' +
          (domain || 'douban.com') +
          '; path=' +
          (path || '/');
      }
    }
  },
  get: (name) => {
    let n = name + '=',
        ca = document.cookie.split(';'),
        i,
        c;

    for (i = 0; i < ca.length; i++) {
      c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(n) === 0) {

        return c.substring(n.length, c.length).replace(/\"/g, '');
      }
    }

    return null;
  }
}