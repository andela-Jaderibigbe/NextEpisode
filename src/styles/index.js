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
    height: 50,
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
    borderColor: colors.border,
    borderBottomWidth: 0,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15
  }
};

export const cardSectionStyles = {
  container: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: colors.white
  }
};

export const NEItemStyles = {
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '600'
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
    borderRadius: 3,
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
