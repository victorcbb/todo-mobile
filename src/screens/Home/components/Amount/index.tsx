import { Text, View } from "react-native"
import { styles } from "./styles"

interface Amountprops {
  title: string
  quantity: number
} 

export function Amount({ title, quantity }: Amountprops) {
  return (
    <View style={styles.container}>
      <Text style={title === "Criadas" ? styles.title : styles.variantTitle}>
      {title}
      </Text>
      <Text style={styles.quantity}>
        {quantity}
      </Text>
    </View>
  )
}