import * as Updates from 'expo-updates';

export function useUpdate() {
  async function hasUpdate() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        return true;
      }

      return false;
    } catch (error) {
      console.log(error);
    }

    return false;
  }

  async function updateApp() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {updateApp, hasUpdate};
}
