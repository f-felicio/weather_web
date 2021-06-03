import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";

export default function MyResponsiveLine({ daysList }) {
  const data = [
    {
      id: "Max",
      data: [],
    },
    {
      id: "Min",
      data: [],
    },
  ];

  daysList.map((item) => {
    let maxDay = {};
    let minDay = {};
    maxDay.x = item.label;
    maxDay.y = parseInt(item.hours[0].main.temp_max, 10);
    minDay.x = item.label;
    minDay.y = parseInt(item.hours[0].main.temp_min, 10);
    data[0].data.push(maxDay);
    data[1].data.push(minDay);
  });

  return (
    <MainContainer>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Temp Fº",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 300px;
`;
