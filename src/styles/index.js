export const colors = {
  blue: '#4A90E2',
  red: '#FF6A60',
  primary: '#4E595D',
  secondary: '#929292',
  border: '#E4E4E4',
  tabPrimary: '#F7F9F9',
  white: '#FFF',
  black: '#000',
  darkerGray: '#F8F8F8',
  hotPink: '#F5206A'
};

export const fontSizes = {
  primary: 20,
  secondary: 16
};

export const headerStyles = {
  viewStyle: {
    backgroundColor: colors.darkerGray,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: fontSizes.primary
  }
};

export const cardStyles = {
  container: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
};

export const cardSectionStyles = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd',
    backgroundColor: colors.white
  }
};

export const NEDetailStyles = {
  headerTitle: {
    fontSize: 18
  },
  imageContainer: {
    height: 300,
    width: null,
    flex: 1
  }
};

export const buttonStyles = {
  buttonContainer: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: colors.hotPink,
    borderColor: colors.hotPink
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    color: colors.white
  }
};
