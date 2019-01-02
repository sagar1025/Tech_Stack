//The action creator.
//this function returns an on object called "action" that tells the reducer what to do
export const selectLibrary = (selectedLibraryId) => {
  return {
    type: 'select_library',
    payload: selectedLibraryId
  }
};
