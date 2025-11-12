import { Box, Container, Heading, Text, Card, Flex } from "@radix-ui/themes";
import { IoHeartOutline } from "react-icons/io5";

function Home() {
  return (
    <Container max-w-4xl mx-auto  size="3" py="6">
      <Box>
        <Heading size="8" mb="4"  className="text-pink-400">
          Enjoy your stay!
        </Heading>

        <Text size="4" mb="5" className="text-gray-800">
          <span className="animate-pulse">💗</span>
          <span>Hi there! You just stepped into a wed site me.</span>
          <span className="animate-pulse">💗</span>
        </Text>

        <Flex direction="column" gap="5">
          <Card className="bg-gray-800" mt="5">
            <Heading size="5" mb="2" className="flex items-center gap-2 ">
              <IoHeartOutline color="red" size={22}/>
              About my wed site!
            </Heading>

            <Text>
              เว็บไชต์นี้สร้างมาเพื่อการเเนะนำตัวของฉันเอง รวมไปถึงสกิลของฉันในการนำเสนอตัวเอง มาทำความรู้จักฉันกันค่ะ
            </Text>
          </Card>

          <Card className="bg-gray-800">
            <Heading size="5" mb="2" className="flex items-center gap-2">
              <IoHeartOutline color="red"  size={22}/>
              Technologies I Use
            </Heading>
            <Text>
              • Html,css,Java <br />
              • Rect+Tailwind css <br />
              • React + TypeScript <br />
              • React + Api <br />
              • React Router สำหรับการจัดการหน้าเว็บ <br />
              
            </Text>
          </Card>
           <Text size="5"  mt="2">
             <span className="animate-pulse">✨</span>
             <span>Thanks for stopping by — see you around</span>
             <span className="animate-pulse">✨</span>
           </Text>
        </Flex>
      </Box>
    </Container>
  );
}

export default Home;
