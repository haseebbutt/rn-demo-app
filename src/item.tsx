import React, {useState} from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from '@emotion/native';

import {faker} from '@faker-js/faker';
import {RootStackParamList} from './stack';
import {getImage} from './utils/image';
import {Container} from './components/container';
import {Typography} from './components/typography';
import {DetailsLine} from './components/details-line';
import {DetailsTitle} from './components/details-title';
import {Cart} from './components/cart';

//
//

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({min: 0.1, max: 10, precision: 0.1});

//

export const Item = ({navigation, route}) => {
  console.log(route.params);

  const nav = navigation;
  // useNavigation<
  //   NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
  // >();
  console.log(route);

  const params = route.params.item;

  // useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  const [quantity, setQuantity] = useState<number>(5);

  if (!params) {
    return <Typography>Loading ...</Typography>;
  }

  nav.setOptions({
    title: params.name,
  });

  const image = getImage(900, params.id);
  console.log(image);

  //
  //

  return (
    <React.Fragment>
      <ScrollView>
        <Container>
          <ItemImage
            source={{uri: image}}
            size={Dimensions.get('screen').width * 0.9}
          />
        </Container>

        <Container>
          <Typography color={'black'} fontSize={18} weight="semiBold">
            {params.name}
          </Typography>

          {params.salePrice ? (
            <Typography fontSize={18} color="red">
              <ItemDiscountedPrice>SAR {params.price}</ItemDiscountedPrice>
              {'  '}
              SAR {params.price}
            </Typography>
          ) : (
            <Typography fontSize={18}>SAR {params.price}</Typography>
          )}
        </Container>

        <Container>
          <Typography>{params.description}</Typography>
        </Container>

        <Container>
          <DetailsTitle>Details</DetailsTitle>
          <DetailsLine label="Brand">{params.brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine label="SKU">
            <Text style={{color: 'black', fontWeight: 'bold'}}>{SPEC_2}</Text>
          </DetailsLine>

          <Typography weight="medium" />
          <Typography weight="medium" color={'black'}>
            Specifications
          </Typography>
          <DetailsLine label="Type">{SPEC_3}</DetailsLine>
          <DetailsLine label="Weight">{SPEC_4} kg</DetailsLine>
        </Container>
      </ScrollView>

      <Cart quantity={quantity} update={setQuantity} />
    </React.Fragment>
  );
};

//
//

const ItemImage = styled.Image<{size: number}>(props => ({
  width: props.size,
  height: props.size,
  marginVertical: 16,
  paddingHorizontal: '5%',
  borderRadius: 9,

  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
}));

const ItemDiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

ItemDiscountedPrice.defaultProps = {
  fontSize: 18,
  color: 'black',
};
