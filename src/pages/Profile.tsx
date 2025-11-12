import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  Flex,
  Avatar,
  Badge,
  Separator,
} from "@radix-ui/themes";
import { IoChatboxOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

function Profile() {
  return (
    <Container max-w-4xl mx-auto  size="3" py="6">
      <Card className="bg-pink-50">
        <Flex direction="column" gap="4">
          <Flex align="center" gap="4">
            <Avatar
              size="8"
              radius="full"
              fallback="SP"
              color="blue"
              src="/bb.jpg"
              alt="รูป"
            >
            </Avatar>

            <Box className="text-amber-300">
              <Heading size="7">Thananika Thaomaisom</Heading>
              <Text size="3" className="text-gray-800">
                นักศึกษาวิศวกรรมคอมพิวเตอร์
              </Text>
            </Box>
          </Flex>

          <Separator size="4" />
          <Box>
            <Heading size="5" mb="3" className="flex items-center gap-2">
              <IoChatboxOutline color="pink" />
              About Me!
            </Heading>
            <Text>
              • สวัสดีค่ะ ฉันชื่อ ฐานนิกา เท่าไม้สม
              เป็นคนที่หลงใหลในโลกของเทคโนโลยีและการสร้างสรรค์เว็บไซต์
              ชอบเรียนรู้สิ่งใหม่ ๆ และพัฒนาทักษะด้านโปรแกรมมิ่งอยู่เสมอ
              เพราะเชื่อว่า “การเรียนรู้ไม่มีวันสิ้นสุด” 🌷
              <br />• Hi! I’m Thananika Thaomaisom I’m passionate about
              technology and web development. I love exploring new ideas,
              learning new things, and improving my.🌸
            </Text>
          </Box>

          <Separator size="4" />
          <Box>
            <Heading size="5" mb="3" className="flex items-center gap-2">
              <HiAcademicCap color="blue" />
              <span>My Learning Journey</span>
            </Heading>
            <Card className="bg-purple-300" mb="3">
              <Flex direction="column" gap="2">
                <Heading size="4">ปริญญาตรี วิศวกรรมศาสตร์บัณฑิต</Heading>
                <Text color="gray">สาขาวิศวกรรมคอมพิวเตอร์</Text>
                <Text color="gray">มหาวิทยาลัยธุรกิจบัณทิตย์</Text>
                <Text size="2" color="gray">
                  2566 - 2569
                </Text>
              </Flex>
            </Card>
          </Box>
          <Separator size="4" />
          <Box>
            <Heading size="5" mb="3" className="flex items-center gap-2">
              <IoBulbOutline color="purple" />
              My Projects
            </Heading>
            <Flex gap="2" wrap="wrap">
              <Badge size="2" color="pink">
                Pibatlaew – Disaster Awareness Website
              </Badge>
              <Badge size="2" color="purple">
                shopping Website
              </Badge>
              <Badge size="2" color="pink">
                React + Firebase + Vite
              </Badge>
              <Badge size="2" color="blue">
                Smart Library Management System
              </Badge>
            </Flex>
          </Box>
          <Separator size="4" />
          <Box>
            <Heading size="5" mb="3" className="flex items-center gap-2">
              <IoFolderOpenOutline color="blue" />
              Skills & Abilities
            </Heading>
            <Flex gap="2" wrap="wrap">
              <Badge size="2" color="blue">
                💻 HTML/CSS
              </Badge>
              <Badge size="2" color="green">
                🌈 JavaScript
              </Badge>
              <Badge size="2" color="purple">
                🌀 TypeScript
              </Badge>
              <Badge size="2" color="orange">
                🌷 React
              </Badge>
              <Badge size="2" color="red">
                🔥 Node.js
              </Badge>
              <Badge size="2" color="cyan">
                🐙 Git/GitHub
              </Badge>
              <Badge size="2" color="pink">
                ⏰ Time Management
              </Badge>
              <Badge size="2" color="indigo">
                ✨ Teamwork
              </Badge>
            </Flex>
          </Box>
          <Separator size="4" />
          <Box>
            <Heading size="5" mb="3" className="flex items-center gap-2">
              <BsTelephone color="pink" />
              Contact Me
            </Heading>
            <Flex gap="2" wrap="wrap">
              <Badge size="2" color="blue">
                ✉️ th4nigaaom@gmail.com
              </Badge>
              <Badge size="2" color="blue">
                📞 099-427-5666
              </Badge>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
}

export default Profile;
