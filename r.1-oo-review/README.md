# Purchase Trackr

# User -< Purchase >- Item

User
    - ~~name~~
    - ~~purchase()~~
        Create a purchase for this user
    - find_by_name (instance method)

Purchase (this is a join class, must reference the other two object)
    - ~~user~~
    - ~~item~~

Item
    - ~~name~~
    - ~~users~~
        Returns an array of users who purchased the current item


# Iterators
* each
*   - All the other iterators are built on this
* select / filter
    - Returns a subset of the array it was called on based on a condition you provide
* find / detect
    - Returns the first element that matches condition you provide
* map / collect
    - Turns array of one thing into an array of something else
* reduce
    - Is complicated. Dont use it yet.
