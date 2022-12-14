import React, { useState } from 'react';
import { View, Image, SafeAreaView, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { IMAGES } from '../../../assets/CONST/IMAGES';
import { styles } from './styles';
import InfoBadge from '../InfoBadge';

export default function Badge() {

  const [modalActive, setModalActive] = useState(false);

  return (


    <SafeAreaView>

      <View style={styles.containerModal}>
        <Modal 
          animationType="fade"
          transparent={false}
          visible={modalActive}
          onRequestClose={() => {
            setModalActive(false);
          }}
        >
          <View style={styles.modalView}>

            <InfoBadge />
          </View>
        </Modal>

      </View>


      <View style={styles.container}>

        <ScrollView horizontal={true}>
          <TouchableOpacity >
            <Image style={styles.item} source={IMAGES.badgeMerito} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.item} source={IMAGES.badgeConquista} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.item} source={IMAGES.badgeAvanco} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.item} source={IMAGES.badgePersistencia} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.item} source={IMAGES.conquista1} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.item} source={IMAGES.conquista2} />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => setModalActive(true)}>
            <Image style={styles.item} source={IMAGES.conquista3}  />
          </TouchableOpacity>
        </ScrollView>

      </View>
    </SafeAreaView>
  );

}