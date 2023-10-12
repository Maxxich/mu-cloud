import { User } from '../../src/entity/user'


const user: User & {email: {
  confirmed: boolean
}} = {
  adress: '@maxich',
  email: {
    confirmed: true
  },
  id: 1,
  name: 'Maxich',
  picture_source: {
    big: '',
    medium: '',
    small: '',
  }
}

export default {
    unknown: {
      title: 'unknown',
      session: null
    },
    loading: {
      title: 'loading',
      session: {
        data: null,
        status: 'loading'
      }
    },
    authenticated: {
      title: 'authenticated',
      session: {
        data: {
         user
        },
        status: 'authenticated'
      }
    },
    authenticatedNotConfirmed: {
      title: 'authenticated',
      session: {
        data: {
          user: {
            ...user,
            email: {
                confirmed: false
            },
          }
        },
        status: 'authenticated'
      }
    },
  };