import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from "./pages/OrphanageMap";
import OrphanagesDetails from "./pages/OrphanagesDetails";
import SelectMapPosition from "./pages/CreateOrphanage/SelectMapPosition";
import OrphanageData from "./pages/CreateOrphanage/OrphanageData";
import Header from "./components/Header";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ cardStyle: { backgroundColor: "#f2f3f5" } }}>
        <Screen
          name="OrpanageMap"
          component={OrphanagesMap}
          options={{ headerShown: false }}
        ></Screen>
        <Screen
          name="OrphanageDetails"
          component={OrphanagesDetails}
          options={{
            header: () => <Header title="Orphanato" showCancel={false} />,
          }}
        ></Screen>
        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{ header: () => <Header title="Selecione no mapa" /> }}
        ></Screen>
        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{ header: () => <Header title="Informe os dados" /> }}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
