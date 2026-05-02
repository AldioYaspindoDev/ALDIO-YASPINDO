'use client'

import { SiGithub, SiTiktok, SiWhatsapp, SiInstagram } from "@icons-pack/react-simple-icons"
import { Button } from '@/components/ui/button'
import * as motion from "motion/react-client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Contact() {
    return (
        <motion.section
            className="pt-12 sm:pt-20 px-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="mb-12 rounded-base w-full border-2 border-border bg-background p-4 sm:p-6 shadow-shadow">
                <div>
                    <div className="mx-auto max-w-full">
                        <h2 className="text-xl sm:text-2xl text-center md:text-4xl pb-2 font-heading">CONTACT ME!</h2>
                        <p className="text-sm sm:text-base md:text-xl text-center pb-8 sm:pb-12 font-base max-w-2xl mx-auto px-2">
                            Available for Freelance —
                            Open to internship, freelance, and collaboration around full-stack web apps, backend services, and developer tools.
                        </p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-full sm:w-auto text-main border-2 border-border bg-background shadow-shadow p-2 px-6" asChild>
                            <Button>Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Media Social</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                {/* whatsapp */}
                                <a href="https://wa.me/628123456789">
                                    <DropdownMenuItem>
                                        <SiWhatsapp />
                                        <span>Whatsapp</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </a>
                                {/* github */}
                                <a href="https://github.com/AldioYaspindoDev">
                                    <DropdownMenuItem>
                                        <SiGithub />
                                        <span>GitHub</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/yaspindo_">
                                    <DropdownMenuItem>
                                        <SiInstagram />
                                        <span>Instagram</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </a>
                                {/* tiktok */}
                                <a href="https://www.tiktok.com/@way_dev?_r=1&_t=ZS-961O2QAyfE0">
                                    <DropdownMenuItem>
                                        <SiTiktok />
                                        <span>Tiktok</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </a>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </motion.section>
    );
}