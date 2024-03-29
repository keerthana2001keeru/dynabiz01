import Image from "next/image";
import React from "react";
import styles from "./iconWithTextCntrAlgn.module.scss";

export default function IconWithTextCntrAlgn(props) {
  return (
    <div className="container-fluid">
      <div className={"text-center " + styles.contentSet}>
        <Image
          height={60}
          width={60}
          src={props?.setCmp?.IconImage?.value}
          alt=""
        />
        <div className={styles.title}>{props?.setCmp?.Heading?.value}</div>
        <div className={styles.content}  dangerouslySetInnerHTML={{
                            __html: props?.setCmp?.description?.value,
                          }}   >
         
        </div>
      </div>
    </div>
  );
}
