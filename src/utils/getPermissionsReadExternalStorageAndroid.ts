import { PermissionsAndroid } from 'react-native'

export const getPermissionsReadExternalStorageAndroid = async () => {
  const permissions = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: 'Cool Photo App Camera Permission',
      message:
         'Cool Photo App needs access to your camera ' +
         'so you can take awesome pictures.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK'
    }
  )

  return permissions
}
