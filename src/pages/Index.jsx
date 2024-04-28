import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <VStack spacing={4}>
          <Heading as="h1" size="xl" textAlign="center">
            غاتوصلك حتى لباب دارك😉
          </Heading>
          <Text fontSize="xl" color="gray.500">
            تصميم رائع😍
          </Text>
          <Image src="https://cdn.youcan.shop/stores/589ea88f2d49c91a650ce913036b1174/others/62PzgTnYPTQPDJvpn4eMLoZhlVHqlBND4SN0r3Ek.jpeg" alt="Product Image" boxSize="300px" objectFit="cover" borderRadius="full" />
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">تساعدك دعامة الركبة الطبية والرياضية للحماية والتخلص من الألم</Heading>
            <Text mt={4}>✨تخلصك من مشكل الإتهاب في الركبة والمفاصل عند ممارستك لأنشطتك اليومية</Text>
          </Box>
          <Button rightIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
            أطلب الآن
          </Button>
          <Stack spacing={3}>
            <Input placeholder="الاسم الكامل" size="md" />
            <Input placeholder="رقم الهاتف" size="md" />
            <Input placeholder="العنوان" size="md" />
            <Button colorScheme="blue" size="lg">
              تأكيد الطلب
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
