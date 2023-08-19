import * as React from "react";
import { Link } from "gatsby";
import {
  containerProject,
  heading,
  line,
  projects,
  project1,
  img,
  description,
  stuff,
  head,
  wrap,
  button,
} from "./project.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Project = () => {
  return (
    <div className={containerProject}>
      <h2 className={heading}>Projects</h2>
      <div className={line}></div>
      <div className={projects}>
        <Link to="" className={project1}>
        <div className={stuff}>
          <StaticImage
            className={img}
            alt="a turned-on light bulb"
            src="../images/vote.png"
          />
          <h3 className={head}>VoteChain</h3>
          <p className={description}>
            Introducing "VoteChain" - a witty and secure voting system powered
            by solidity. With its blockchain-based infrastructure, users can
            cast their votes, admins can effortlessly add candidates, and
            real-time results keep everyone informed. Experience the future of
            democracy on VoteChain, where each vote counts and transparency
            reigns.
          </p>
        </div>
        </Link>
          {/* <button>More on GitHub</button> */}
            <Link to="" className={project1}>
        <div className={stuff}>

          <StaticImage
            className={img}
            alt="a turned-on light bulb"
            src="../images/todo.png"
          />
          <h3 className={head}>EtherTasks</h3>
          <p className={description}>
            Introducing "EtherTasks" - an Ethereum-based to-do list powered by
            solidity. Organize, track, and conquer tasks on the blockchain.
            Collaborate, celebrate progress, and experience decentralized
            productivity. Join us on this exciting journey and unleash the
            potential of EtherTasks today!
          </p>
        </div>
            </Link>
          {/* <button>More on GitHub</button> */}
        <Link to="" className={project1}>
        <div className={stuff}>
          <StaticImage
            className={img}
            alt="a turned-on light bulb"
            src="../images/nft.png"
          />
          <h3 className={head}>NFTVotex</h3>
          <p className={description}>
            Introducing "NFT Vortex" - a captivating Dapp where art,
            collectibles, and blockchain unite. Discover, collect, and showcase
            rare NFTs in a vibrant community. Immerse yourself in the world of
            digital treasures and own your unique digital gallery. Join the
            vortex of NFTs and experience the magic today!
          </p>
          {/* <button>More on GitHub</button> */}
        </div>
        </Link>
      </div>
          <Link className={wrap}><button className={button}>More projects ...</button></Link>
          {/* <div className={space}></div> */}
    </div>
  );
};

export default Project;
