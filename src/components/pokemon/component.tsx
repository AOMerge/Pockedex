import { StyleSheet, View, Text, Image } from "react-native";
import React, { ReactElement } from "react";
import { Body } from "./body/body";
import { NavPockemon } from "./nav/navigation";
import { Button } from "./button/button";
import { BodyNavigation } from "./body/bodyNavigation";
import AboutPokemon from "./about/about";
import { Stats } from "./stats/stats";
import { Evolution } from "./evolution/evolution";
import { PockemonButtonStyle } from "~/styles/styles";
import { ScreenPokemon as HeaderPokemon } from "../../styles/styles";

interface PokemonProps extends PokemonPagesProps {
  pockemon: any;
}

interface PokemonPagesProps {
  PockemonPages: number;
  setPockemonPages: any;
}

interface PokemonComponentProps {
  pockemon: any;
  PockemonPages: number;
}

interface component {
  Body({
    PockemonPages,
    pockemon,
    setPockemonPages,
  }: PokemonProps): ReactElement;
  NavPockemon({
    PockemonPages,
    setPockemonPages,
  }: PokemonPagesProps): ReactElement;
  BodyNavigation({
    pockemon,
    PockemonPages,
  }: PokemonComponentProps): ReactElement;
  Header({ pockemon }: { pockemon: any }): ReactElement;
}

export default class PokemonComponent implements component {
  constructor() {}

  /** this method is the header of the pokemon details
   * 
   * @param pockemon : Array 
   * @returns ReactElement
   */
  public Header({pockemon}: {pockemon: any}): ReactElement {
    return (
      <View style={HeaderPokemon.container}>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={HeaderPokemon.title}>{pockemon.name}</Text>
          <Text style={HeaderPokemon.id}>
            #{pockemon.id.toString().padStart(3, "0")}
          </Text>
        </View>
        <View style={HeaderPokemon.typesContainer}>
          {pockemon.type.map((item: any, index :number) => (
            <Text
              key={index}
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.5)",
                paddingVertical: 5,
                paddingHorizontal: 25,
                borderRadius: 22,
                color: "white",
              }}
            >
              {item}
            </Text>
          ))}
        </View>
        {
          pockemon.image &&
          <Image source={{ uri: pockemon.image }} style={HeaderPokemon.image} />
        }
      </View>
    );
  }

  /** this method is the main component of the pokemon details
   *
   * @param PockemonPages : number
   * @param pockemon : Array
   * @param setPockemonPages : Function
   * @returns ReactElement
   */

  public Body({
    PockemonPages,
    pockemon,
    setPockemonPages,
  }: PokemonProps): ReactElement {
    const Pockemon = new PokemonComponent();

    return (
      <Body>
        <Pockemon.NavPockemon
          PockemonPages={PockemonPages}
          setPockemonPages={setPockemonPages}
        />
        <Pockemon.BodyNavigation
          pockemon={pockemon}
          PockemonPages={PockemonPages}
        />
      </Body>
    );
  }
  /** this method is used to navigate between the different sections of the pokemon details
   *
   * @param PockemonPages : number
    @param setPockemonPages : Function
   * @returns ReactElement
   */
  public NavPockemon({
    PockemonPages,
    setPockemonPages,
  }: PokemonPagesProps): ReactElement {
    return (
      <NavPockemon>
        <Button
          title="About"
          Style={PockemonPages === 1 && PockemonButtonStyle.activate}
          onPress={() => setPockemonPages(1)}
        />
        <Button
          Style={PockemonPages === 2 && PockemonButtonStyle.activate}
          title="Stats"
          onPress={() => setPockemonPages(2)}
        />
        <Button
          Style={PockemonPages === 3 && PockemonButtonStyle.activate}
          title="Evolution"
          onPress={() => setPockemonPages(3)}
        />
      </NavPockemon>
    );
  }

  /** this method is the section that contains the details of the pokemon
   *
   * @param pockemon : Array
   *  @param PockemonPages: number
   * @return ReactElement
   */
  public BodyNavigation({
    pockemon,
    PockemonPages,
  }: PokemonComponentProps): ReactElement {
    const About = new AboutPokemon();

    return (
      <BodyNavigation>
        {(() => {
          switch (PockemonPages) {
            case 1:
              return <About.GetAbout pockemon={pockemon} />;
            case 2:
              return <Stats stats={pockemon.stats} />;
            case 3:
              return <Evolution evolution={pockemon.evolution} />;
            default:
              return <About.GetAbout pockemon={pockemon} />;
          }
        })()}
      </BodyNavigation>
    );
  }
}
