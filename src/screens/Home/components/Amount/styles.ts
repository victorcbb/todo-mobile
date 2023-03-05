import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  title: {
    color: '#4EA8DE',
    fontWeight: "700",
    fontFamily: 'Inter_700Bold',
    lineHeight: 17,
  },
  variantTitle: {
    color: '#8284FA',
    fontWeight: "700",
    fontFamily: 'Inter_700Bold',
    lineHeight: 17,
  },
  quantity: {
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontWeight: "700",
    fontFamily: 'Inter_700Bold',
    color: '#D9D9D9',
    fontSize: 12,
    lineHeight: 15,
  }
})