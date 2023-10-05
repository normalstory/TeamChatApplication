"use client"

import { useEffect, useState } from "react"

import { EditServermodal } from "@/components/modals/edit-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { CreateServermodal } from "@/components/modals/create-server-modal"
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModel } from "@/components/modals/create-channel-modal";
import { LeaveServerModal } from "@/components/modals/leave-server-modal";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect( () => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServermodal />
            <InviteModal />
            <EditServermodal />
            <MembersModal/>
            <CreateChannelModel />
            <LeaveServerModal />
            <DeleteServerModal />
        </>
    )
}