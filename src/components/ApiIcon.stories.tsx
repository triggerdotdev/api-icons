import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ApiIcon } from "./ApiIcon";
import { icons } from "../apis";

const meta: Meta = {
  title: "ApiIcon",
};
export default meta;

export const Grid: StoryObj<typeof GridLayout> = (args) => (
  <GridLayout {...args} />
);
Grid.args = {};

export const Individual: StoryObj<typeof ApiIcon> = (args) => (
  <ApiIcon {...args} />
);
Individual.args = {
  name: "airtable",
  className: "",
  style: {
    width: "100px",
    height: "100px",
  },
};

const schemes = [
  {
    name: "light",
    background: "#fff",
    color: "#000",
  },
  {
    name: "dark",
    background: "#000",
    color: "#fff",
  },
] as const;

function GridLayout() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1px" }}>
      {Object.keys(icons).map((iconName) => (
        <div
          key={iconName}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {schemes.map(({ name, background, color }) => (
            <div key={name} style={{ background, padding: "12px" }}>
              <h4
                style={{
                  margin: 0,
                  marginBottom: "4px",
                  fontFamily: "sans-serif",
                  color,
                }}
              >
                {iconName}
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <ApiIcon
                  name={iconName}
                  style={{ display: "block", width: "64px", height: "64px" }}
                />
                <div
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    gap: "4px",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <ApiIcon
                    name={iconName}
                    style={{ display: "block", width: "32px", height: "32px" }}
                  />
                  <ApiIcon
                    name={iconName}
                    style={{ display: "block", width: "16px", height: "16px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
