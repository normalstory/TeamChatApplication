import { Channel, ChannelType, Server } from "@prisma/client";
import {create} from "zustand"

export type ModalType = "createServer" | "invite" | "editServer" | "members" | "createChannel" | "leaveServer" | "deleteServer" | "deleteChannel" | "editChannel" | "messageFile" | "deleteMessage" ; 

interface modalData{
    server?: Server;
    channel?: Channel;
    channelType?: ChannelType; 
    apiUrl?: string;
    query?: Record<string, any>;
}

interface modalStore{
    type: ModalType |null;
    data: modalData;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: modalData) => void;
    onClose: () => void;
}

export const useModal = create<modalStore>((set)=>({
    type: null,
    data:{},
    isOpen: false,
    onOpen: (type, data={}) => set({ isOpen: true, type, data}),
    onClose: () =>set({ type: null, isOpen: false})
}));