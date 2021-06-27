import React from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  StatusBar,
  Animated,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import faker from "faker";
import Card from "../components/Card";

const BG_URL = {
  uri: "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

const ITEM_SIZE = 130;

const data = JSON.parse(
  `[{"key":"098b1568-2687-4353-8757-32f675bc5eb2","name":"Mr. Tonya Hartmann","image":"https://cdn.fakercloud.com/avatars/devinhalladay_128.jpg","jobTitle":"National Marketing Orchestrator","email":"Aidan_Donnelly50@yahoo.com"},{"key":"fc5ad430-c8ea-4774-aef7-8eda8a2c4c37","name":"Casey Sauer","image":"https://cdn.fakercloud.com/avatars/sgaurav_baghel_128.jpg","jobTitle":"Chief Division Designer","email":"Tobin17@gmail.com"},{"key":"2e4479a7-93b2-4d6f-85b0-dac3f9f2d610","name":"Angela Buckridge PhD","image":"https://cdn.fakercloud.com/avatars/ciaranr_128.jpg","jobTitle":"Principal Operations Assistant","email":"Martine_Abshire@hotmail.com"},{"key":"f36cf7d9-81c6-4049-9fea-67bc89275b2e","name":"Kelly Koch","image":"https://cdn.fakercloud.com/avatars/vytautas_a_128.jpg","jobTitle":"Customer Interactions Planner","email":"Conner_Mitchell87@yahoo.com"},{"key":"6d104ba4-2316-456b-aedc-17c95009f2cb","name":"Johnnie Thompson","image":"https://cdn.fakercloud.com/avatars/zvchkelly_128.jpg","jobTitle":"Dynamic Functionality Strategist","email":"Cali.Feil74@gmail.com"},{"key":"f1a8af4f-8cc5-4119-9430-8dc8759c6d9b","name":"Jessie Herzog","image":"https://cdn.fakercloud.com/avatars/rikas_128.jpg","jobTitle":"Forward Implementation Administrator","email":"Ellen67@hotmail.com"},{"key":"f7a8a9df-420f-40ef-8760-c66b2e6be89f","name":"Joy Miller","image":"https://cdn.fakercloud.com/avatars/snowwrite_128.jpg","jobTitle":"Global Program Consultant","email":"Clark.Hermiston9@hotmail.com"},{"key":"e87b2231-a7f3-486f-80b7-a379d870550e","name":"Lorena Wisozk","image":"https://cdn.fakercloud.com/avatars/olgary_128.jpg","jobTitle":"District Paradigm Planner","email":"Kamren.Beer85@yahoo.com"},{"key":"bf4e5008-65f8-4541-bdff-d452aea8bf7f","name":"Carole Hudson","image":"https://cdn.fakercloud.com/avatars/herkulano_128.jpg","jobTitle":"National Program Engineer","email":"Ryder47@yahoo.com"},{"key":"d7730844-a194-4e25-843f-6c52ca2d2339","name":"Dr. Carlos Rowe","image":"https://cdn.fakercloud.com/avatars/zauerkraut_128.jpg","jobTitle":"National Applications Technician","email":"Haven.Stark@gmail.com"},{"key":"cc5c475b-b944-4259-8ae5-eafeb9158a77","name":"Ignacio Greenfelder","image":"https://cdn.fakercloud.com/avatars/andresenfredrik_128.jpg","jobTitle":"International Creative Agent","email":"Kira_Luettgen60@yahoo.com"},{"key":"2895b4ff-23bb-414b-81d4-c52a4e148a65","name":"Peter Beahan","image":"https://cdn.fakercloud.com/avatars/deviljho__128.jpg","jobTitle":"Principal Program Facilitator","email":"Rosemarie8@hotmail.com"},{"key":"0574c037-3f60-489f-97c6-7cd39edd476c","name":"Drew Hoeger","image":"https://cdn.fakercloud.com/avatars/jasonmarkjones_128.jpg","jobTitle":"Future Accounts Facilitator","email":"Evans57@hotmail.com"},{"key":"1fa685af-3c26-4407-8588-6ebc0c6f0705","name":"Isabel Daniel","image":"https://cdn.fakercloud.com/avatars/brenmurrell_128.jpg","jobTitle":"National Research Planner","email":"Ezra_Bechtelar@yahoo.com"},{"key":"42c46144-0702-489f-8d06-f24aa4631e77","name":"Geneva Kertzmann","image":"https://cdn.fakercloud.com/avatars/sta1ex_128.jpg","jobTitle":"International Tactics Strategist","email":"Trenton.McCullough@gmail.com"},{"key":"68516659-ec98-4687-a1f6-d08587306f9a","name":"Jill Kovacek","image":"https://cdn.fakercloud.com/avatars/poormini_128.jpg","jobTitle":"Senior Configuration Assistant","email":"Laurie31@gmail.com"},{"key":"114f40e7-e5cc-48d0-92ad-612999e79bc5","name":"Meghan Armstrong","image":"https://cdn.fakercloud.com/avatars/juamperro_128.jpg","jobTitle":"Principal Optimization Officer","email":"Kaycee_Schmitt@hotmail.com"},{"key":"0acc3b00-057e-4b92-9ba4-b361d3eb90a4","name":"Christie Homenick","image":"https://cdn.fakercloud.com/avatars/charliecwaite_128.jpg","jobTitle":"Corporate Tactics Architect","email":"Laila42@gmail.com"},{"key":"c67b5f7f-6f65-4b33-99c9-712dd29c26c3","name":"Shaun Bartell","image":"https://cdn.fakercloud.com/avatars/langate_128.jpg","jobTitle":"International Infrastructure Executive","email":"Zachariah7@yahoo.com"},{"key":"d1c4633f-4e1d-4c58-b160-df4cf850d3d4","name":"Roland Roob","image":"https://cdn.fakercloud.com/avatars/trubeatto_128.jpg","jobTitle":"Investor Functionality Agent","email":"Dylan.Gutmann@yahoo.com"},{"key":"a0edbeb1-cd12-4a22-8a78-78aa0bded996","name":"Jon Buckridge","image":"https://cdn.fakercloud.com/avatars/victor_haydin_128.jpg","jobTitle":"Chief Program Director","email":"Arlo.Franecki@yahoo.com"},{"key":"93438635-3996-4dcf-a648-61f907a0763d","name":"Erica Torp Sr.","image":"https://cdn.fakercloud.com/avatars/anthonysukow_128.jpg","jobTitle":"Direct Assurance Engineer","email":"Earnest54@gmail.com"},{"key":"0c288fb3-2c94-4ff9-8d33-753a8a8ada87","name":"Gwen Koepp","image":"https://cdn.fakercloud.com/avatars/kvasnic_128.jpg","jobTitle":"International Configuration Administrator","email":"Nicholas1@yahoo.com"},{"key":"d130124a-1518-4599-ab86-4c87b88cf6e3","name":"Jimmie Parisian","image":"https://cdn.fakercloud.com/avatars/scottfeltham_128.jpg","jobTitle":"Regional Intranet Assistant","email":"Cornell.Dietrich31@hotmail.com"},{"key":"2791097e-0e2c-4042-8b5d-e5b131a346f9","name":"Leslie Walter","image":"https://cdn.fakercloud.com/avatars/jydesign_128.jpg","jobTitle":"Legacy Infrastructure Representative","email":"Alessandra_Haag66@yahoo.com"},{"key":"57d4811f-16b1-4c7a-b0bb-234d445971bd","name":"Kristie Baumbach","image":"https://cdn.fakercloud.com/avatars/kiwiupover_128.jpg","jobTitle":"International Research Coordinator","email":"Percy52@hotmail.com"},{"key":"0f3f4de5-7870-4b02-b754-5db8944aef82","name":"Willie Fisher","image":"https://cdn.fakercloud.com/avatars/balakayuriy_128.jpg","jobTitle":"Human Usability Agent","email":"Cassandre_Barrows@hotmail.com"},{"key":"e9fdbcd6-90bb-4aa6-90ad-df1840d566a2","name":"Leona Schoen","image":"https://cdn.fakercloud.com/avatars/thedamianhdez_128.jpg","jobTitle":"Lead Brand Consultant","email":"Ray_Schneider65@yahoo.com"},{"key":"5dde4392-e9e6-48da-8c68-dfec157d34d0","name":"Mrs. Leah Christiansen","image":"https://cdn.fakercloud.com/avatars/jitachi_128.jpg","jobTitle":"International Research Analyst","email":"Annetta16@gmail.com"},{"key":"b1a7dddb-857f-4993-b338-09fce16eee6f","name":"Dr. Jenna Collins","image":"https://cdn.fakercloud.com/avatars/miguelkooreman_128.jpg","jobTitle":"Senior Mobility Representative","email":"Sonny.Kirlin32@hotmail.com"}]`
);

export default class Profiles extends React.PureComponent {
  scrollY = new Animated.Value(0);
  profileRenderer = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const outputRange = [1, 1, 1, 0];
    const scale = this.scrollY.interpolate({
      inputRange,
      outputRange,
    });

    const opacity = this.scrollY.interpolate({
      inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)],
      outputRange: [1, 1, 1, 0],
    });
    return <Card {...item} style={{ transform: [{ scale }], opacity }} />;
  };
  handleScroll = (e) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: this.scrollY } } }])(
      e
    );
  };
  render() {
    return (
      <SafeAreaProvider mode='margin'>
        <ImageBackground source={BG_URL} style={{ flex: 1 }} blurRadius={10}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginHorizontal: 24,
              marginTop: StatusBar.currentHeight || 42,
            }}
          >
            <Image source={{ uri: faker.image.abstract() }} />
            <Image
              source={{ uri: faker.internet.avatar() }}
              style={{ width: 50, height: 50 }}
              borderRadius={25}
            />
          </View>
          <Animated.FlatList
            onScroll={this.handleScroll}
            data={data}
            renderItem={this.profileRenderer}
            keyExtractor={(item) => item.key}
          ></Animated.FlatList>
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
}
