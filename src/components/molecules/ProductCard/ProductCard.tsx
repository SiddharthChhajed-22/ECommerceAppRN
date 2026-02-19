import React, { memo, useCallback } from 'react';
import { View, Image } from 'react-native';
import { AppText } from '../../atoms/AppText';
import { AppButton } from '../../atoms/AppButton';
import { HARD_CODED } from '../../../api/config/constants';
import { productCardStyles } from './styles';
import type { ProductCardProps } from './types';

const ProductCardComponent: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handlePress = useCallback(() => {
    onAddToCart(product.id);
  }, [onAddToCart, product.id]);

  return (
    <View style={productCardStyles.card}>
      <Image
        source={{ uri: product.image }}
        style={productCardStyles.image}
        resizeMode="cover"
      />
      <View style={productCardStyles.info}>
        <AppText variant="subheading" style={productCardStyles.name}>
          {product.name}
        </AppText>
        <View style={productCardStyles.priceContainer}>
          <AppText variant="heading" style={productCardStyles.price}>
            {HARD_CODED.productCurrency}
            {product.price.toFixed(2)}
          </AppText>
        </View>
        <AppButton
          label="Add to Cart"
          onPress={handlePress}
          style={productCardStyles.button}
        />
      </View>
    </View>
  );
};

export const ProductCard = memo(ProductCardComponent);

