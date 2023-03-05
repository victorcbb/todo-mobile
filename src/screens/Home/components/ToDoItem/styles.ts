import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 8,
    borderColor: '#FFFFFF66',
  },
  checkButton: {
    marginLeft: 12,
    padding: 4,
  },
  text: {
    lineHeight: 20,
    flex: 1,
    color: '#F2F2F2',
  },
  textDashed: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  trashButton: {
    marginRight: 8,
  }
})