# Direction
- ### Number Pad
    ```
    ７８９
    ４５６
    １２３
    ```
- ### 5：Standing
- ### 6：Forward
- ### 3
- ### 2：Crouching
- ### 1
- ### 4：Backward
- ### Jump (ジャンプ)
    - #### 9：Forward Jump (前ジャンプ)
    - #### 8：Neutral Jump (垂直ジャンプ)
    - #### 7：Backward Jump (バックジャンプ)

# Attack
- ### Attack Type
    - Punch (P)
    - Kick (K)
- ### Attack Strength
    - Light Attack (L, 弱)
    - Medium Attack (M, 中)
    - Heavy Attack (H, 強)
- ### Jump Attack (J)
    - eg：Jump Heavy Punch(JHP)
- ### Attack Attribute (攻撃の属性)
    <img src="./image/attack-attribute.png" width="50%">

    - ### 上段 (High)
    - ### 中段 (Overhead)
    - ### 下段 (Low)
- ### 特殊跳攻擊
    - ### Safe Jump (安全飛び, 詐欺飛び, 安全跳)：42F，前跳 + 跳攻擊連段 + 後
    - ### Cross-up (打背)：換邊攻擊對手，使對手需要變換方向防禦
    - ### F式：攻擊後，瞬間起跳並跳攻擊

# Command
- ### Motion
    - #### Quarter Circle Forward (QCF)：236
    - #### Quarter Circle Back (QCB)：214
    - #### Z motion：623
    - #### Half Circle motion (HC, 180 motion)：624
    - #### 360 motion (G)：6248
- ### 派生 (派生技, 追加技, Follow-up)
- ### 必殺技 (Special Move)
    - #### 昇竜 (Dragon Punch, DR)
    - #### 弾 (飛び道具, 波)
        - 弾抜け (穿波)
    - #### 当身 (Atemi)
    - #### 溜め技：技を出す際に一定時間方向キーを倒し続ける必要のある技
    - #### アーマー (Armor)：打撃攻撃に特定回数だけ耐えられる状態
- ### 特殊技 (Unique Attack)
- ### Super Art (SA, スーパーアーツ)
    - #### SA1, SA2, SA3
    - #### Critical Art (CA)
- ### 挑釁

# Combo (コンボ)
- ### Target Combo (TC)
- ### Air Combo (Juggle Combo, 浮空連段)：對手在空中
    - ### High-Air Combo：Air Combo，但高度更高
    - ### Highest-Air Combo：Air Combo，但高度比High-Air更高
- ### After Combo：只能接在Combo後面的Combo
- `ガード(Combo)` = Combo被防住
- `消費(Combo)` = 用Combo來消費

# Position
- 基準
    - $wall=0,1$
    - $half=\frac{1}{2}$
    - (wall+half)的中間：$`quarter=\frac{1}{4},\frac{3}{4}`$
    - (quater+half)的中間：$`qh=\frac{3}{8},\frac{5}{8}`$
    - (wall+quater)的中間：$`wq=\frac{1}{8},\frac{7}{8}`$
- 對手的位置($x$)
    - 場中：$`quarter(\frac{1}{4})≤x≤quarter(\frac{3}{4})`$
    - 靠牆 (Corner)：$`x=wall`$
    - 接近場中：$`quarter≤x≤half`$
        - QHH：$`qh≤x≤half`$
        - QQH：$`quarter≤x≤qh`$
    - 接近牆：$`wall<x<quarter`$
        - WQQ：$`wq≤x≤quarter`$
        - WWQ：$`wall≤x≤wq`$
- 自己的位置(m)
    - 牆邊：$`m=wall`$
- 與對手的距離
    - 近距離<中距離<遠距離
    - 中近距離：近距離~中距離
    - 中遠距離：中距離~遠距離
- 換邊：跟對手交換方向
    - 換邊(動作) = 該動作會造成換邊
    - 牆邊換邊：在自己靠牆的時候換邊

# Drive Gauge
- ### Drive Impact (DI, インパクト)：25F, HP + HK
    - #### Wall Splat (壁やられ)：guarding DI while they are near the corner
    - #### Stun：wall splat with BO
- ### Drive Parry (Parry, パリィ)：MP + MK
    - #### Perfect Parry (ジャスパ, ジャストパリィ)
- ### Drive Rush (DR, ラッシュ)：Parry + Dash
    - #### Cancel Drive Rush (CDR, キャンセルラッシュ)
    - #### 生ラッシュ
    - #### ラッシュ止め (截綠衝)
