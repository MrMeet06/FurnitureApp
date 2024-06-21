import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../Consts/Colors';

const DetailsScreen = ({ navigation, route }) => {
  const furniture = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    // This is where you would handle adding to the cart
    // For now, we will just console log the item and quantity
    console.log('Added to cart:', furniture.name, 'Quantity:', quantity);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <TouchableOpacity style={style.headerBtn} onPress={navigation.goBack}>
          <Icon name="chevron-left" size={25} />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Details</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={style.headerBtn} onPress={() => navigation.navigate('Shop')}>
            <Icon name="shopping" size={25} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={style.headerBtn} onPress={() => navigation.navigate('Cart')}>
            <Icon name="cart" size={25} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Furniture image */}
        <ImageBackground
          resizeMode="cover"
          style={style.backgroundImage}
          source={furniture.image}
        >
          <View style={style.ratingContainer}>
            <View style={style.ratingTag}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={style.ratingText}>4.5</Text>
            </View>
            <Text style={style.reviewsText}>250 Reviews</Text>
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          <Text style={style.furnitureName}>{furniture.name}</Text>
          <Text style={style.descriptionTitle}>Description</Text>
          <Text style={style.descriptionText}>
            Designed modern chair with luxury curves in an organic yet structured design that holds the sitting body and provides a feeling of relaxation while offering excellent back support.
          </Text>
          <View style={style.priceContainer}>
            <Text style={style.priceText}>{furniture.price}</Text>
            <View style={style.quantityContainer}>
              <TouchableOpacity style={style.quantityBtn} onPress={increaseQuantity}>
                <Icon name="plus" size={20} />
              </TouchableOpacity>
              <Text style={style.quantityText}>{quantity}</Text>
              <TouchableOpacity style={style.quantityBtn} onPress={decreaseQuantity}>
                <Icon name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.actionsContainer}>
            <TouchableOpacity style={style.favouriteBtn}>
              <Icon name="heart-outline" size={28} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={style.addToCartBtn} onPress={addToCart}>
              <Text style={style.addToCartText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImage: {
    marginHorizontal: 20,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  ratingContainer: {
    height: 60,
    width: 70,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    borderTopLeftRadius: 15,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 10,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  reviewsText: {
    fontSize: 9,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  furnitureName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  descriptionTitle: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.primary,
  },
  descriptionText: {
    color: COLORS.dark,
    fontSize: 12,
    lineHeight: 20,
  },
  priceContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    color: COLORS.yellow,
    fontSize: 22,
    fontWeight: 'bold',
  },
  quantityContainer: {
    height: 35,
    width: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityBtn: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favouriteBtn: {
    height: 50,
    width: 50,
    elevation: 7,
    marginRight: 30,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartBtn: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
  addToCartText: {
    color: COLORS.white,
  },
});

export default DetailsScreen;
