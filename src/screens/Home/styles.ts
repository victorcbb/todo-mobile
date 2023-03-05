import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  insertToDo: {
    marginTop: -26,
    width: 327,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    backgroundColor: '#262626',
    marginRight: 4,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#F2F2F2',
  },
  button: {
    padding: 18,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  headerList: {
    width: 327,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  toDoList: {
    width: 327,
    marginTop: 20,
  },
  listEmpty: {
    width: '100%',
    paddingTop: 48,
    paddingHorizontal: 20,
    borderTopColor: '#333333',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  clipboardImage: {
    marginBottom: 16,
  },
  strongText: {
    fontFamily: 'Inter_700Bold',
    fontWeight: '700',
    color: '#808080',
    lineHeight: 19.6,
  },
  normalText: {
    fontFamily: 'Inter_400Regular',
    color: '#808080',
    lineHeight: 19.6,
  }
})