- ### OverDrive (OD)
- ### Drive Reversal (Dリバ, ドライブリバーサル)：When Guard/Parry/Down, 6 + DI

# <span id="throw"> 投げ (Throw)：LP + LK </span>
- ### Direction
    - #### 前投げ (Forward Throw)：LP + LK
    - #### 後ろ投げ (Backward Throw)：4 + LP + LK
- ### Throw Escape (投げ抜け)
- ### Command Throw (コマ投げ)
- ### Shimmy (シミー)：後退騙對手解摔，以此攻擊對手的解摔硬直

# Knocked Down (Down, ダウン, 倒地)
- ### Hard Knockdown (ハードダウン)
- ### <span id="oki"> 起き攻め (OKI, 壓起身) </span>
    - ### 持続当て (重ね, Meaty, 壓持續)
- ### 起き上がり
    - ### その場受け身 (原地起身)
    - ### 後方受け身 (後起身)：倒地時，按下兩顆手腳

# Frame (F, フレーム)
- ### 發生
- ### 硬直差
- ### <span id="frame-kill"> 消費 (Frame Kill, フレーム消費) </span>
- ### Delay (ディレイ)

# Street Fighter 6 (SF6)
- ### ガード (Blocking)
    - ### 立ちガード (Standing Block, 站防)
    - ### しゃがみガード (Crouch Block, 蹲防)
    - ### 連ガ (Block String)：連ガ時中間沒有空隙, 因此防守方無法使出任何招式, D反可以解除連防
- ### 歩き
    - ### 前歩き：6
    - ### 後ろ歩き：4
- ### ステ (Dash)
    - ### 前ステ (Forward Dash)：66
    - ### バクステ (Backward Dash)：44
- ### 補正 (ダメージ補正, Damage Scaling)
- ### Cancel (キャンセル)
    - ### Delayed Cancel (ディレイキャンセル)
- ### <span id="anti-air">対空 (Anti-Air)</span>
- ### 立ち回り
- ### ヒット確認 (Hit Confirm)
- ### Setup (Set, セットプレイ)
    - ### Reset (補正切り)
- ### Burn Out (BO)
    - ### BO磨血：對手BO時，削減對手的血量
- ### 打動力槽：削減對手的動力槽

# 択 (mix-up, 擇)
- ### 打摔擇 (strike/throw mix-ups)：打撃重ね、投げ重ね、シミー
- ### 中下擇：中段/下段
- ### 前後擇
- ### パナシ (Reversal, 凹)：自分が不利な状況のときに、相手の動きをよく見ず、隙の大きい強力な技や無敵技をギャンブルのように出す行為
- ### 投げ抜け
    - ### 遅らせ投げ抜け (延遲解摔)
- ### ジャンプ
    - #### 前ジャンプ
    - #### 垂直ジャンプ
    - #### バックジャンプ

# Counter
- ### Crush Counter (CC)
- ### Punish Counter (PC, パニカン)
    - #### 4F Punish
        - JP：6HK
        - Ken：輕龍尾腳, 輕迅雷
        - Vega：剪刀腳
        - Chunli：輕劈腿, OD劈腿
        - Viper：2HP
        - Ingrid：HP,6HP
    - #### 6F Punish
        - Dリバ
        - JP：MP, 2HP, 2HK, 輕弾
        - Ryu：2HP, 2MK
        - Zangief：MP*2
        - Jamie：輕推掌, 中推掌, 醉拳
    - #### 8F Punish
        - JP：6HK(蹲防), 中弾, 重弾
        - Zangief：6HK
        - Ken：中龍尾腳, OD龍尾腳
        - Ryu：中足刀
        - Lily：中蓄風, 重蓄風
        - Chunli：輕百裂腳, 中百裂腳
    - #### 10F Punish
        - [昇竜](#昇竜-dragon-punch-dr)
        - JP：3HP(中距離)
        - Gouki：2HK, HK(蹲防)
        - Ryu：2HK, 4HP, 中波掌擊, 輕足刀
        - Zangief：2HK, 3HK
        - Honda：OD頭槌
        - Vega：2HK, 3HK, Psycho Crusher, 埋炸彈, 踩頭
        - Jamie：2HK, 旋轉腳
        - Chunli：旋轉踢
        - Viper：2HK
        - Ingrid：2HK
- ### 相打ち (相殺)：與對手的攻擊互相抵消, 互相受到傷害
- ### 空振り (Whiff)
- ### 差し合い (差し返し, Whiff Punish)：對方空振り之後，攻擊(Punish)對手的收招硬直

# Character
- ### [Jamie](./character/jamie.md)
- ### [Ingrid](./character/ingrid.md)

