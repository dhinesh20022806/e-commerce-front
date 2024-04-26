import React from "react";
import styled from "styled-components";

const Continer = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
`;
const Image = styled.img`
    width: 40px;
    border-radius: 50%;
`;
const StyledHeader = styled.div`
    width: 100%;
    height: 70px;
    padding: 5px 25px;
    background-color: #644930;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-right-radius: 35px;
`;

const Heading = styled.div`
    text-transform: uppercase;
    color: white;
`;
const HeadingLeftSide = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const StyledBody = styled.div`
    height: 350px;
    background-color: #e4c8a0;
`;
const StyledFooter = styled.form`
    width: 100%;
    height: 70px;
    background-color: #644930;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submmited");
    const formData = new FormData(event.target);
    const data = Object.formEntries(formData);
    console.log(data);
};

const ChatBot = () => {
    return (
        <Continer>
            <StyledHeader>
                <HeadingLeftSide>
                    <figure>
                        <Image
                            src="http://localhost:3001/chatbot.jpeg"
                            alt="chatbot"
                            width="50px"
                        />
                    </figure>
                    <Heading>
                        <h1>cratfia ai</h1>
                    </Heading>
                </HeadingLeftSide>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 text-white "
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </StyledHeader>
            <StyledBody></StyledBody>
            <StyledFooter onSubmit={handleSubmit}>
                <input
                    className="w-10/12 p-2 rounded-md border-none outline-none text-[#644930]"
                    placeHolder="Enter you query"
                    name="query"
                    type="text"
                />
                <button className="bg-white rounded-full p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-[#644930] border-none "
                    >
                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                </button>
            </StyledFooter>
        </Continer>
    );
};

export default ChatBot;
